import { BlogListing } from "./blog-listing";
export const metadata = { alternates: { canonical: 'https://outsourcingsmallbusinesses.com/blog' },
  title: "Blog",
  description: "Guides for planning Philippines-based staffing.",
};
export default function Blog() {
  return <BlogListing />;
}
