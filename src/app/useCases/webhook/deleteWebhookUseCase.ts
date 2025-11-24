import type { WebhookGatewayDTO } from "~/domain/gateways/webhook";

class DeleteWebhookUseCase {
  constructor(private webhookGateway: WebhookGatewayDTO) {}

  async execute(webhookId: string, token: string) {
    await this.webhookGateway.deleteWebhook(webhookId, token);

    return {
      closeModal: true,
      message: "Webhook deleted successfully",
      type: "success",
    };
  }
}

export { DeleteWebhookUseCase };
