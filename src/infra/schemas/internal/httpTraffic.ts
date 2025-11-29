import { z } from "zod";
import { paginationSchema } from "./pagination";

const listHttpTrafficsSchema = paginationSchema.extend({
  trafficSourceId: z.uuidv7(),
  id: z.uuidv7().optional(),
  method: z.enum(["get", "post", "put", "delete", "patch"]).optional(),
  level: z.enum(["info", "warning", "fatal"]).optional(),
  protocol: z.enum(["https", "http"]).optional(),
  sort: z
    .enum(["elapsedTime", "status", "method", "level", "createdAt"])
    .optional(),
  status: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : undefined)),
});

export { listHttpTrafficsSchema };
