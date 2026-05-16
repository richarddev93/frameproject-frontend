import { useHeroSectionViewModel } from "./hero-section.viewmodel";


export function useHomeViewModel() {

  const heroData = useHeroSectionViewModel();


  return {
    ...heroData,
  };
}
