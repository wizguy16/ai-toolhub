import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "muted";

type Base = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = Base &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = Base &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type CTAButtonProps = ButtonProps | AnchorProps;

const base =
  "inline-flex items-center justify-center text-sm font-semibold no-underline transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

function variantClasses(variant: Variant) {
  switch (variant) {
    case "primary":
      return "btn-primary";
    case "outline":
      return "btn-secondary !border-2 !border-[var(--primary)] !font-semibold !text-[var(--primary)] hover:!bg-[var(--primary)]/10";
    case "muted":
      return "btn-secondary";
    default:
      return "btn-primary";
  }
}

export function CTAButton(props: CTAButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const cls = `${base} ${variantClasses(variant)} ${className}`.trim();

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...rest } = props as ButtonProps;
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
