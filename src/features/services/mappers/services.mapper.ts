const ICON_ALIASES: Record<string, string> = {
  video: "Video",
  film: "Film",
  camera: "Camera",
  lightbulb: "Lightbulb",
  bookopen: "BookOpen",
  users: "Users",
  sparkles: "Sparkles",
  hotel_class: "Award",
};

function normalizeIcon(icon?: string): string {
  if (!icon || icon.includes("{{")) return "Lightbulb";

  if (ICON_ALIASES[icon.toLowerCase()]) {
    return ICON_ALIASES[icon.toLowerCase()];
  }

  return icon.charAt(0).toUpperCase() + icon.slice(1);
}

export function servicesMapper(data: any) {
  if (!data?.data || !Array.isArray(data.data)) {
    return [];
  }

  return data.data
    .filter(
      (item: any) =>
        item.status === "published" &&
        item.title &&
        item.icon &&
        !String(item.icon).includes("{{"),
    )
    .sort((a: any, b: any) => (a.sort ?? 0) - (b.sort ?? 0))
    .map((item: any) => ({
      id: item.id,
      status: item.status,
      sort: item.sort,
      title: item.title,
      icon: normalizeIcon(item.icon),
      description: item.description,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
    }));
}
