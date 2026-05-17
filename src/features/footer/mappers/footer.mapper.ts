function mapFooterItem(item: any) {
  return {
    id: item.id,
    status: item.status,
    description: item.description,
    license: item.license,
    date_created: item.date_created,
    date_updated: item.date_updated,
  };
}

export function footerMapper(data: any) {
  if (!data) {
    return [];
  }

  if (data.data && !Array.isArray(data.data)) {
    return [mapFooterItem(data.data)];
  }

  if (data.data && Array.isArray(data.data)) {
    return data.data.map(mapFooterItem);
  }

  return [];
}
