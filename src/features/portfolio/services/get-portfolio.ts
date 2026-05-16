import { cmsClient } from "@/services/cmsClient";
import { Portfolio } from "../types/portfolio";

export const getPortfolio = async () => {
  return await cmsClient.getCollection<Portfolio>('portfolio', {
    revalidate: 60,
    tags: 'portfolio',
  });
}
