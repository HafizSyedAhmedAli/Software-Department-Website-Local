import { heroRepository } from "../repositories/hero.repository";
import { HeroSlide } from "../types";

export const heroService = {
  async getAll(): Promise<HeroSlide[]> {
    return heroRepository.findAll();
  },
};
