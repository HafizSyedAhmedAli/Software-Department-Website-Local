import { Router } from "express";
import { alumniController } from "../controllers/alumni.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), alumniController.getAll);
export default router;
