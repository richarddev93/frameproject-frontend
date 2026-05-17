export function aboutMapper(data: any) {
  if (!data) {
    return [];
  }

  // Handle single object response
  if (data.data && !Array.isArray(data.data)) {
    return [{
      id: data.data.id,
      status: data.data.status,
      description: data.data.description,
      image: data.data.Image,
      user_created: data.data.user_created,
      date_created: data.data.date_created,
      user_updated: data.data.user_updated,
      date_updated: data.data.date_updated,
    }];
  }

  // Handle array response
  if (data.data && Array.isArray(data.data)) {
    return data.data.map((item: any) => {
      return {
        id: item.id,
        status: item.status,
        description: item.description,
        image: item.Image || item.image,
        user_created: item.user_created,
        date_created: item.date_created,
        user_updated: item.user_updated,
        date_updated: item.date_updated,
      };
    });
  }

  return [];
}
