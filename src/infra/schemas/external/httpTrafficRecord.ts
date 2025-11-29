import { z } from "zod";

type ExternalHttpTrafficRecord = z.infer<
  typeof externalHttpTrafficRecordSchema
>;

const externalRequestSchema = z.strictObject({
  headers: z.string(),
  bodyPreview: z.string(),
  bodyUrl: z.string(),
  queryParams: z.string(),
  createdAt: z.string(),
});

const externalResponseSchema = z.strictObject({
  headers: z.string(),
  bodyPreview: z.string(),
  bodyUrl: z.string(),
  createdAt: z.string(),
});

const externalHttpTrafficRecordSchema = z.strictObject({
  id: z.uuidv7(),
  status: z.number(),
  method: z.enum(["get", "post", "put", "delete", "patch"]),
  level: z.enum(["info", "warning", "fatal"]),
  protocol: z.enum(["http", "https"]),
  elapsedTime: z.number(),
  trafficUserId: z.string().nullable(),
  trafficSourceId: z.uuidv7(),
  domain: z.url(),
  pathname: z.string(),
  request: externalRequestSchema,
  response: externalResponseSchema,
  createdAt: z.string(),
});

export { externalHttpTrafficRecordSchema, type ExternalHttpTrafficRecord };
