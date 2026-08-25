import type { DocSection } from "@/data/docs";
import type { DocBlock } from "@/data/docs";

/** Getting-started pages often mention common terms casually — demote unless title/id hits. */
const WEAK_SECTION_IDS = new Set(["introduction", "quick-start"]);

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function includesQuery(text: string, query: string): boolean {
  return normalize(text).includes(query);
}

function blockText(block: DocBlock): string {
  return JSON.stringify(block).toLowerCase();
}

function filterMatchingBlock(block: DocBlock, query: string): DocBlock | null {
  if (block.type === "tabs") {
    const tabs = block.tabs
      .map((tab) => ({
        ...tab,
        blocks: matchingBlocks(tab.blocks, query),
      }))
      .filter(
        (tab) =>
          tab.blocks.length > 0 || includesQuery(tab.label, query),
      );
    return tabs.length > 0 ? { ...block, tabs } : null;
  }

  if (block.type === "table") {
    const rows = block.rows.filter((row) =>
      row.some((cell) => includesQuery(cell, query)),
    );
    return rows.length > 0 ? { ...block, rows } : null;
  }

  if (block.type === "list") {
    const items = block.items.filter((item) => includesQuery(item, query));
    return items.length > 0 ? { ...block, items } : null;
  }

  return blockText(block).includes(query) ? block : null;
}

function matchingBlocks(blocks: DocBlock[], query: string): DocBlock[] {
  return blocks.flatMap((block) => {
    const next = filterMatchingBlock(block, query);
    return next ? [next] : [];
  });
}

export type RankedDocSection = DocSection & { score: number };

function scoreSection(section: DocSection, query: string): number {
  const title = normalize(section.title);
  const id = normalize(section.id);
  const description = normalize(section.description ?? "");
  const presetId = normalize(section.presetId ?? "");
  const body = JSON.stringify(section.blocks ?? []).toLowerCase();

  let score = 0;

  if (title === query || id === query) score += 1000;
  else if (title.startsWith(query) || id.startsWith(query)) score += 850;
  else if (title.includes(query) || id.includes(query)) score += 700;

  if (description.includes(query)) score += 180;
  if (presetId.includes(query)) score += 160;

  // Prefer prop / identifier style hits in tables & code (word-ish boundaries)
  const wordish = new RegExp(
    `(^|[^a-z0-9])${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`,
    "i",
  );
  if (wordish.test(body)) score += 220;
  else if (body.includes(query)) score += 80;

  if (WEAK_SECTION_IDS.has(section.id) && score < 700) {
    // Keep only if the query is literally in the title/id; otherwise drop noise.
    score = 0;
  }

  return score;
}

export function searchDocsSections(
  sections: DocSection[],
  query: string,
): RankedDocSection[] {
  const q = normalize(query);
  if (!q) {
    return sections.map((section) => ({ ...section, score: 0 }));
  }

  const ranked: RankedDocSection[] = [];

  for (const section of sections) {
    const score = scoreSection(section, q);
    if (score <= 0) continue;

    const titleOrIdHit =
      includesQuery(section.title, q) || includesQuery(section.id, q);

    // Strong topic hit → full section. Otherwise only matching snippets/rows.
    const blocks = titleOrIdHit
      ? (section.blocks ?? [])
      : matchingBlocks(section.blocks ?? [], q);

    if (!titleOrIdHit && blocks.length === 0) {
      // Description/preset-only hit with no body snippets — still show heading.
      ranked.push({ ...section, blocks: [], score });
      continue;
    }

    ranked.push({ ...section, blocks, score });
  }

  return ranked.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

export function sectionMatchesQuery(section: DocSection, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  return scoreSection(section, q) > 0;
}
