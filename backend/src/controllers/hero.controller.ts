import { Request, Response, NextFunction } from "express";
import { heroService } from "../services/hero.service";

export const heroController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await heroService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
