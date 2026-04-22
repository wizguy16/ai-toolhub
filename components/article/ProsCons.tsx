type ProsConsProps = {
  pros: string[];
  cons: string[];
};

function List({
  items,
  icon,
  tone,
}: {
  items: string[];
  icon: "check" | "x";
  tone: "pro" | "con";
}) {
  const heading = tone === "pro" ? "Pros" : "Cons";

  return (
    <div className={tone === "pro" ? "pros" : "cons"}>
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-primary">
        {icon === "check" ? (
          <svg
            className="h-4 w-4 shrink-0 text-[var(--success)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg
            className="h-4 w-4 shrink-0 text-[var(--danger)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        )}
        {heading}
      </div>
      <ul className="space-y-1.5 text-sm leading-relaxed text-primary">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-secondary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <List items={pros} icon="check" tone="pro" />
      <List items={cons} icon="x" tone="con" />
    </div>
  );
}
