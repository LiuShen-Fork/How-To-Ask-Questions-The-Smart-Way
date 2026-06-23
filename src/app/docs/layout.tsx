import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Provider } from '@/components/provider';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <Provider locale="zh">
      <DocsLayout tree={source.getPageTree('zh')} {...baseOptions('zh')}>
        {children}
      </DocsLayout>
    </Provider>
  );
}
