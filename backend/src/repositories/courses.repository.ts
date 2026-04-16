import groq from "groq";
import { sanityClient } from "../config/sanity";
import { Course } from "../types";

const QUERY = groq`
  *[_type == "course"] | order(semester asc, code asc) {
    _id, code, name, creditHours, semester, type,
    clos[] { clo, description, domain, taxonomy, plo }
  }
`;

export const coursesRepository = {
  async findAll(): Promise<Course[]> {
    return sanityClient.fetch(QUERY);
  },
};
