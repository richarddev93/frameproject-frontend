export function heroSectionMapper(data: any) {
  console.log("HeroSectionMapper data:", data);

  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }

  return data.data.map((item: any) => {
    console.log("Mapping item:", item);
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      subtitle: item.subtitle,
      banner: item.banner,
      main_banner: item.main_banner,
      status: item.status,
      sort: item.sort,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
      custom: {
        time: item.custom?.time ?? 0,
        blocks: item.custom?.blocks ?? [],
        version: item.custom?.version ?? "",
      },
    };
  });
}
