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
        <PageMeta />
        <ScrollManager />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </DocsSearchProvider>
  );
}
