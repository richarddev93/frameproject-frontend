import { cmsClient } from "@/services/cmsClient";
import { About } from "../types/about";

export const getAbout = async () => {
  const result = await cmsClient.getCollection<About>('about', {
    revalidate: 60,
    tags: 'about',
  });
  console.log('About service result:', result);
  return result
}
