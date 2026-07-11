import { Router } from "express";
import { heroController } from "../controllers/hero.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), heroController.getAll);
export default router;
