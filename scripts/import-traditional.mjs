import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SOURCE_URL =
  'https://nginx.430070.xyz/https://raw.githubusercontent.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/refs/heads/main/README.md';
const ROOT = process.cwd();
const OUT = join(ROOT, 'content/docs/zh-tw');

const pageShape = [
  ['statement.mdx', 0],
  ['introduction.mdx', 1],
  ['before-questions.mdx', 2],
  ['when-questions/index.mdx', 3, true],
  ['when-questions/carefully-select-forum.mdx', 4],
  ['when-questions/stack-overflow.mdx', 5],
  ['when-questions/website-and-irc.mdx', 6],
  ['when-questions/use-project-email-list.mdx', 7],
  ['when-questions/use-meaningful-headlines.mdx', 8],
  ['when-questions/make-questions-easily.mdx', 9],
  ['when-questions/use-correctly-sentence.mdx', 10],
  ['when-questions/use-easy-to-read-file-format.mdx', 11],
  ['when-questions/precisely-describe-problem.mdx', 12],
  ['when-questions/not-more-words-but-essence.mdx', 13],
  ['when-questions/not-say-find-bug-easily.mdx', 14],
  ['when-questions/humble-not-substitute-homewoek.mdx', 15],
  ['when-questions/describe-symptoms-not-guesses.mdx', 16],
  ['when-questions/list-problems-by-time.mdx', 17],
  ['when-questions/describe-goal-not-process.mdx', 18],
  ['when-questions/donnot-ask-for-private-email.mdx', 19],
  ['when-questions/clearly-express-your-question.mdx', 20],
  ['when-questions/when-ask-code.mdx', 21],
  ['when-questions/donnot-ask-homework.mdx', 22],
  ['when-questions/remove-questional-sentence.mdx', 23],
  ['when-questions/never-write-urgent.mdx', 24],
  ['when-questions/courtesy-costs-nothing.mdx', 25],
  ['after-questions.mdx', 26],
  ['how-to-read-answer/index.mdx', 27, true],
  ['how-to-read-answer/rtfm-and-stfw.mdx', 28],
  ['how-to-read-answer/if-still-not-understand.mdx', 29],
  ['how-to-read-answer/Deal-with-offensive.mdx', 30],
  ['how-to-avoid-being-loser.mdx', 31],
  ['questions-you-cannot-ask.mdx', 32],
  ['good-or-bad-question.mdx', 33],
  ['if-cannot-get-answer.mdx', 34],
  ['how-to-answer-well.mdx', 35],
  ['related-resource.mdx', 36],
  ['thanks.mdx', 37],
];

const response = await fetch(SOURCE_URL);
if (!response.ok) throw new Error(`Failed to download ${SOURCE_URL}: ${response.status}`);

const markdown = await response.text();
const lines = markdown.split(/\r?\n/);
const headings = findHeadings(lines);
const relevantHeadings = headings.slice(
  headings.findIndex((heading) => heading.level === 2 && heading.title === '聲明'),
  headings.findIndex((heading) => heading.level === 2 && heading.title.startsWith('Contributors')),
);

if (relevantHeadings.length < pageShape.length) {
  throw new Error(`Expected at least ${pageShape.length} relevant headings, got ${relevantHeadings.length}`);
}

const pages = pageShape.map(([file, index, introOnly]) => ({
  file,
  introOnly: Boolean(introOnly),
  ...relevantHeadings[index],
}));

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

writePage(
  'index.mdx',
  `---
title: 提問的智慧
description: 一份關於技術提問、求知姿態與協作倫理的閱讀指南。
---

這份文檔討論的不是如何顯得禮貌，而是如何把一個混亂的問題，整理成值得他人投入判斷的問題。

在技術社群裡，提問是一種協作邀請。你給出的事實越清晰，推理越誠實，邊界越分明，回答者就越容易與你站到同一張地圖前，判斷下一步該往哪裡走。

<Cards>
  <Card title="從簡介開始" href="/zh-tw/docs/introduction" description="理解這份指南背後的技術社群文化。" />
  <Card title="當你提問時" href="/zh-tw/docs/when-questions" description="把事實、症狀、目標與嘗試講清楚。" />
  <Card title="如何解讀答案" href="/zh-tw/docs/how-to-read-answer" description="讀懂簡短、尖銳或不完整的回答。" />
</Cards>
`,
);

