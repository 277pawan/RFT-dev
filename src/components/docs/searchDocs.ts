import type { DocSection } from "@/data/docs";

export function searchDocsSections(
  sections: DocSection[],
  query: string,
): DocSection[] {
  const q = query.trim().toLowerCase();
  if (!q) return sections;

  return sections.filter(
    (section) =>
      section.title.toLowerCase().includes(q) ||
      section.id.toLowerCase().includes(q) ||
      section.description?.toLowerCase().includes(q) ||
      section.presetId?.toLowerCase().includes(q),
  );
}

export function sectionMatchesQuery(section: DocSection, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  return (
    section.title.toLowerCase().includes(q) ||
    section.id.toLowerCase().includes(q) ||
    (section.description?.toLowerCase().includes(q) ?? false) ||
    (section.presetId?.toLowerCase().includes(q) ?? false)
  );
}
