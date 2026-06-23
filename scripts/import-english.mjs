import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SOURCE_URL = 'http://www.catb.org/~esr/faqs/smart-questions.html';
const ROOT = process.cwd();
const OUT = join(ROOT, 'content/docs/en');

const pages = [
  { file: 'statement.mdx', title: 'Disclaimer', id: 'disclaimer', mode: 'h2' },
  { file: 'introduction.mdx', title: 'Introduction', id: 'intro', mode: 'h2' },
  { file: 'before-questions.mdx', title: 'Before You Ask', id: 'before', mode: 'h2' },
  { file: 'when-questions/index.mdx', title: 'When You Ask', id: 'asking', mode: 'intro' },
  { file: 'when-questions/carefully-select-forum.mdx', title: 'Choose your forum carefully', id: 'forum', mode: 'h3' },
  { file: 'when-questions/stack-overflow.mdx', title: 'Stack Overflow', id: 'stackoverflow', mode: 'h3' },
  { file: 'when-questions/website-and-irc.mdx', title: 'Web and IRC forums', id: 'usefora', mode: 'h3' },
  { file: 'when-questions/use-project-email-list.mdx', title: 'As a second step, use project mailing lists', id: 'uselists', mode: 'h3' },
  { file: 'when-questions/use-meaningful-headlines.mdx', title: 'Use meaningful, specific subject headers', id: 'bespecific', mode: 'h3' },
  { file: 'when-questions/make-questions-easily.mdx', title: 'Make it easy to reply', id: 'easyreply', mode: 'h3' },
  { file: 'when-questions/use-correctly-sentence.mdx', title: 'Write in clear, grammatical, correctly-spelled language', id: 'writewell', mode: 'h3' },
  { file: 'when-questions/use-easy-to-read-file-format.mdx', title: 'Send questions in accessible, standard formats', id: 'formats', mode: 'h3' },
  { file: 'when-questions/precisely-describe-problem.mdx', title: 'Be precise and informative about your problem', id: 'beprecise', mode: 'h3' },
  { file: 'when-questions/not-more-words-but-essence.mdx', title: 'Volume is not precision', id: 'volume', mode: 'h3' },
  { file: 'when-questions/not-say-find-bug-easily.mdx', title: "Don't rush to claim that you have found a bug", text: "Don't rush to claim", mode: 'h3' },
  { file: 'when-questions/humble-not-substitute-homewoek.mdx', title: 'Grovelling is not a substitute for doing your homework', text: 'Grovelling is not a substitute', mode: 'h3' },
  { file: 'when-questions/describe-symptoms-not-guesses.mdx', title: "Describe the problem's symptoms, not your guesses", id: 'symptoms', mode: 'h3' },
  { file: 'when-questions/list-problems-by-time.mdx', title: "Describe your problem's symptoms in chronological order", id: 'chronology', mode: 'h3' },
  { file: 'when-questions/describe-goal-not-process.mdx', title: 'Describe the goal, not the step', id: 'goal', mode: 'h3' },
  { file: 'when-questions/donnot-ask-for-private-email.mdx', title: "Don't ask people to reply by private e-mail", id: 'noprivate', mode: 'h3' },
  { file: 'when-questions/clearly-express-your-question.mdx', title: 'Be explicit about your question', id: 'explicit', mode: 'h3' },
  { file: 'when-questions/when-ask-code.mdx', title: 'When asking about code', id: 'code', mode: 'h3' },
  { file: 'when-questions/donnot-ask-homework.mdx', title: "Don't post homework questions", id: 'homework', mode: 'h3' },
  { file: 'when-questions/remove-questional-sentence.mdx', title: 'Prune pointless queries', id: 'prune', mode: 'h3' },
  { file: 'when-questions/never-write-urgent.mdx', title: 'Do not flag your question as Urgent', id: 'urgent', mode: 'h3' },
  { file: 'when-questions/courtesy-costs-nothing.mdx', title: 'Courtesy never hurts, and sometimes helps', id: 'courtesy', mode: 'h3' },
  { file: 'after-questions.mdx', title: 'Follow up with a brief note on the solution', id: 'followup', mode: 'h3' },
  { file: 'how-to-read-answer/index.mdx', title: 'How To Interpret Answers', id: 'answers', mode: 'intro' },
  { file: 'how-to-read-answer/rtfm-and-stfw.mdx', title: "RTFM and STFW: How To Tell You've Seriously Screwed Up", id: 'rtfm', mode: 'h3' },
  { file: 'how-to-read-answer/if-still-not-understand.mdx', title: "If you don't understand...", id: 'lesser', mode: 'h3' },
  { file: 'how-to-read-answer/Deal-with-offensive.mdx', title: 'Dealing with rudeness', id: 'keepcool', mode: 'h3' },
  { file: 'how-to-avoid-being-loser.mdx', title: 'On Not Reacting Like A Loser', id: 'not_losing', mode: 'h2' },
  { file: 'questions-you-cannot-ask.mdx', title: 'Questions Not To Ask', id: 'classic', mode: 'h2' },
  { file: 'good-or-bad-question.mdx', title: 'Good and Bad Questions', id: 'examples', mode: 'h2' },
  { file: 'if-cannot-get-answer.mdx', title: "If You Can't Get An Answer", text: "If You Can't Get An Answer", mode: 'h2' },
  { file: 'how-to-answer-well.mdx', title: 'How To Answer Questions in a Helpful Way', text: 'How To Answer Questions in a Helpful Way', mode: 'h2' },
  { file: 'related-resource.mdx', title: 'Related Resources', text: 'Related Resources', mode: 'h2' },
  { file: 'thanks.mdx', title: 'Acknowledgements', text: 'Acknowledgements', mode: 'h2' },
];

