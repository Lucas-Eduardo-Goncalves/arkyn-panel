import { z } from "zod";
import { paginationSchema } from "./pagination";

const listDomainsSchema = paginationSchema.extend({
  trafficSourceId: z.uuid(),
  sort: z.enum(["value", "createdAt", "protocol"]).optional(),
});

export { listDomainsSchema };
