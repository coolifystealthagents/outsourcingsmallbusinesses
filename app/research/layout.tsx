import type { ReactNode } from 'react';
import { ArticleEnhancements } from '../article-enhancements';

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return <>{children}<ArticleEnhancements family="research" /></>;
}
