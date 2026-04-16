import groq from "groq";
import { sanityClient } from "../config/sanity";
import { NewsEvent } from "../types";

const ALL_QUERY = groq`
  *[_type == "event"] | order(date desc) {
    _id, title, summary, date,
    "imageUrl": image.asset->url
  }
`;

const LATEST_QUERY = groq`
  *[_type == "event"] | order(date desc) [0...6] {
    _id, title, summary, date,
    "imageUrl": image.asset->url
  }
`;

export const eventsRepository = {
  async findAll(): Promise<NewsEvent[]> {
    return sanityClient.fetch(ALL_QUERY);
  },
  async findLatest(): Promise<NewsEvent[]> {
    return sanityClient.fetch(LATEST_QUERY);
  },
};
