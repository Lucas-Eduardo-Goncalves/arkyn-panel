import { z } from "zod";

const createWebhookSchema = z.object({
  trafficSourceId: z.uuid("Traffic source ID is required"),
  value: z.string().min(19, "Invalid value").max(19, "Invalid value"),
  type: z.enum(["discord"], "Invalid webhook type"),
  level: z.enum(["fatal", "warning", "info"], "Invalid level"),
});

const deleteWebhookSchema = z.object({
  id: z.uuid("Traffic source ID is required"),
});

const listWebhooksSchema = z.object({
  trafficSourceId: z.uuid("Traffic source ID is required"),
});

const updateWebhookSchema = z.object({
  id: z.uuid("Traffic source ID is required"),
  value: z.string().min(1, "Invalid value").max(19, "Invalid value"),
  type: z.enum(["discord"], "Invalid webhook type"),
  level: z.enum(["fatal", "warning", "info"], "Invalid level"),
});

export {
  createWebhookSchema,
  deleteWebhookSchema,
  listWebhooksSchema,
  updateWebhookSchema,
};
