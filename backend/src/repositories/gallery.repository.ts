import groq from "groq";
import { sanityClient } from "../config/sanity";
import { GalleryItem } from "../types";

const QUERY = groq`
  *[_type == "galleryItem"] | order(_createdAt asc) {
    _id, title, category,
    "imageUrl": image.asset->url
  }
`;

export const galleryRepository = {
  async findAll(): Promise<GalleryItem[]> {
    return sanityClient.fetch(QUERY);
  },
};
