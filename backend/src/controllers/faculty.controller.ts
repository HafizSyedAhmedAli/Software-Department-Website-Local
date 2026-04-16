import { Request, Response, NextFunction } from "express";
import { facultyService } from "../services/faculty.service";

export const facultyController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await facultyService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
