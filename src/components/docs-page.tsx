import { getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { normalizeLocale, type Locale, withLocale } from '@/i18n';

export async function renderDocsPage(slug: string[] | undefined, locale: Locale) {
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateDocsParams(locale?: Locale) {
  return source
    .generateParams()
    .filter((params) => !locale || normalizeLocale(params.lang) === locale)
    .map(({ slug, lang }) => ({ slug, lang: normalizeLocale(lang) }));
}

export async function generateDocsMetadata(slug: string[] | undefined, locale: Locale): Promise<Metadata> {
  const page = source.getPage(slug, locale);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: page.url,
      languages: {
        'zh-CN': withLocale(page.url, 'zh'),
        'zh-TW': withLocale(page.url, 'zh-tw'),
        en: withLocale(page.url, 'en'),
      },
    },
  };
}