const metaFiles = [
  { from: 'content/docs/zh/meta.json', to: 'meta.json', title: 'Smart Questions' },
  { from: 'content/docs/zh/when-questions/meta.json', to: 'when-questions/meta.json', title: 'When You Ask' },
  { from: 'content/docs/zh/how-to-read-answer/meta.json', to: 'how-to-read-answer/meta.json', title: 'How To Interpret Answers' },
];

const anchorToRoute = new Map(
  pages
    .filter((page) => page.id)
    .map((page) => [page.id, `/en/docs/${page.file.replace(/(^|\/)index\.mdx$/, '').replace(/\.mdx$/, '')}`.replace(/\/$/, '')]),
);
anchorToRoute.set('index', '/en/docs');

const response = await fetch(SOURCE_URL);
if (!response.ok) throw new Error(`Failed to download ${SOURCE_URL}: ${response.status}`);
const html = await response.text();
const headings = findHeadings(html);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

writePage('index.mdx', `---
title: How To Ask Questions The Smart Way
description: A field guide to asking precise technical questions and earning useful answers.
---

This guide is about the craft of asking: how to show your work, frame the problem, respect the attention of others, and turn a moment of confusion into a useful exchange of knowledge.

It is not a manners poster. It is a map for technical communities, where clarity is a form of respect and a well-formed question can become a contribution in its own right.

<Cards>
  <Card title="Start with the introduction" href="/en/docs/introduction" description="Understand the culture and expectations behind the guide." />
  <Card title="When you ask" href="/en/docs/when-questions" description="Read the practical rules for composing a question." />
  <Card title="How to interpret answers" href="/en/docs/how-to-read-answer" description="Learn how to read terse, incomplete, or difficult replies." />
</Cards>
`);

for (const page of pages) {
  const heading = locateHeading(page);
  const htmlSlice = sliceSection(heading, page.mode);
  const body = toMarkdown(htmlSlice).trim();
  writePage(page.file, `---
title: ${escapeYaml(page.title)}
---

${body}
`);
}

for (const meta of metaFiles) {
  const data = JSON.parse(readFileSync(join(ROOT, meta.from)));
  data.title = meta.title;
  writePage(meta.to, `${JSON.stringify(data, null, 2)}\n`);
}

