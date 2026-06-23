import { generateMarkdownParams, renderMarkdown } from '@/components/markdown-route';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/en/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  return renderMarkdown(slug, 'en');
}

export function generateStaticParams() {
  return generateMarkdownParams('en');
}
