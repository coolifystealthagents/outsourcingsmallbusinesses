'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function slugify(value: string, index: number) {
  const slug = value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  return slug || `article-section-${index + 1}`;
}

export function ArticleEnhancements({ family }: { family: 'blog' | 'research' }) {
  const pathname = usePathname();
  useEffect(() => {
    const article = document.querySelector<HTMLElement>(family === 'blog' ? 'article.guide-article, article.strict-article' : 'article.article-shell');
    if (!article || article.dataset.editorialEnhanced === 'true') return;
    const headings = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2'));
    if (!headings.length) return;
    article.dataset.editorialEnhanced = 'true';
    article.classList.add('editorial-article');
    const used = new Set<string>();
    const items = headings.map((heading, index) => {
      let id = heading.id || slugify(heading.textContent || '', index);
      const base = id;
      let suffix = 2;
      while (used.has(id) || (document.getElementById(id) && document.getElementById(id) !== heading)) id = `${base}-${suffix++}`;
      used.add(id);
      heading.id = id;
      heading.style.scrollMarginTop = '112px';
      return { heading, id, label: heading.textContent?.trim() || `Section ${index + 1}` };
    });
    const aside = document.createElement('aside');
    aside.className = 'article-sidebar';
    aside.setAttribute('aria-label', 'Article navigation and supporting information');
    const nav = document.createElement('nav');
    nav.className = 'article-toc';
    nav.setAttribute('aria-label', 'Table of contents');
    const title = document.createElement('h2');
    title.textContent = 'In this article';
    nav.appendChild(title);
    const list = document.createElement('ol');
    const anchors = items.map(({ id, label }) => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `#${id}`;
      anchor.textContent = label;
      li.appendChild(anchor);
      list.appendChild(li);
      return anchor;
    });
    nav.appendChild(list);
    aside.appendChild(nav);
    const support = document.createElement('section');
    support.className = 'article-support';
    support.innerHTML = '<h2>Plan the work lane</h2><p>Use the examples and boundaries in this article to prepare a reviewable scope for a Philippines-based specialist.</p><a href="/services">Explore services</a><a href="/contact-us">Contact Us</a>';
    aside.appendChild(support);
    const shell = document.createElement('div');
    shell.className = 'editorial-shell';
    article.parentNode?.insertBefore(shell, article);
    shell.append(article, aside);

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      anchors.forEach(anchor => anchor.removeAttribute('aria-current'));
      const active = anchors[items.findIndex(item => item.heading === visible.target)];
      active?.setAttribute('aria-current', 'location');
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    items.forEach(item => observer.observe(item.heading));
    return () => {
      observer.disconnect();
      article.removeAttribute('data-editorial-enhanced');
      article.classList.remove('editorial-article');
      items.forEach(({ heading }) => { heading.style.scrollMarginTop = ''; });
      if (shell.parentNode) {
        shell.parentNode.insertBefore(article, shell);
        shell.remove();
      }
    };
  }, [family, pathname]);
  return null;
}
