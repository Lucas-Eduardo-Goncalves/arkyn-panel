import { z } from "zod";
import { paginationSchema } from "./pagination";

const listPathnamesSchema = paginationSchema.extend({
  domainId: z.uuid(),
  trafficSourceId: z.uuid(),
  sort: z.enum(["value", "createdAt"]).optional(),
});

export { listPathnamesSchema };
