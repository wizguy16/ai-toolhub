"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const TYPEWRITER_PROMPTS = [
  "Find the best AI tools for marketing",
  "Compare tools for your business",
  "Get top software picks instantly",
] as const;

const SUGGESTION_CHIPS: { label: string; fill: string }[] = [
  { label: "AI writing", fill: "Best AI writing tool for marketing" },
  { label: "SaaS tools", fill: "Compare tools for building a SaaS app" },
  { label: "Automation", fill: "Business automation tools" },
];

function IconSubmitArrow() {
  return (
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconTrustUsers() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconTrustUpdate() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M23 4v6h-6" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

function IconTrustVerified() {
  return (
    <svg className="h-4 w-4 shrink-0 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function HeroAiRecommend() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const [shake, setShake] = useState(false);
  const [toast, setToast] = useState(false);
  const [promptIdx, setPromptIdx] = useState(0);
  const [displayLen, setDisplayLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const showTypewriterOverlay = value === "" && !focused && !hoverPaused;

  useEffect(() => {
    if (!showTypewriterOverlay) return;

    const full = TYPEWRITER_PROMPTS[promptIdx];
    const typeSpeed = 38;
    const deleteSpeed = 26;
    const holdMs = 1600;

    let timer: number;

    if (!deleting && displayLen < full.length) {
      timer = window.setTimeout(() => setDisplayLen((n) => n + 1), typeSpeed);
    } else if (!deleting && displayLen === full.length) {
      timer = window.setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && displayLen > 0) {
      timer = window.setTimeout(() => setDisplayLen((n) => n - 1), deleteSpeed);
    } else {
      timer = window.setTimeout(() => {
        setDeleting(false);
        setPromptIdx((i) => (i + 1) % TYPEWRITER_PROMPTS.length);
      }, 350);
    }

    return () => window.clearTimeout(timer);
  }, [showTypewriterOverlay, promptIdx, displayLen, deleting]);

  const triggerShake = useCallback(() => {
    setShake(true);
    window.setTimeout(() => setShake(false), 500);
  }, []);

  const submit = useCallback(() => {
    const q = value.trim();
    if (!q) {
      triggerShake();
      setToast(true);
      window.setTimeout(() => setToast(false), 2800);
      inputRef.current?.focus();
      return;
    }
    router.push(`/recommend?q=${encodeURIComponent(q)}`);
  }, [router, value, triggerShake]);

  const fillChip = (text: string) => {
    setValue(text);
    inputRef.current?.focus();
  };

  const overlayText = TYPEWRITER_PROMPTS[promptIdx].slice(0, displayLen);

  return (
    <section className="hero-ai-section relative mb-12 overflow-x-hidden px-4 pb-12 pt-12 md:mb-16 md:pb-16 md:pt-16">
      <div className="hero-ai-glow pointer-events-none absolute left-1/2 top-1/3 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" aria-hidden />

      <div className="relative z-[1] mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="badge mb-4 inline-block text-[11px] font-bold uppercase tracking-widest">
          AI-powered search
        </span>
        <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl md:leading-[1.1]">
          Find the Best Tools for Your Needs
        </h1>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
          AI-powered recommendations to help you choose the right software in seconds.
        </p>

        <form
          className="w-full max-w-3xl"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div
            className={`ai-input-container hero-ai-input-focus ${shake ? "ai-input-shake" : ""}`}
            onMouseEnter={() => setHoverPaused(true)}
            onMouseLeave={() => setHoverPaused(false)}
          >
            <div className="flex min-h-[56px] w-full items-center gap-2 px-2.5 py-1.5 sm:gap-3 sm:px-4 sm:py-2">
              <span className="hero-ai-input-prefix" aria-hidden>
                Find
              </span>
              <span className="hero-ai-input-prefix-divider" aria-hidden />
              <div className="relative min-h-[48px] min-w-0 flex-1 py-0.5 pl-2 pr-1 sm:pl-3 sm:pr-1">
                <input
                  ref={inputRef}
                  type="text"
                  name="q"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => {
                    setFocused(false);
                    const v = inputRef.current?.value ?? "";
                    if (!v.trim()) {
                      setDisplayLen(0);
                      setDeleting(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      submit();
                    }
                  }}
                  placeholder=""
                  className={`hero-ai-input w-full min-w-0 bg-transparent py-2.5 text-base outline-none md:py-3 md:text-lg ${
                    showTypewriterOverlay ? "text-transparent caret-[var(--primary)]" : "text-primary placeholder:text-[var(--text-secondary)]"
                  }`}
                  aria-label="Describe what you want to find"
                  autoComplete="off"
                />

                {showTypewriterOverlay ? (
                  <div
                    className="pointer-events-none absolute inset-0 flex items-center overflow-hidden py-2.5 text-left text-base text-[var(--text-secondary)] opacity-90 md:py-3 md:text-lg"
                    aria-hidden
                  >
                    <span className="min-w-0 truncate">
                      {overlayText}
                      <span className="cursor-blink align-middle" />
                    </span>
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="hero-ai-submit flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
                aria-label="Get recommendations"
              >
                <IconSubmitArrow />
              </button>
            </div>
          </div>

          <p className="hero-ai-micro mt-3 text-center text-sm font-medium text-[var(--text-secondary)]">
            Get personalized tool recommendations in seconds
          </p>

          <div className="hero-ai-chips mt-3 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {SUGGESTION_CHIPS.map(({ label, fill }) => (
              <button
                key={label}
                type="button"
                onClick={() => fillChip(fill)}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] sm:px-5"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hero-ai-trust mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] sm:mt-7 sm:gap-x-8">
            <div className="flex items-center gap-2">
              <IconTrustUsers />
              Trusted by 10,000+ users
            </div>
            <div className="flex items-center gap-2">
              <IconTrustUpdate />
              Updated weekly
            </div>
            <div className="flex items-center gap-2">
              <IconTrustVerified />
              Data-driven reviews
            </div>
          </div>

          {toast ? (
            <p className="hero-ai-toast mt-3 text-center text-sm font-medium text-[var(--danger)]" role="status">
              Tell us what you&apos;re looking for to get recommendations.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
