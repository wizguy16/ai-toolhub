import type { ReactNode } from "react";
import { getAffiliateLinkProps } from "@/lib/affiliateLinkProps";

const linkClass = "text-blue-600 font-medium hover:underline";

function CtaWrap({ children }: { children: ReactNode }) {
  return <div className="mt-4 mb-6">{children}</div>;
}

export function BestAiWritingToolsMarketingBody() {
  return (
    <div className="article-editorial-body space-y-5 text-base leading-[1.75] text-secondary">
      <p>AI writing tools are everywhere right now.</p>
      <p>But most of them either:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>sound robotic</li>
        <li>overpromise</li>
        <li>or don&apos;t actually help you convert</li>
      </ul>
      <p>
        So instead of listing 20 random tools, we focused on the ones that
        actually make a difference for marketing.
      </p>
      <p>These are the tools people are using to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>write faster</li>
        <li>scale content</li>
        <li>and generate real results</li>
      </ul>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        What Makes a Good AI Writing Tool?
      </h2>
      <p>Before choosing a tool, here&apos;s what actually matters:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Output quality (does it sound human?)</li>
        <li>Ease of use</li>
        <li>Templates for real use cases (ads, emails, blogs)</li>
        <li>Speed and consistency</li>
      </ul>
      <p>Most tools fail because they look good… but don&apos;t perform.</p>
      <p>The ones below are different.</p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Best AI Writing Tools Right Now
      </h2>

      <hr className="my-8 border-[var(--border)]" />

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        1. Jasper — Best for Marketing Teams
      </h3>
      <p>Jasper is built specifically for marketing.</p>
      <p>It&apos;s not just a text generator — it&apos;s designed for:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>ad copy</li>
        <li>email campaigns</li>
        <li>landing pages</li>
        <li>brand voice consistency</li>
      </ul>
      <p>
        What makes it stand out is how structured everything feels. You&apos;re
        not guessing what to write — it guides you.
      </p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "jasper",
            "article-editorial",
            "editorial-jasper-1",
          )}
          className={linkClass}
        >
          Start writing with Jasper →
        </a>
      </CtaWrap>

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        2. Copy.ai — Best for Quick Content Creation
      </h3>
      <p>Copy.ai is great when you need fast ideas and drafts.</p>
      <p>It&apos;s especially useful for:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>social media posts</li>
        <li>product descriptions</li>
        <li>quick marketing ideas</li>
      </ul>
      <p>
        It&apos;s less structured than Jasper, but faster for brainstorming.
      </p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "copyai",
            "article-editorial",
            "editorial-copyai-1",
          )}
          className={linkClass}
        >
          Try Copy.ai here →
        </a>
      </CtaWrap>

      <h3 className="text-xl font-semibold tracking-tight text-primary">
        3. Writesonic — Best All-in-One Option
      </h3>
      <p>Writesonic sits somewhere in between.</p>
      <p>It offers:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>blog writing tools</li>
        <li>marketing templates</li>
        <li>AI chat features</li>
      </ul>
      <p>
        If you want one tool that does a bit of everything, this is a solid
        choice.
      </p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "writesonic",
            "article-editorial",
            "editorial-writesonic-1",
          )}
          className={linkClass}
        >
          Explore Writesonic →
        </a>
      </CtaWrap>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Which Tool Should You Pick?
      </h2>
      <p>Here&apos;s the simplest way to decide:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          Want the best overall marketing tool →{" "}
          <strong className="font-semibold text-primary">Jasper</strong>
        </li>
        <li>
          Want fast ideas and quick drafts →{" "}
          <strong className="font-semibold text-primary">Copy.ai</strong>
        </li>
        <li>
          Want a flexible all-in-one →{" "}
          <strong className="font-semibold text-primary">Writesonic</strong>
        </li>
      </ul>
      <p>Most people start with one and expand later.</p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        What AI Writing Tools Can (and Can&apos;t) Do
      </h2>
      <p>Let&apos;s keep this real.</p>
      <p>AI tools can:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>speed up writing</li>
        <li>help with ideas</li>
        <li>improve consistency</li>
      </ul>
      <p>But they still need you to:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>guide the tone</li>
        <li>refine outputs</li>
        <li>understand your audience</li>
      </ul>
      <p>
        The best results come from using AI as a tool — not a replacement.
      </p>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="text-2xl font-semibold tracking-tight text-primary md:text-[1.65rem]">
        Final Thoughts
      </h2>
      <p>
        AI writing tools aren&apos;t just a trend anymore — they&apos;re
        becoming part of how marketing works.
      </p>
      <p>
        The difference is choosing one that actually helps you move faster
        without sacrificing quality.
      </p>
      <p>If you want the most reliable starting point:</p>
      <CtaWrap>
        <a
          {...getAffiliateLinkProps(
            "jasper",
            "article-editorial",
            "editorial-jasper-2",
          )}
          className={linkClass}
        >
          Start with Jasper here →
        </a>
      </CtaWrap>
      <p>
        Test it, refine your workflow, and you&apos;ll see the difference
        pretty quickly.
      </p>
    </div>
  );
}
