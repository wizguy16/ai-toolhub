export function SidebarNewsletter() {
  return (
    <div className="card space-y-4">
      <div>
        <h2 className="text-base font-semibold tracking-tight text-primary">
          Get the latest tool insights
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-secondary">
          Short weekly picks, pricing shifts, and what we would buy again.
        </p>
      </div>
      <div className="space-y-3">
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Work email"
          aria-label="Email address"
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5 text-sm text-primary"
        />
        <button type="button" className="btn-primary w-full text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}
