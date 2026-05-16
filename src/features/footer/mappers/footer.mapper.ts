export function footerMapper(data: any) {
  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }
  return data.data.map((item: any) => {
    return {
      id: item.id,
      status: item.status,
      description: item.description,
      license: item.license,
      date_created: item.date_created,
      date_updated: item.date_updated,
    };
  });
}
