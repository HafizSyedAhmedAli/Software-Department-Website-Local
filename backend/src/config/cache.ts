import NodeCache from "node-cache";
import { ENV } from "./env";

export const cache = new NodeCache({
  stdTTL: ENV.CACHE_TTL,
  checkperiod: 600,
  useClones: false,
});
