import { Request, Response, NextFunction } from "express";
import { galleryService } from "../services/gallery.service";

export const galleryController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await galleryService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
