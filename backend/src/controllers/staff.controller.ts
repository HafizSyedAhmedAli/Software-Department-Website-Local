import { Request, Response, NextFunction } from "express";
import { staffService } from "../services/staff.service";

export const staffController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await staffService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
