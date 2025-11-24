import { Webhook } from "~/domain/entities/webhook";
import type { ExternalWebhook } from "../schemas/external/webhook";

class WebhookMapper {
  static toEntity(externalWebhook: ExternalWebhook) {
    return Webhook.restore({
      id: externalWebhook.id,
      level: externalWebhook.level,
      createdAt: externalWebhook.createdAt,
      trafficSourceId: externalWebhook.trafficSourceId,
      type: externalWebhook.type,
      updatedAt: externalWebhook.updatedAt,
      value: externalWebhook.value,
    });
  }
}

export { WebhookMapper };
