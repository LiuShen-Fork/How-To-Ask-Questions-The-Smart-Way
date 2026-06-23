export function SiteFooter() {
  return (
    <footer className="border-t bg-fd-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>© LiuShen · 清羽飞扬</span>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            陕ICP备2024028531号
          </a>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=61011602000637"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-fd-foreground"
          >
            陕公网安备61011602000637号
          </a>
        </div>
      </div>
    </footer>
  );
}
