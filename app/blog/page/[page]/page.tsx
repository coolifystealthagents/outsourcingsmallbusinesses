import { notFound, permanentRedirect } from 'next/navigation';
import { blogPosts } from "../../../data";
import { BlogListing, PAGE_SIZE } from "../../blog-listing";
function checkedPage(page: string) {
  const total = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
  if (!/^[1-9]\d*$/.test(page) || Number(page) > total) notFound();
  return Number(page);
}
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const n = checkedPage((await params).page);
  const route = n === 1 ? '/blog' : `/blog/page/${n}`;
  return { title: `Blog — Page ${n}`, description: 'Practical small-business support guides, including owner approvals, customer follow-up, and recurring work handoffs.', alternates: { canonical: `https://outsourcingsmallbusinesses.com${route}` } };
}
export function generateStaticParams() {
  return Array.from(
    { length: Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE)) },
    (_, i) => ({ page: String(i + 1) }),
  );
}
export default async function NumberedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = checkedPage(page);
  if (n === 1) permanentRedirect("/blog");
  return <BlogListing page={n} />;
}
