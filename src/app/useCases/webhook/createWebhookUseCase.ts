import type { WebhookGatewayDTO } from "~/domain/gateways/webhook";

type InputProps = {
  trafficSourceId: string;
  value: string;
  type: "discord";
  level: "fatal" | "warning" | "info";
};

class CreateWebhookUseCase {
  constructor(private webhookGateway: WebhookGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.webhookGateway.createWebhook(input, token);

    return {
      closeModal: true,
      message: "Webhook created successfully",
      type: "success",
    };
  }
}

export { CreateWebhookUseCase };
