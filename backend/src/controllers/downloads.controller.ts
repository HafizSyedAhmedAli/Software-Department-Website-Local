import { Request, Response, NextFunction } from "express";
import { downloadsService } from "../services/downloads.service";

export const downloadsController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await downloadsService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
