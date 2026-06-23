import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Provider } from '@/components/provider';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <Provider locale="zh">
      <HomeLayout {...baseOptions('zh')}>{children}</HomeLayout>
    </Provider>
  );
}
