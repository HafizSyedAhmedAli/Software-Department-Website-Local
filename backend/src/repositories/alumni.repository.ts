import groq from "groq";
import { sanityClient } from "../config/sanity";
import { AlumnusProfile } from "../types";

const QUERY = groq`
  *[_type == "alumnus"] | order(order asc) {
    _id, name, batch, designation, company, location, quote, linkedin, order,
    "photoUrl": photo.asset->url
  }
`;

export const alumniRepository = {
  async findAll(): Promise<AlumnusProfile[]> {
    return sanityClient.fetch(QUERY);
  },
};
