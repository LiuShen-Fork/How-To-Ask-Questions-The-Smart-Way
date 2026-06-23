import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { docsContentRoute, docsRoute } from './shared';
import { i18n } from '@/i18n';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  i18n,
  url: (slugs, locale) => {
    const path = [docsRoute, ...slugs].join('/');
    if (locale === 'en') return `/en${path}`;
    if (locale === 'zh-tw') return `/zh-tw${path}`;
    return path;
  },
  plugins: [],
});

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  const prefix = page.locale === 'en' ? '/en' : page.locale === 'zh-tw' ? '/zh-tw' : '';

  return {
    segments,
    url: `${prefix}${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
