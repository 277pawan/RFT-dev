export const site = {
  name: "react-form-toaster",
  version: "2.0.0",
  tagline: "Build powerful React forms without repetitive form code.",
  description:
    "A declarative, schema-driven form library for React. Define your fields, validate with Zod, and ship forms in minutes — not hours.",
  installCommand: "npm install react-form-toaster",
  github: {
    url: "https://github.com/277pawan/form-builder",
    starsLabel: "2.4k",
  },
  /** Swap this path when you have the final brand mark. */
  logoSrc: "/brand-logo.svg",
  npm: {
    url: "https://www.npmjs.com/package/react-form-toaster",
  },
  author: {
    name: "277pawan",
    url: "https://github.com/277pawan",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Docs", href: "/docs" },
  { label: "API", href: "/docs#api" },
  { label: "Examples", href: "/docs#examples" },
  { label: "Playground", href: "/playground" },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "API Reference", href: "/docs#api" },
      { label: "Examples", href: "/docs#examples" },
      { label: "Playground", href: "/playground" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: site.github.url },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/pawan-bisht-a943161b9/" },
      { label: "Medium", href: "https://medium.com/@bpawan277" },
      { label: "DEV Community", href: "https://dev.to/pawan_bisht_3aa0838e302b2" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "MIT License", href: `${site.github.url}/blob/main/LICENSE` },
      { label: "Privacy", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
] as const;