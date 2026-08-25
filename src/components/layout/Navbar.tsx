import { NavLink } from "react-router-dom";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { GitHubIcon } from "@/components/ui/GitHubIcon";
import { DocsSearchInput } from "@/components/docs/DocsSearchInput";
import { navItems, site } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-page">
      <Container className="flex h-16 items-center gap-4 px-5 sm:px-8">
        <BrandLogo />

        <nav
          className="flex flex-1 items-center justify-center gap-5 overflow-x-auto sm:gap-8"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `shrink-0 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "font-semibold text-text"
                    : "text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <DocsSearchInput />
          <a
            href={site.github.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-gray-700 hover:text-text"
          >
            <GitHubIcon className="size-7" />
            <span className="hidden sm:inline">{site.github.starsLabel}</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
