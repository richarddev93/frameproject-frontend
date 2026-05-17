const CATEGORY_LABELS: Record<string, string> = {
  branding: "Branding",
  comercial: "Comercial",
  commercial: "Comercial",
  documentary: "Documentary",
  evento: "Evento",
  event: "Evento",
  fashion: "Fashion",
  corporativo: "Corporativo",
  corporate: "Corporativo",
  "social-media": "Social Media",
  convites: "Convites",
};

export function normalizeCategorySlug(category: unknown): string {
  if (!category) return "";
  if (typeof category === "string") return category.trim().toLowerCase();
  if (typeof category === "object" && category !== null) {
    const obj = category as { name?: string; title?: string; slug?: string };
    return (obj.slug || obj.name || obj.title || "").trim().toLowerCase();
  }
  return String(category).trim().toLowerCase();
}

export function getCategoryLabel(category: unknown): string {
  const slug = normalizeCategorySlug(category);
  if (!slug) return "";
  if (CATEGORY_LABELS[slug]) return CATEGORY_LABELS[slug];
  return slug
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
