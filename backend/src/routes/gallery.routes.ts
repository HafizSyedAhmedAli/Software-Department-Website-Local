import { Router } from "express";
import { galleryController } from "../controllers/gallery.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), galleryController.getAll);
export default router;
