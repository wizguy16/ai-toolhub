"use client";

import { useState } from "react";
import type { FaqItem } from "./types";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mb-12 md:mb-16">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight text-primary md:text-3xl">
        Frequently asked questions
      </h2>
      <div className="card !divide-y !divide-[var(--border)] !p-0 shadow-sm">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-primary transition hover:bg-[var(--background)] md:px-6 md:py-5"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-secondary transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {isOpen ? (
                <div className="border-t border-[var(--border)] bg-[var(--background)] px-5 pb-5 pt-0 md:px-6">
                  <p className="pt-4 text-sm leading-relaxed text-secondary md:text-base">
                    {item.answer}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
