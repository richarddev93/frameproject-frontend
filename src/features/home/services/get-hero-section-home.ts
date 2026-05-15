import { cmsClient } from "@/services/cmsClient";
import { HeroSection } from "../types/hero-section";

export const getHomeHeroSection = async () => {
    return  await cmsClient.getCollection<HeroSection>('hero_section', {
        revalidate: 60,
        tags: 'home-hero-section',
    });
}

