import type { ReactNode } from "react";
import { getAffiliateLinkProps } from "@/lib/affiliateLinkProps";

const linkClass = "text-blue-600 font-medium hover:underline";

function CtaWrap({ children }: { children: ReactNode }) {
  return <div className="mt-4 mb-6">{children}</div>;
}

export function PmToolsBody() {
  return (
    <div className="article-editorial-body space-y-5 text-base leading-[1.75] text-secondary">
      <p>
        If your team is using a mix of notes, messages, and spreadsheets to stay
        organized… things will break eventually.
      </p>
      <p>
        Missed deadlines, confusion, and constant back-and-forth usually come
        from one problem:
      </p>
      <p className="font-medium text-primary">No central system.</p>
      <p>
        Project management tools fix that — but only if you pick the right one.
      </p>
      <p>
        This guide breaks down the tools that actually help small teams stay
        organized without slowing them down.
      </p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        What to Look for in a Project Management Tool
      </h2>
      <p>Not all tools are built the same.</p>
      <p>Here&apos;s what actually matters:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Ease of use (your team will only use what feels simple)</li>
        <li>Flexibility (tasks, docs, workflows)</li>
        <li>Collaboration features</li>
        <li>Speed (slow tools kill productivity)</li>
      </ul>
      <p>The best tool is the one your team actually sticks with.</p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Best Project Management Tools Right Now
      </h2>

      <hr className="my-8 border-[var(--border)]" />

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        1. Notion — Best All-in-One Workspace
      </h3>
      <p>Notion is more than just a task manager.</p>
      <p>It combines:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>docs</li>
        <li>task tracking</li>
        <li>databases</li>
        <li>team collaboration</li>
      </ul>
      <p>Everything lives in one place.</p>
      <p>
        It&apos;s perfect if you want flexibility and a clean workspace without
        juggling multiple tools.
      </p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "notion",
            "article-editorial",
            "editorial-notion-1",
          )}
          className={linkClass}
        >
          Explore Notion →
        </a>
      </CtaWrap>

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        2. Asana — Best for Structured Workflows
      </h3>
      <p>Asana is built for teams that need structure.</p>
      <p>It&apos;s great for:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>task tracking</li>
        <li>timelines</li>
        <li>assigning responsibilities</li>
      </ul>
      <p>
        If your team handles multiple projects at once, Asana keeps everything
        organized.
      </p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "asana",
            "article-editorial",
            "editorial-asana-1",
          )}
          className={linkClass}
        >
          See how Asana works →
        </a>
      </CtaWrap>

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        3. Monday.com — Best for Visual Project Tracking
      </h3>
      <p>Monday.com focuses on visual workflows.</p>
      <p>It&apos;s ideal for:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>tracking progress</li>
        <li>managing teams</li>
        <li>seeing everything at a glance</li>
      </ul>
      <p>If you like dashboards and clarity, this one stands out.</p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "monday",
            "article-editorial",
            "editorial-monday-1",
          )}
          className={linkClass}
        >
          Try Monday.com →
        </a>
      </CtaWrap>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Which Tool Should You Choose?
      </h2>
      <p>Quick breakdown:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Want flexibility + docs + tasks →{" "}
          <strong className="font-semibold text-primary">Notion</strong>
        </li>
        <li>
          Want structured task management →{" "}
          <strong className="font-semibold text-primary">Asana</strong>
        </li>
        <li>
          Want visual dashboards →{" "}
          <strong className="font-semibold text-primary">Monday.com</strong>
        </li>
      </ul>
      <p>
        There&apos;s no perfect choice — just the one that fits how your team
        works.
      </p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Common Mistakes Teams Make
      </h2>
      <p>
        Most teams don&apos;t fail because of the tool — they fail because of
        how they use it.
      </p>
      <p>Avoid these:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Switching tools too often</li>
        <li>Overcomplicating workflows</li>
        <li>Not setting clear ownership on tasks</li>
      </ul>
      <p>
        Keep it simple, and your tool will actually help instead of slow you
        down.
      </p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Final Thoughts
      </h2>
      <p>
        The right project management tool can completely change how your team
        works.
      </p>
      <p>Less confusion, fewer missed tasks, and more clarity across everything.</p>
      <p>If you want the easiest place to start:</p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "notion",
            "article-editorial",
            "editorial-notion-2",
          )}
          className={linkClass}
        >
          Start with Notion here →
        </a>
      </CtaWrap>
      <p>
        Pick one, set it up properly, and give it time — that&apos;s where the
        real results happen.
      </p>
    </div>
  );
}
