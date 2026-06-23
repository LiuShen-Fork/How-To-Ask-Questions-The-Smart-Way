import { Provider } from '@/components/provider';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider locale="zh-tw">
      <DocsLayout tree={source.getPageTree('zh-tw')} {...baseOptions('zh-tw')}>
        {children}
      </DocsLayout>
    </Provider>
  );
}
