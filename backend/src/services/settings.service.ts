import { settingsRepository } from "../repositories/settings.repository";
import { SiteSettings } from "../types";

export const settingsService = {
  async get(): Promise<SiteSettings | null> {
    return settingsRepository.find();
  },
};
