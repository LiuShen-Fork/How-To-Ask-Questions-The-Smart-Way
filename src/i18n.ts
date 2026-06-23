import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  languages: ['zh', 'zh-tw', 'en'],
  defaultLanguage: 'zh',
  hideLocale: 'default-locale',
  parser: 'dir',
});

export const i18nUI = defineI18nUI(i18n, {
  zh: {
    displayName: '简体中文',
    'Search(search trigger)': '搜索',
    'Search(search dialog)': '搜索文档',
    'No results found(search dialog)': '没有找到结果',
    'Open Search(search trigger)(aria-label)': '打开搜索',
    'Toggle Theme(theme switcher)(aria-label)': '切换主题',
    'Light(theme switcher)(aria-label)': '浅色',
    'Dark(theme switcher)(aria-label)': '深色',
    'System(theme switcher)(aria-label)': '跟随系统',
    'On this page(table of contents)': '本页目录',
    'No Headings(table of contents)': '暂无目录',
    'Previous Page(pagination)': '上一页',
    'Next Page(pagination)': '下一页',
    'Edit on GitHub(edit page)': '在 GitHub 编辑',
    'View as Markdown(page actions)': '查看 Markdown',
    'Copy Markdown(page actions)': '复制 Markdown',
    'Open(page actions)': '打开',
    'Choose a language(language switcher)': '切换语言',
    'Choose a language(language switcher)(aria-label)': '切换语言',
  },
  'zh-tw': {
    displayName: '繁體中文',
    'Search(search trigger)': '搜尋',
    'Search(search dialog)': '搜尋文件',
    'No results found(search dialog)': '沒有找到結果',
    'Open Search(search trigger)(aria-label)': '開啟搜尋',
    'Toggle Theme(theme switcher)(aria-label)': '切換主題',
    'Light(theme switcher)(aria-label)': '淺色',
    'Dark(theme switcher)(aria-label)': '深色',
    'System(theme switcher)(aria-label)': '跟隨系統',
    'On this page(table of contents)': '本頁目錄',
    'No Headings(table of contents)': '暫無目錄',
    'Previous Page(pagination)': '上一頁',
    'Next Page(pagination)': '下一頁',
    'Edit on GitHub(edit page)': '在 GitHub 編輯',
    'View as Markdown(page actions)': '查看 Markdown',
    'Copy Markdown(page actions)': '複製 Markdown',
    'Open(page actions)': '開啟',
    'Choose a language(language switcher)': '切換語言',
    'Choose a language(language switcher)(aria-label)': '切換語言',
  },
  en: {
    displayName: 'English',
  },
});

export type Locale = (typeof i18n.languages)[number];

export function normalizeLocale(locale?: string): Locale {
  if (locale === 'en') return 'en';
  if (locale === 'zh-tw') return 'zh-tw';
  return 'zh';
}

export function withLocale(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const unlocalized = clean.replace(/^\/(?:en|zh-tw)(?=\/|$)/, '') || '/';

  if (locale === 'zh') return unlocalized;
  return `/${locale}${unlocalized === '/' ? '' : unlocalized}`;
}

export function alternateLocalePath(path: string, locale: Locale): string {
  return withLocale(path, locale === 'en' ? 'zh' : 'en');
}
