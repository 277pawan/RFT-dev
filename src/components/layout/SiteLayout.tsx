import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollManager } from "@/components/layout/ScrollManager";
import { DocsSearchProvider } from "@/components/docs/DocsSearchProvider";
import { PageMeta } from "@/components/seo/PageMeta";

export function SiteLayout() {
  return (
    <DocsSearchProvider>
      <div className="flex min-h-dvh flex-col bg-page">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <PageMeta />
        <ScrollManager />
        <Navbar />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </DocsSearchProvider>
  );
}
