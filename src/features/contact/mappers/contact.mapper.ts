function mapContactItem(item: any) {
  return {
    id: item.id,
    status: item.status,
    instagram: item.instagram,
    facebook: item.facebook,
    email: item.email,
    phone: item.phone || item.telefone,
    linkedin: item.linkedin,
    x: item.x,
    attendance_time_week: item.attendance_time_week,
    attendance_time_weekend: item.attendance_time_weekend,
    attendance_time_sunday: item.attendance_time_sunday,
    address: item.address,
    user_created: item.user_created,
    date_created: item.date_created,
    user_updated: item.user_updated,
    date_updated: item.date_updated,
  };
}

export function contactMapper(data: any) {
  if (!data) {
    return [];
  }

  if (data.data && !Array.isArray(data.data)) {
    return [mapContactItem(data.data)];
  }

  if (data.data && Array.isArray(data.data)) {
    return data.data.map(mapContactItem);
  }

  return [];
}
