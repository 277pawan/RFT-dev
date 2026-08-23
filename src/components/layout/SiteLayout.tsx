import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocsSearchProvider } from "@/components/docs/DocsSearchProvider";

export function SiteLayout() {
  return (
    <DocsSearchProvider>
      <div className="flex min-h-dvh flex-col bg-page">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </DocsSearchProvider>
  );
}
