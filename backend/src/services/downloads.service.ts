import { downloadsRepository } from "../repositories/downloads.repository";
import { Download } from "../types";

export const downloadsService = {
  async getAll(): Promise<Download[]> {
    return downloadsRepository.findAll();
  },
};
