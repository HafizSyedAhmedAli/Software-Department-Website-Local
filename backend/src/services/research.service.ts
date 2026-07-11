import { researchRepository } from "../repositories/research.repository";
import { ResearchItem } from "../types";

export const researchService = {
  async getAll(): Promise<ResearchItem[]> {
    return researchRepository.findAll();
  },
};
