import { Provider } from '@/components/provider';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider locale="zh-tw">
      <HomeLayout {...baseOptions('zh-tw')}>{children}</HomeLayout>
    </Provider>
  );
}
