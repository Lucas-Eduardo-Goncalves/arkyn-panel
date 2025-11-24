import type { WebhookGatewayDTO } from "~/domain/gateways/webhook";

class ListWebhooksUseCase {
  constructor(private webhookGateway: WebhookGatewayDTO) {}

  async execute(trafficSourceId: string, token: string) {
    const webhooks = await this.webhookGateway.listWebhooks(
      trafficSourceId,
      token
    );

    return webhooks.map((webhook) => webhook.toJson());
  }
}

export { ListWebhooksUseCase };
