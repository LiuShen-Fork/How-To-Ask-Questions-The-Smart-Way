'use client';
import SearchDialog from '@/components/search';
import { i18nUI, normalizeLocale, type Locale, withLocale } from '@/i18n';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function Provider({ children, locale = 'zh' }: { children: ReactNode; locale?: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <RootProvider
      search={{ SearchDialog }}
      i18n={{
        ...i18nUI.provider(locale),
        onLocaleChange: (nextLocale) => {
          router.push(withLocale(pathname, normalizeLocale(nextLocale)));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
