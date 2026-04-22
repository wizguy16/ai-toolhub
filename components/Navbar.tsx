"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const isHome = pathname === "/";
  const isArticles =
    pathname === "/posts" || pathname.startsWith("/posts/");
  const isTools = pathname === "/tools";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          ToolReviews
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

        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Search tools..."
            aria-label="Search tools"
            className="input hidden max-w-[220px] md:block"
          />
          <button type="button" className="btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}
