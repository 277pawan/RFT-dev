import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "@/data/site";
import { resolveSeo } from "@/data/seo";

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

function upsertRobots(content: string) {
  upsertMeta("name", "robots", content);
}

/** Updates document title + social/meta tags on client-side route changes. */
export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const known = Boolean(
      pathname === "/" ||
        pathname === "/docs" ||
        pathname === "/playground" ||
        pathname.startsWith("/docs/"),
    );
    const seo = resolveSeo(pathname);
    const url = `${site.url}${seo.path === "/" ? "/" : seo.path}`;
    const image = `${site.url}${site.ogImage}`;

    document.title = known ? seo.title : "Page not found — React Form Toaster";
    upsertCanonical(url);
    upsertRobots(known ? "index, follow, max-image-preview:large" : "noindex, follow");

    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", document.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", image);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", site.title);
    upsertMeta("property", "og:title", document.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
  }, [pathname]);

  return null;
}
