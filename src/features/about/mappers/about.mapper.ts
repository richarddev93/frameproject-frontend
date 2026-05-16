export function aboutMapper(data: any) {
  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }
  return data.data.map((item: any) => {
    return {
      id: item.id,
      status: item.status,
      description: item.description,
      image: item.image,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
    };
  });
}
