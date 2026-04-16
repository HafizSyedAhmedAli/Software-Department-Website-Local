import { Router } from "express";
import { webhookController } from "../controllers/webhook.controller";

const router = Router();
// Sanity dashboard → API → Webhooks → POST https://your-backend.com/api/webhooks/sanity?secret=...
router.post("/sanity", webhookController.handleSanity);
export default router;
