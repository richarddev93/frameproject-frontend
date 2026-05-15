import { getHomeHeroSection } from "../services/get-hero-section-home";
import { heroSectionMapper } from "../mappers/hero-section.mapper";

export async function useHeroSectionViewModel() {
  const response = await getHomeHeroSection();

  const mapped = heroSectionMapper(response);

  return {
    ...mapped[0],
  };
}
