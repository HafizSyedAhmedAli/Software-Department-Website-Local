import groq from "groq";
import { sanityClient } from "../config/sanity";
import { StaffMember } from "../types";

const QUERY = groq`
  *[_type == "staff"] | order(sn asc) {
    _id, sn, name, designation
  }
`;

export const staffRepository = {
  async findAll(): Promise<StaffMember[]> {
    return sanityClient.fetch(QUERY);
  },
};
