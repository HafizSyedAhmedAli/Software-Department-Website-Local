import { Request, Response, NextFunction } from "express";
import { settingsService } from "../services/settings.service";

export const settingsController = {
  async get(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await settingsService.get();
      if (!data) {
        res
          .status(404)
          .json({ success: false, message: "Site settings not configured" });
        return;
      }
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
