import { researchPosts } from '../../../fleet-content';
import { ResearchListing, PAGE_SIZE } from '../../research-listing';
export function generateStaticParams() {
  return Array.from({length: Math.max(1, Math.ceil(researchPosts.length / PAGE_SIZE))}, (_, i) => ({page: String(i + 1)}));
}
export async function generateMetadata({params}: {params: Promise<{page: string}>}) {
  const {page} = await params;
  return {title: `Small Business Research - Page ${page}`, description: 'Research notes about Philippines-based staffing and operations.', alternates: {canonical: `https://outsourcingsmallbusinesses.com${page === '1' ? '/research' : `/research/page/${page}`}`}};
}
export default async function ResearchPage({params}: {params: Promise<{page: string}>}) {
  const {page} = await params;
  return <ResearchListing page={Number(page)} />;
}
