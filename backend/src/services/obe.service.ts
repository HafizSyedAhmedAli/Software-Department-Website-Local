import { obeRepository } from "../repositories/obe.repository";
import { PEO, PLO, VisionMission } from "../types";

export const obeService = {
  async getPEOs(): Promise<PEO[]> {
    return obeRepository.findPEOs();
  },
  async getPLOs(): Promise<PLO[]> {
    return obeRepository.findPLOs();
  },
  async getVisionMission(): Promise<VisionMission | null> {
    return obeRepository.findVisionMission();
  },
};
