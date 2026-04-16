import { Request, Response, NextFunction } from "express";
import { cache } from "../config/cache";

export function cacheMiddleware(ttl?: number) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const key = req.originalUrl;
    const cached = cache.get(key);

    if (cached !== undefined) {
      res.json(cached);
      return;
    }

    const originalJson = res.json.bind(res);
    res.json = (body: unknown) => {
      cache.set(key, body, ttl ?? 3600);
      return originalJson(body);
    };

    next();
  };
}

export function clearCacheByPattern(pattern: string): void {
  const keys = cache.keys().filter((k) => k.includes(pattern));
  if (keys.length) cache.del(keys);
}

export function clearAllCache(): void {
  cache.flushAll();
}
