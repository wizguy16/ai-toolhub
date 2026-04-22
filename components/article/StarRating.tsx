import { useId } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/** Parses strings like "4.9/5.0", "4.5/5", "5" into a 0–5 score. */
export function parseRatingScore(value: string): number {
  const m = value.trim().match(/^(\d+(?:\.\d+)?)/);
  if (!m) return 0;
  const num = Number(m[1]);
  if (Number.isNaN(num)) return 0;
  return clamp(num, 0, 5);
}

type StarRatingProps = {
  ratingLabel: string;
  className?: string;
};

export function StarRating({ ratingLabel, className = "" }: StarRatingProps) {
  const uid = useId().replace(/:/g, "");
  const score = parseRatingScore(ratingLabel);
  const fullStars = Math.floor(score + 1e-6);
  const hasHalf = score - fullStars >= 0.35 && fullStars < 5;

  return (
    <div
      className={`flex items-center gap-0.5 text-[var(--primary)] ${className}`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const full = i < fullStars;
        const half = i === fullStars && hasHalf;
        const gradId = `${uid}-half-${i}`;

        return (
          <svg
            key={i}
            className="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {half ? (
              <defs>
                <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            ) : null}
            <path
              fill={
                full ? "currentColor" : half ? `url(#${gradId})` : "none"
              }
              stroke="currentColor"
              strokeWidth="1.5"
              d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.7L12 16.9 6.8 18.9l1-5.7L3.6 9.1l5.8-.8L12 3z"
            />
          </svg>
        );
      })}
      <span className="ml-2 text-sm font-medium text-secondary">
        {ratingLabel}
      </span>
    </div>
  );
}
