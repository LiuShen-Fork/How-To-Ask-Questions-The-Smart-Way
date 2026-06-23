import { generateDocsMetadata, generateDocsParams, renderDocsPage } from '@/components/docs-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  return renderDocsPage(params.slug, 'zh');
}

export async function generateStaticParams() {
  return generateDocsParams('zh').map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  return generateDocsMetadata(params.slug, 'zh');
}
