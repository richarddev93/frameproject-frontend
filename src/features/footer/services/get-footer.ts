import { cmsClient } from "@/services/cmsClient";
import { Footer } from "../types/footer";

export const getFooter = async () => {
  return await cmsClient.getCollection<Footer>('footer', {
    revalidate: 60,
    tags: 'footer',
  });
}
