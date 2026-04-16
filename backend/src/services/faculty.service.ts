import { facultyRepository } from "../repositories/faculty.repository";
import { FacultyMember } from "../types";

export const facultyService = {
  async getAll(): Promise<FacultyMember[]> {
    return facultyRepository.findAll();
  },
};
