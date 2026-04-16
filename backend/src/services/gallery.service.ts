import { galleryRepository } from "../repositories/gallery.repository";
import { GalleryItem } from "../types";

export const galleryService = {
  async getAll(): Promise<GalleryItem[]> {
    return galleryRepository.findAll();
  },
};
