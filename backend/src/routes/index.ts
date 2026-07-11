import { Router } from "express";
import facultyRoutes from "./faculty.routes";
import staffRoutes from "./staff.routes";
import eventsRoutes from "./events.routes";
import downloadsRoutes from "./downloads.routes";
import galleryRoutes from "./gallery.routes";
import coursesRoutes from "./courses.routes";
import obeRoutes from "./obe.routes";
import settingsRoutes from "./settings.routes";
import webhookRoutes from "./webhook.routes";
import heroRoutes from "./hero.routes";
import researchRoutes from "./research.routes";
import alumniRoutes from "./alumni.routes";

const router = Router();

router.use("/faculty", facultyRoutes);
router.use("/staff", staffRoutes);
router.use("/events", eventsRoutes);
router.use("/downloads", downloadsRoutes);
router.use("/gallery", galleryRoutes);
router.use("/courses", coursesRoutes);
router.use("/obe", obeRoutes);
router.use("/settings", settingsRoutes);
router.use("/hero", heroRoutes);
router.use("/research", researchRoutes);
router.use("/alumni", alumniRoutes);
router.use("/webhooks", webhookRoutes);

export default router;
