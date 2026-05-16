export function testimonialsMapper(data: any) {
  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }
  return data.data.map((item: any) => {
    return {
      id: item.id,
      status: item.status,
      sort: item.sort,
      descrition: item.descrition,
      name: item.name,
      role: item.role,
      photo: item.photo,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
    };
  });
}
