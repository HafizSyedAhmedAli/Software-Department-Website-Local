import { Request, Response, NextFunction } from "express";
import { obeService } from "../services/obe.service";

export const obeController = {
  async getPEOs(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await obeService.getPEOs();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  async getPLOs(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await obeService.getPLOs();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  async getVisionMission(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await obeService.getVisionMission();
      if (!data) {
        res
          .status(404)
          .json({ success: false, message: "Vision & Mission not configured" });
        return;
      }
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
