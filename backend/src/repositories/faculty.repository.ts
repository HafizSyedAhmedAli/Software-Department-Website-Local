import { sanityClient } from "../config/sanity";
import { FacultyMember } from "../types";
import groq from 'groq'

const QUERY = groq`
  *[_type == "faculty"] | order(order asc) {
    _id, name, designation, email,
    facebook, linkedin, isChairman, order,
    "imageUrl": image.asset->url
  }
`;

export const facultyRepository = {
  async findAll(): Promise<FacultyMember[]> {
    return sanityClient.fetch(QUERY);
  },
};
