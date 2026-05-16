export function portfolioMapper(data: any) {
  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }
  return data.data.map((item: any) => {
    return {
      id: item.id,
      status: item.status,
      sort: item.sort,
      title: item.title,
      description: item.description,
      url_video: item.url_video,
      thumb: item.thumb,
      url_instagram: item.url_instagram,
      category: item.category,
      data_evento: item.data_evento,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
    };
  });
}
