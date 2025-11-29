import { z } from "zod";
import { paginationSchema } from "./pagination";

const listPathnamesSchema = paginationSchema.extend({
  domainId: z.uuidv7(),
  trafficSourceId: z.uuidv7(),
  sort: z.enum(["value", "createdAt"]).optional(),
});

export { listPathnamesSchema };