function writePage(file, content) {
  const target = join(OUT, file);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, content.replace(/\n{3,}/g, '\n\n'), 'utf8');
}

function findHeadings(input) {
  const results = [];
  const pattern = /<h([23]) class="title"[^>]*>\s*<a id="([^"]+)"><\/a>([\s\S]*?)<\/h\1>/g;
  let match;
  while ((match = pattern.exec(input))) {
    results.push({
      level: Number(match[1]),
      id: match[2],
      title: cleanText(match[3]),
      index: match.index,
      end: pattern.lastIndex,
    });
  }
  return results;
}

function locateHeading(page) {
  const found = page.id
    ? headings.find((heading) => heading.id === page.id)
    : headings.find((heading) => heading.title.includes(page.text));
  if (!found) throw new Error(`Cannot find heading for ${page.file}`);
  return found;
}

function sliceSection(heading, mode) {
  const next = headings.find((item) => {
    if (item.index <= heading.index) return false;
    if (mode === 'intro') return item.level <= 3;
    return item.level <= heading.level;
  });
  return html.slice(heading.end, next?.index ?? html.indexOf('</body>'));
}

function toMarkdown(input) {
  let out = input;

  out = out.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/g, (_, code) => `\n\n\`\`\`text\n${decode(cleanTags(code)).trim()}\n\`\`\`\n\n`);
  out = out.replace(/<a class="(?:ulink|link|email)" href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, label) => `[${cleanText(label)}](${href})`);
  out = out.replace(/<code class="email">([\s\S]*?)<\/code>/g, (_, value) => `\`${cleanText(value)}\``);
  out = out.replace(/<code[^>]*>([\s\S]*?)<\/code>/g, (_, value) => `\`${cleanText(value)}\``);
  out = out.replace(/<span class="strong"><strong>([\s\S]*?)<\/strong><\/span>/g, '**$1**');
  out = out.replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**');
  out = out.replace(/<span class="emphasis"><em>([\s\S]*?)<\/em><\/span>/g, '*$1*');
  out = out.replace(/<em>([\s\S]*?)<\/em>/g, '*$1*');
  out = out.replace(/<span class="quote">[\s\S]*?<span class="quote">([\s\S]*?)<\/span>[\s\S]*?<\/span>/g, '"$1"');
  out = out.replace(/<dt><span class="term">([\s\S]*?)<\/span><\/dt>/g, (_, value) => `\n\n${cleanText(value)}\n\n`);
  out = out.replace(/<li[^>]*>\s*<p[^>]*>/g, '\n- ');
  out = out.replace(/<\/p>\s*<\/li>/g, '\n');
  out = out.replace(/<li[^>]*>/g, '\n- ');
  out = out.replace(/<\/li>/g, '\n');
  out = out.replace(/<p[^>]*>/g, '\n\n');
  out = out.replace(/<\/p>/g, '\n\n');
  out = out.replace(/<br\s*\/?>/g, '\n');
  out = out.replace(/<\/(?:div|dl|dd|ul|ol)>/g, '\n\n');
  out = out.replace(/<(?:div|dl|dd|ul|ol)[^>]*>/g, '\n\n');
  out = cleanTags(out);
  out = decode(out);
  out = out.replace(/\u00a0/g, ' ');
  out = out.replace(/[ \t]+\n/g, '\n');
  out = out.replace(/\n[ \t]+/g, '\n');
  out = out.replace(/[ \t]{2,}/g, ' ');
  out = out.replace(/\]\(#([^)]+)\)/g, (match, id) => {
    const route = anchorToRoute.get(id);
    return route ? `](${route})` : match;
  });
  out = out
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return out;
}

function cleanText(value) {
  return decode(cleanTags(value)).replace(/\s+/g, ' ').trim();
}

function cleanTags(value) {
  return value.replace(/<[^>]+>/g, '');
}

function decode(value) {
  return value
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function escapeYaml(value) {
  return JSON.stringify(value);
}
