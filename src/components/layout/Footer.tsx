import { Link } from "react-router-dom";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { footerColumns, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-page">
      <Container className="py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-[300px]">
            <BrandLogo size="sm" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Next-generation form rendering engine for modern React
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="mb-4 text-sm font-semibold text-text">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted transition hover:text-text"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm text-muted transition hover:text-text"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} React Form Toaster. Developed
            independently.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#" className="hover:text-text">
              Terms
            </a>
            <a href="#" className="hover:text-text">
              Privacy
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">
          Built by{" "}
          <a
            href={site.author.url}
            className="text-muted hover:text-text"
            target="_blank"
            rel="noreferrer"
          >
            {site.author.name}
          </a>
        </p>
      </Container>
    </footer>
  );
}

