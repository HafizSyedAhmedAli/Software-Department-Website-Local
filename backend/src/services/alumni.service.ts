import { alumniRepository } from "../repositories/alumni.repository";
import { AlumnusProfile } from "../types";

export const alumniService = {
  async getAll(): Promise<AlumnusProfile[]> {
    return alumniRepository.findAll();
  },
};
