import { Router } from "express";
import { settingsController } from "../controllers/settings.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), settingsController.get);
export default router;
