import { coursesRepository } from "../repositories/courses.repository";
import { Course } from "../types";

export const coursesService = {
  async getAll(): Promise<Course[]> {
    return coursesRepository.findAll();
  },
};
