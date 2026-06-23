import { generateMarkdownParams, renderMarkdown } from '@/components/markdown-route';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/zh-tw/llms.mdx/docs/[[...slug]]'>) {
  const { slug } = await params;
  return renderMarkdown(slug, 'zh-tw');
}

export function generateStaticParams() {
  return generateMarkdownParams('zh-tw');
}
