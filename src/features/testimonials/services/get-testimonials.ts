import { cmsClient } from "@/services/cmsClient";
import { Testimonials } from "../types/testimonials";

export const getTestimonials = async () => {
  return await cmsClient.getCollection<Testimonials>('testimonials', {
    revalidate: 60,
    tags: 'testimonials',
  });
}
