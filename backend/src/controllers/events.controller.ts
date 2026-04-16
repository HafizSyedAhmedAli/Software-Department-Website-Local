import { Request, Response, NextFunction } from "express";
import { eventsService } from "../services/events.service";

export const eventsController = {
  async getAll(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await eventsService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  async getLatest(
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = await eventsService.getLatest();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};
