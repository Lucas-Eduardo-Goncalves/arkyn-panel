import type { Webhook } from "../entities/webhook";

type CreateWebhookProps = {
  trafficSourceId: string;
  value: string;
  type: "discord";
  level: "fatal" | "warning" | "info";
};

type UpdateWebhookProps = {
  id: string;
  value: string;
  level: "fatal" | "warning" | "info";
};

type WebhookGatewayDTO = {
  listWebhooks: (trafficSourceId: string, token: string) => Promise<Webhook[]>;
  createWebhook: (input: CreateWebhookProps, token: string) => Promise<void>;
  updateWebhook: (input: UpdateWebhookProps, token: string) => Promise<void>;
  deleteWebhook: (webhookId: string, token: string) => Promise<void>;
};

export type { CreateWebhookProps, UpdateWebhookProps, WebhookGatewayDTO };
