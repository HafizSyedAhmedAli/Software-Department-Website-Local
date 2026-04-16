import { staffRepository } from "../repositories/staff.repository";
import { StaffMember } from "../types";

export const staffService = {
  async getAll(): Promise<StaffMember[]> {
    return staffRepository.findAll();
  },
};
