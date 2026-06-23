import type { Metadata } from 'next';
import { siteUrl } from '@/lib/shared';
import { SiteFooter } from '@/components/site-footer';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: '提问的智慧',
    template: '%s | 提问的智慧',
  },
  description: '一份关于技术提问、求知姿态与协作伦理的三语言阅读指南。',
  metadataBase: new URL(siteUrl),
  authors: [{ name: 'LiuShen', url: 'https://www.liushen.fun' }],
  creator: 'LiuShen',
  publisher: '清羽飞扬',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <div className="flex min-h-screen flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
