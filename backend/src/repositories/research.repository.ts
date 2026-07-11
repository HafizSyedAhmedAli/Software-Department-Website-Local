import groq from "groq";
import { sanityClient } from "../config/sanity";
import { ResearchItem } from "../types";

const QUERY = groq`
  *[_type == "researchItem"] | order(year desc) {
    _id, title, kind, authors, venue, year, area, link
  }
`;

export const researchRepository = {
  async findAll(): Promise<ResearchItem[]> {
    return sanityClient.fetch(QUERY);
  },
};
