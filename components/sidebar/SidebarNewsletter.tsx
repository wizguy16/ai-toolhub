export function SidebarNewsletter() {
  return (
    <section
      className="cta-section p-6 shadow-[0_6px_24px_rgba(11,28,48,0.25)]"
      aria-label="Newsletter signup"
    >
      <div className="mb-4 text-white" aria-hidden>
        <svg
          viewBox="0 0 24 24"
          width={28}
          height={28}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="shrink-0 opacity-90"
        >
          <path d="M4 4h16v16H4z" strokeLinejoin="round" />
          <path d="m4 8 8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="cta-title mb-2 text-lg font-semibold tracking-tight md:text-xl">
        Get the latest tool insights
      </h2>
      <p className="cta-text text-sm leading-relaxed">
        Weekly picks, pricing updates, and tools worth using.
      </p>
      <div className="mt-5 space-y-3">
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          aria-label="Email address"
        />
        <button type="button" className="btn-primary w-full text-sm">
          Subscribe
        </button>
      </div>
    </section>
  );
}
