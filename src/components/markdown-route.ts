import { getLLMText, getPageMarkdownUrl, source } from '@/lib/source';
import type { Locale } from '@/i18n';
import { notFound } from 'next/navigation';

export async function renderMarkdown(slug: string[] | undefined, locale: Locale) {
  const page = source.getPage(slug?.slice(0, -1), locale);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateMarkdownParams(locale: Locale) {
  return source.getPages(locale).map((page) => ({
    slug: getPageMarkdownUrl(page).segments,
  }));
}
