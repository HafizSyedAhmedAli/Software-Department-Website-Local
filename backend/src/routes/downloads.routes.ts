import { Router } from "express";
import { downloadsController } from "../controllers/downloads.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), downloadsController.getAll);
export default router;
