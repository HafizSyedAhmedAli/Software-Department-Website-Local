import groq from "groq";
import { sanityClient } from "../config/sanity";
import { Download } from "../types";

const QUERY = groq`
  *[_type == "download"] | order(date desc) {
    _id, description, date, fileType,
    "fileUrl": file.asset->url
  }
`;

export const downloadsRepository = {
  async findAll(): Promise<Download[]> {
    return sanityClient.fetch(QUERY);
  },
};
