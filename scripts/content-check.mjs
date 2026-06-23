import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const locales = ['zh', 'zh-tw', 'en'];
const implementationCopy = /Fumadocs|Next\.js|GitHub Pages|Cloudflare Pages|静态导出框架|部署平台/;

const textFiles = [
  'src/app/(home)/page.tsx',
  'content/docs/zh/index.mdx',
  'content/docs/zh-tw/index.mdx',
  'content/docs/en/index.mdx',
].map((file) => [file, existsSync(join(root, file)) ? readFileSync(join(root, file), 'utf8') : '']);

for (const [file, text] of textFiles) {
  assert.ok(text, `${file} must exist`);
  assert.equal(implementationCopy.test(text), false, `${file} contains implementation-facing copy`);
}

for (const locale of locales) {
  for (const file of ['meta.json', 'introduction.mdx']) {
    assert.ok(existsSync(join(root, 'content/docs', locale, file)), `content/docs/${locale}/${file} must exist`);
  }
}

const counts = Object.fromEntries(
  locales.map((locale) => [
    locale,
    readdirSync(join(root, 'content/docs', locale), { recursive: true }).filter((file) => file.endsWith('.mdx'))
      .length,
  ]),
);

assert.equal(counts['zh-tw'], counts.zh, 'Traditional Chinese and Simplified Chinese document counts must match');
assert.equal(counts.en, counts.zh, 'English and Simplified Chinese document counts must match');

const shared = readFileSync(join(root, 'src/lib/shared.ts'), 'utf8');
assert.match(shared, /how-to-ask\.liushen\.fun/, 'canonical domain must be configured');
assert.match(shared, /LiuShen/, 'author must be configured');
assert.match(shared, /清羽飞扬/, 'brand name must be configured');
