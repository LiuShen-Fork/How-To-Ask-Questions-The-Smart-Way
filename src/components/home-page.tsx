import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, BookOpen, Compass, MessagesSquare } from 'lucide-react';
import type { Locale } from '@/i18n';
import { withLocale } from '@/i18n';
import { author, brandName } from '@/lib/shared';

const copy = {
  zh: {
    eyebrow: 'How To Ask Questions The Smart Way',
    title: '提问的智慧',
    description:
      '一份写给技术世界的提问指南。它关心的不是措辞上的圆滑，而是如何把困惑整理成证据，把求助变成协作，把一封发往远方的信写到足够清晰，值得他人停下脚步。',
    primary: '开始阅读',
    cards: [
      ['先做功课', '在开口之前，先走完自己能够抵达的路，让问题带着证据而来。'],
      ['讲清事实', '用环境、步骤、现象和尝试过的路径，替代焦虑、猜测和催促。'],
      ['尊重协作', '好的问题不是索取注意力，而是邀请他人进入一场有价值的判断。'],
    ],
    chapters: [
      ['/docs/before-questions', '在提问之前'],
      ['/docs/when-questions', '当你提问时'],
      ['/docs/how-to-read-answer', '如何解读答案'],
      ['/docs/good-or-bad-question', '好问题与坏问题'],
    ],
    credit: `由 ${author} 整理维护，${brandName} 出品。`,
  },
  'zh-tw': {
    eyebrow: 'How To Ask Questions The Smart Way',
    title: '提問的智慧',
    description:
      '一份寫給技術世界的提問指南。它在意的不是表面上的客氣，而是如何把困惑整理成證據，把求助變成協作，把一封發往遠方的信寫到足夠清楚，值得他人停下腳步。',
    primary: '開始閱讀',
    cards: [
      ['先做功課', '在開口之前，先走完自己能夠抵達的路，讓問題帶著證據而來。'],
      ['講清事實', '用環境、步驟、現象和嘗試過的路徑，替代焦慮、猜測和催促。'],
      ['尊重協作', '好的問題不是索取注意力，而是邀請他人進入一場有價值的判斷。'],
    ],
    chapters: [
      ['/zh-tw/docs/before-questions', '在提問之前'],
      ['/zh-tw/docs/when-questions', '當你提問時'],
      ['/zh-tw/docs/how-to-read-answer', '如何解讀答案'],
      ['/zh-tw/docs/good-or-bad-question', '好問題與蠢問題'],
    ],
    credit: `由 ${author} 整理維護，${brandName} 出品。`,
  },
  en: {
    eyebrow: '提问的智慧',
    title: 'How To Ask Questions The Smart Way',
    description:
      'A guide to technical questions as acts of craft: gather evidence, name the boundary of your knowledge, and invite other minds into a problem already made clear.',
    primary: 'Start Reading',
    cards: [
      ['Do the work first', 'Arrive with evidence, not only urgency. Show the path you have already walked.'],
      ['State the facts', 'Prefer environment, steps, symptoms, and attempts over guesses and pressure.'],
      ['Respect the exchange', 'A well-shaped question invites judgment, not unpaid guesswork.'],
    ],
    chapters: [
      ['/en/docs/before-questions', 'Before You Ask'],
      ['/en/docs/when-questions', 'When You Ask'],
      ['/en/docs/how-to-read-answer', 'How To Interpret Answers'],
      ['/en/docs/good-or-bad-question', 'Good and Bad Questions'],
    ],
    credit: `Curated by ${author}. ${brandName}.`,
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    cards: [string, string][];
    chapters: [string, string][];
    credit: string;
  }
>;

const icons = [BookOpen, Compass, MessagesSquare];

export function HomePage({ locale }: { locale: Locale }) {
  const content = copy[locale];
  const docsHref = withLocale('/docs', locale);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-8">
      <section className="grid gap-12 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-fd-muted-foreground">
            {content.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-normal text-fd-foreground sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-fd-muted-foreground">{content.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={docsHref}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              {content.primary}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-fd-muted-foreground">{content.credit}</p>
        </div>

        <div className="grid gap-2 rounded-lg border bg-fd-card/70 p-3 shadow-sm">
          {content.cards.map(([title, description], index) => {
            const Icon = icons[index];
            return <Feature key={title} icon={<Icon className="size-5" />} title={title} description={description} />;
          })}
        </div>
      </section>

      <section className="grid gap-3 border-t py-8 sm:grid-cols-2 lg:grid-cols-4">
        {content.chapters.map(([href, title]) => (
          <Chapter key={href} href={href} title={title} />
        ))}
      </section>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 rounded-md p-3">
      <div className="mt-1 text-fd-muted-foreground">{icon}</div>
      <div>
        <h2 className="text-base font-medium">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function Chapter({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-md border bg-fd-card px-4 py-3 text-sm font-medium transition-colors hover:bg-fd-accent"
    >
      {title}
      <ArrowRight className="size-4 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
