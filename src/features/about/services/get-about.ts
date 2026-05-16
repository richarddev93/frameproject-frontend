import { cmsClient } from "@/services/cmsClient";
import { About } from "../types/about";

export const getAbout = async () => {
  return await cmsClient.getCollection<About>('about', {
    revalidate: 60,
    tags: 'about',
  });
}
