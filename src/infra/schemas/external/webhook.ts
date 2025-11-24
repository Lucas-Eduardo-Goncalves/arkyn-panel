import { z } from "zod";

type ExternalWebhook = z.infer<typeof externalWebhookSchema>;

const externalWebhookSchema = z.strictObject({
  id: z.uuidv7(),
  value: z.string(),
  level: z.enum(["info", "warning", "fatal"]),
  type: z.enum(["discord"]),
  trafficSourceId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const externalWebhooksSchema = externalWebhookSchema.array();

export { externalWebhooksSchema, type ExternalWebhook };
