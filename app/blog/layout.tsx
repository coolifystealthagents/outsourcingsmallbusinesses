import type { ReactNode } from 'react';
import { BlogBanner } from '../blog-banners';
import { ArticleEnhancements } from '../article-enhancements';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>
    <BlogBanner position="top" />
    {children}
    <ArticleEnhancements family="blog" />
    <BlogBanner position="middle" />
    <BlogBanner position="bottom" />
  </>;
}
