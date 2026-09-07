import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { seoPages, type SeoPage } from "./src/data/seo";
import { site } from "./src/data/site";

function replaceNamed(
  html: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  const pattern = new RegExp(
    `(${attribute}="${key}"[\\s\\S]*?content=")[^"]*(")`,
    "i",
  );
  return html.replace(pattern, `$1${content.replace(/"/g, "&quot;")}$2`);
}

function applyPageSeo(html: string, page: SeoPage) {
  const url = `${site.url}${page.path === "/" ? "/" : page.path}`;
  let next = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);
  next = next.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${url}$2`,
  );
  next = replaceNamed(next, "name", "description", page.description);
  next = replaceNamed(next, "property", "og:title", page.title);
  next = replaceNamed(next, "property", "og:description", page.description);
  next = replaceNamed(next, "property", "og:url", url);
  next = replaceNamed(next, "name", "twitter:title", page.title);
  next = replaceNamed(next, "name", "twitter:description", page.description);
  return next;
}

function seoHtmlShells(): Plugin {
  return {
    name: "seo-html-shells",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(import.meta.dirname, "dist");
      const indexPath = path.join(dist, "index.html");
      if (!fs.existsSync(indexPath)) return;

      const indexHtml = fs.readFileSync(indexPath, "utf8");
      const lastmod = new Date().toISOString().slice(0, 10);

      for (const page of seoPages) {
        if (page.path === "/") continue;
        const html = applyPageSeo(indexHtml, page);
        const outDir = path.join(dist, page.path.replace(/^\//, ""));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html);
      }

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoPages
  .map((page: SeoPage) => {
    const loc = `${site.url}${page.path === "/" ? "/" : page.path}`;
    const priority = page.path === "/" ? "1.0" : page.path === "/docs" ? "0.9" : "0.8";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
      fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoHtmlShells()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
