import { Router } from "express";
import { eventsController } from "../controllers/events.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), eventsController.getAll);
router.get("/latest", cacheMiddleware(), eventsController.getLatest);
export default router;
