import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { Locale } from '@/i18n';
import { appName, gitConfig } from './shared';

const localeNav = {
  zh: { title: appName, url: '/' },
  'zh-tw': { title: '提問的智慧', url: '/zh-tw' },
  en: { title: 'Smart Questions', url: '/en' },
} satisfies Record<Locale, { title: string; url: string }>;

const localeLinks = {
  zh: { home: '主页', blog: '博客' },
  'zh-tw': { home: '主頁', blog: '部落格' },
  en: { home: 'Home', blog: 'Blog' },
} satisfies Record<Locale, { home: string; blog: string }>;

export function baseOptions(locale: Locale = 'zh'): BaseLayoutProps {
  const nav = localeNav[locale];
  const links = localeLinks[locale];

  return {
    nav: {
      title: nav.title,
      url: nav.url,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: 'main',
        text: links.home,
        url: 'https://www.liushen.fun/',
        external: true,
        active: 'none',
      },
      {
        type: 'main',
        text: links.blog,
        url: 'https://blog.liushen.fun/',
        external: true,
        active: 'none',
      },
    ],
  };
}
