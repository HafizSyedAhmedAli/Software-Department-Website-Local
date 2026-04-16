import { Router } from "express";
import { staffController } from "../controllers/staff.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), staffController.getAll);
export default router;
