import { Router } from "express";
import { obeController } from "../controllers/obe.controller";
import { cacheMiddleware } from "../middleware/cache.middleware";

const router = Router();
router.get("/peos", cacheMiddleware(), obeController.getPEOs);
router.get("/plos", cacheMiddleware(), obeController.getPLOs);
router.get(
  "/vision-mission",
  cacheMiddleware(),
  obeController.getVisionMission,
);
export default router;
