import { Router } from "express";
import { researchController } from "../controllers/research.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), researchController.getAll);
export default router;
