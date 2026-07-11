import groq from "groq";
import { sanityClient } from "../config/sanity";
import { HeroSlide } from "../types";

const QUERY = groq`
  *[_type == "heroSlide"] | order(order asc) {
    _id, eyebrow, headingLine1, headingLine2, body,
    ctaLabel, ctaHref, ctaSecondaryLabel, ctaSecondaryHref, order,
    "imageUrl": image.asset->url
  }
`;

export const heroRepository = {
  async findAll(): Promise<HeroSlide[]> {
    return sanityClient.fetch(QUERY);
  },
};
