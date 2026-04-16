import { eventsRepository } from "../repositories/events.repository";
import { NewsEvent } from "../types";

export const eventsService = {
  async getAll(): Promise<NewsEvent[]> {
    return eventsRepository.findAll();
  },
  async getLatest(): Promise<NewsEvent[]> {
    return eventsRepository.findLatest();
  },
};
