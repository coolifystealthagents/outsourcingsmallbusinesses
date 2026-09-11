import aug19Meta from '../aug19-meta.json';
import { fleetServices, researchPosts } from '../fleet-content';
import { blogPosts } from '../data';
const base = 'https://outsourcingsmallbusinesses.com';
export async function GET() {
  const aug19Paths = Object.entries(aug19Meta).map(([slug, value]) => `/${(value as { family: string }).family}/${slug}`);
  const pages = ['', '/services', '/blog', '/research', '/contact-us', '/privacy', '/terms', '/cancellation-policy'];
  const blogPages = Array.from({ length: Math.max(1, Math.ceil(blogPosts.length / 20)) }, (_, index) => index + 1).filter((page) => page > 1).map((page) => `/blog/page/${page}`);
  const safeBlogPosts = blogPosts.filter((post) => post.slug !== 'top-25-outsourcing-companies-small-business');
  const urls = [...aug19Paths, ...pages, ...fleetServices.map((service) => `/services/${service.slug}`), ...safeBlogPosts.map((post) => `/blog/${post.slug}`), ...blogPages, ...researchPosts.map((post) => `/research/${post.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Array.from(new Set(urls)).map((path) => `<url><loc>${base}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
