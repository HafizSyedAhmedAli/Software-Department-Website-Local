import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import { notFound } from "./middleware/notFound";
import { ENV } from "./config/env";

const app = express();

// ── Security ────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

// ── Rate Limiting ────────────────────────────────────────────────────────────
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min window
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: "Too many requests, slow down." },
  }),
);

// ── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Health Check ─────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", env: ENV.NODE_ENV, ts: new Date().toISOString() });
});

// ── API Routes ───────────────────────────────────────────────────────────────
app.use("/api", routes);

// ── Fallthrough handlers ─────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;
