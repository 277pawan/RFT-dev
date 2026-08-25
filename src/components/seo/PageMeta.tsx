import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/data/site";

type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
};

const routes: Record<string, PageSeoConfig> = {
  "/": {
    title: "React Form Toaster — Schema-Driven React Forms",
    description: site.description,
    path: "/",
  },
  "/docs": {
    title: "Docs — React Form Toaster",
    description:
      "Documentation for React Form Toaster: installation, Zod validation, Formbox props, conditional fields, styling, API reference, and examples.",
    path: "/docs",
  },
  "/playground": {
    title: "Playground — React Form Toaster",
    description:
      "Try React Form Toaster live. Edit schema and fields, toggle inline or modal mode, and see validated forms update in real time.",
    path: "/playground",
  },
};

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function resolveSeo(pathname: string): PageSeoConfig {
  return (
    routes[pathname] ?? {
      title: "React Form Toaster",
      description: site.description,
      path: pathname.startsWith("/") ? pathname : `/${pathname}`,
    }
  );
}

/** Updates document title + social/meta tags on client-side route changes. */
export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);
    const url = `${site.url}${seo.path === "/" ? "/" : seo.path}`;
    const image = `${site.url}${site.ogImage}`;

    document.title = seo.title;
    upsertCanonical(url);

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", image);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", site.title);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
  }, [pathname]);

  return null;
}
