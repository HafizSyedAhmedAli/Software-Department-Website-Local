import groq from "groq";
import { sanityClient } from "../config/sanity";
import { SiteSettings } from "../types";

const QUERY = groq`
  *[_type == "siteSettings"][0] {
    email, phone, phone2, address,
    facebook, twitter, linkedin, mapEmbed
  }
`;

export const settingsRepository = {
  async find(): Promise<SiteSettings | null> {
    return sanityClient.fetch(QUERY);
  },
};
