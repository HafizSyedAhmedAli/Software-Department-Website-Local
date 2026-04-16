import groq from "groq";
import { sanityClient } from "../config/sanity";
import { PEO, PLO, VisionMission } from "../types";

const PEOS_QUERY = groq`
  *[_type == "peo"] | order(id asc) { _id, id, title, description }
`;

const PLOS_QUERY = groq`
  *[_type == "plo"] | order(id asc) { _id, id, attribute, description }
`;

const VISION_MISSION_QUERY = groq`
  *[_type == "visionMission"][0] {
    vision, mission,
    values[] { title, description }
  }
`;

export const obeRepository = {
  async findPEOs(): Promise<PEO[]> {
    return sanityClient.fetch(PEOS_QUERY);
  },
  async findPLOs(): Promise<PLO[]> {
    return sanityClient.fetch(PLOS_QUERY);
  },
  async findVisionMission(): Promise<VisionMission | null> {
    return sanityClient.fetch(VISION_MISSION_QUERY);
  },
};