for (const page of pages) {
  const body = getBody(page).trim();
  writePage(
    page.file,
    `---
title: ${JSON.stringify(page.title)}
---

${body}
`,
  );
}

writePage(
  'meta.json',
  `${JSON.stringify(
    {
      title: '提問的智慧',
      pages: [
        'index',
        'statement',
        'introduction',
        'before-questions',
        'when-questions',
        'after-questions',
        'how-to-read-answer',
        'how-to-avoid-being-loser',
        'questions-you-cannot-ask',
        'good-or-bad-question',
        'if-cannot-get-answer',
        'how-to-answer-well',
        'related-resource',
        'thanks',
      ],
      defaultOpen: true,
    },
    null,
    2,
  )}\n`,
);

writePage(
  'when-questions/meta.json',
  `${JSON.stringify(
    {
      title: '當你提問時',
      pages: [
        'index',
        'carefully-select-forum',
        'stack-overflow',
        'website-and-irc',
        'use-project-email-list',
        'use-meaningful-headlines',
        'make-questions-easily',
        'use-correctly-sentence',
        'use-easy-to-read-file-format',
        'precisely-describe-problem',
        'not-more-words-but-essence',
        'not-say-find-bug-easily',
        'humble-not-substitute-homewoek',
        'describe-symptoms-not-guesses',
        'list-problems-by-time',
        'describe-goal-not-process',
        'donnot-ask-for-private-email',
        'clearly-express-your-question',
        'when-ask-code',
        'donnot-ask-homework',
        'remove-questional-sentence',
        'never-write-urgent',
        'courtesy-costs-nothing',
      ],
      defaultOpen: true,
    },
    null,
    2,
  )}\n`,
);

writePage(
  'how-to-read-answer/meta.json',
  `${JSON.stringify(
    {
      title: '如何解讀答案',
      pages: ['index', 'rtfm-and-stfw', 'if-still-not-understand', 'Deal-with-offensive'],
      defaultOpen: true,
    },
    null,
    2,
  )}\n`,
);

function findHeadings(inputLines) {
  return inputLines
    .map((line, index) => {
      const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
      if (!match) return null;
      return {
        index,
        level: match[1].length,
        title: match[2].replace(/`/g, '').trim(),
      };
    })
    .filter(Boolean);
}

function getBody(page) {
  const next = relevantHeadings.find((heading) => {
    if (heading.index <= page.index) return false;
    if (page.introOnly) return heading.level > page.level;
    return heading.level <= page.level;
  });

  return lines
    .slice(page.index + 1, next?.index ?? lines.length)
    .join('\n')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\]\(#([^)]+)\)/g, (match, anchor) => {
      const route = anchorToRoute(anchor);
      return route ? `](${route})` : match;
    })
    .trim();
}

function anchorToRoute(anchor) {
  const normalized = normalizeAnchor(anchor);
  const match = pages.find((page) => normalizeAnchor(page.title) === normalized);
  if (!match) return null;
  return `/zh-tw/docs/${match.file.replace(/(^|\/)index\.mdx$/, '').replace(/\.mdx$/, '')}`.replace(/\/$/, '');
}

function normalizeAnchor(value) {
  return decodeURIComponent(value)
    .replace(/`/g, '')
    .replace(/[，、：。！？「」『』（）()]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .trim();
}

function writePage(file, content) {
  const target = join(OUT, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content.replace(/\n{3,}/g, '\n\n'), 'utf8');
}
