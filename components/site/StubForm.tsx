"use client";

export function StubForm({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}
