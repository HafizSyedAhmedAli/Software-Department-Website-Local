import { Request, Response, NextFunction } from "express";
import { researchService } from "../services/research.service";

export const researchController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await researchService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
