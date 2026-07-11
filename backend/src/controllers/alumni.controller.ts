import { Request, Response, NextFunction } from "express";
import { alumniService } from "../services/alumni.service";

export const alumniController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await alumniService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
