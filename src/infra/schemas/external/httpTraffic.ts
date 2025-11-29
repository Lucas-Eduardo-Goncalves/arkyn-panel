import { z } from "zod";
import { externalMetaSchema } from "./meta";

type ExternalHttpTraffic = z.infer<typeof externalHttpTrafficSchema>;

const externalHttpTrafficSchema = z.strictObject({
  id: z.uuidv7(),
  status: z.number(),
  method: z.enum(["get", "post", "put", "delete", "patch"]),
  level: z.enum(["info", "warning", "fatal"]),
  elapsedTime: z.number(),
  trafficUserId: z.string().nullable(),
  trafficSourceId: z.uuidv7(),
  domainId: z.uuidv7(),
  pathnameId: z.uuidv7(),
  requestId: z.uuidv7(),
  responseId: z.uuidv7(),
  createdAt: z.string(),
});

const externalHttpTrafficsSchema = z.object({
  data: externalHttpTrafficSchema.array(),
  meta: externalMetaSchema,
});

export { externalHttpTrafficsSchema, type ExternalHttpTraffic };
