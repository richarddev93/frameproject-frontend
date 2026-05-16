export function contactMapper(data: any) {
  if (!data || !data.data || !Array.isArray(data.data)) {
    return [];
  }
  return data.data.map((item: any) => {
    return {
      id: item.id,
      status: item.status,
      instagram: item.instagram,
      facebook: item.facebook,
      email: item.email,
      linkedin: item.linkedin,
      x: item.x,
      attendance_time_week: item.attendance_time_week,
      attendance_time_weekend: item.attendance_time_weekend,
      address: item.address,
      user_created: item.user_created,
      date_created: item.date_created,
      user_updated: item.user_updated,
      date_updated: item.date_updated,
    };
  });
}
