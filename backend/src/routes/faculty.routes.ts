import { Router } from "express";
import { facultyController } from "../controllers/faculty.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/", cacheMiddleware(), facultyController.getAll);
export default router;
