import { generateDocsMetadata, generateDocsParams, renderDocsPage } from '@/components/docs-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/en/docs/[[...slug]]'>) {
  const params = await props.params;
  return renderDocsPage(params.slug, 'en');
}

export async function generateStaticParams() {
  return generateDocsParams('en').map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<'/en/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  return generateDocsMetadata(params.slug, 'en');
}
