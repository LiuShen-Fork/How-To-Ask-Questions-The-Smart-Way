import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    zh: 'english',
    'zh-tw': 'english',
    en: 'english',
  },
});
