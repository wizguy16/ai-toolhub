"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useRef, useState, type FormEvent } from "react";

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`navbar-link${isActive ? " navbar-link-active" : ""}`}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const navInputRef = useRef<HTMLInputElement>(null);
  const [navQuery, setNavQuery] = useState("");
  const [navShake, setNavShake] = useState(false);
  const [navToast, setNavToast] = useState(false);

  const isHome = pathname === "/";
  const isArticles =
    pathname === "/posts" || pathname.startsWith("/posts/");
  const isTools = pathname === "/tools";

  const triggerNavShake = useCallback(() => {
    setNavShake(true);
    window.setTimeout(() => setNavShake(false), 500);
  }, []);

  const submitNavSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const q = navQuery.trim();
      if (!q) {
        triggerNavShake();
        setNavToast(true);
        window.setTimeout(() => setNavToast(false), 2800);
        navInputRef.current?.focus();
        return;
      }
      router.push(`/recommend?q=${encodeURIComponent(q)}`);
    },
    [navQuery, router, triggerNavShake],
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo flex items-center gap-2">
          <Image
            src="/favicon.svg"
            alt=""
            width={28}
            height={28}
            className="shrink-0 rounded-md"
            aria-hidden
          />
          <span>MyStackTools</span>
        </Link>

        <nav className="navbar-links" aria-label="Main">
          <NavLink href="/" isActive={isHome}>
            Home
          </NavLink>
          <NavLink href="/posts" isActive={isArticles}>
            Articles
          </NavLink>
          <NavLink href="/tools" isActive={isTools}>
            Tools
          </NavLink>
        </nav>

        <div className="ml-auto hidden w-full max-w-[220px] flex-col items-end md:flex">
          <form onSubmit={submitNavSearch} className="flex w-full flex-col items-stretch gap-1">
            <div className={navShake ? "ai-input-shake" : ""}>
              <input
                ref={navInputRef}
                type="search"
                name="q"
                value={navQuery}
                onChange={(e) => setNavQuery(e.target.value)}
                placeholder="Search tools..."
                aria-label="Search tools"
                autoComplete="off"
                className="input w-full"
              />
            </div>
            <button type="submit" className="sr-only">
              Search tools
            </button>
            {navToast ? (
              <p className="text-right text-xs font-medium text-[var(--danger)]" role="status">
                Enter a search to get recommendations.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </header>
  );
}
