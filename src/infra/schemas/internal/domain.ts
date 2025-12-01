import { z } from "zod";
import { paginationSchema } from "./pagination";

const listDomainsSchema = paginationSchema.extend({
  trafficSourceId: z.uuidv7(),
  value: z.string().optional(),
  protocol: z.enum(["http", "https"]).optional(),
  sort: z.enum(["value", "createdAt", "protocol"]).optional(),
});

export { listDomainsSchema };
