import { cmsClient } from "@/services/cmsClient";
import { Services } from "../types/services";

export const getServices = async () => {
  return await cmsClient.getCollection<Services>('services', {
    revalidate: 60,
    tags: 'services',
  });
}
