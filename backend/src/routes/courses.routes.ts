import { Router } from "express";
import { coursesController } from "../controllers/courses.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), coursesController.getAll);
export default router;
