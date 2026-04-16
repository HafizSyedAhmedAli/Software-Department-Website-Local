import { Request, Response, NextFunction } from "express";
import { ENV } from "../config/env";
import { clearCacheByPattern } from "../middleware/cache.middleware";

// Maps Sanity doc type → cache URL pattern to bust
const TYPE_TO_CACHE: Record<string, string> = {
  faculty: "/api/faculty",
  staff: "/api/staff",
  event: "/api/events",
  download: "/api/downloads",
  galleryItem: "/api/gallery",
  course: "/api/courses",
  peo: "/api/obe/peos",
  plo: "/api/obe/plos",
  visionMission: "/api/obe/vision-mission",
  siteSettings: "/api/settings",
};

export const webhookController = {
  async handleSanity(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const secret = req.query.secret as string;
      if (secret !== ENV.REVALIDATION_SECRET) {
        res.status(401).json({ success: false, message: "Unauthorized" });
        return;
      }

      const { _type } = req.body as { _type?: string };
      if (!_type || !TYPE_TO_CACHE[_type]) {
        res
          .status(400)
          .json({ success: false, message: `Unknown type: ${_type}` });
        return;
      }

      // 1. Clear Express in-memory cache
      clearCacheByPattern(TYPE_TO_CACHE[_type]);

      // 2. Tell Next.js to revalidate its fetch cache
      await notifyNextJs(_type);

      res.json({ success: true, cleared: TYPE_TO_CACHE[_type] });
    } catch (err) {
      next(err);
    }
  },
};

async function notifyNextJs(documentType: string): Promise<void> {
  try {
    await fetch(
      `${ENV.FRONTEND_URL}/api/revalidate?secret=${ENV.REVALIDATION_SECRET}&type=${documentType}`,
      { method: "POST" },
    );
  } catch {
    console.warn("[Webhook] Could not reach Next.js revalidation endpoint");
  }
}
