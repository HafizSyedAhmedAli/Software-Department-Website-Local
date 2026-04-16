import { Request, Response, NextFunction } from "express";
import { coursesService } from "../services/courses.service";

export const coursesController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await coursesService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
