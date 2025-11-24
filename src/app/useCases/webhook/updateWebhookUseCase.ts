import type { WebhookGatewayDTO } from "~/domain/gateways/webhook";

type InputProps = {
  id: string;
  value: string;
  type: "discord";
  level: "fatal" | "warning" | "info";
};

class UpdateWebhookUseCase {
  constructor(private webhookGateway: WebhookGatewayDTO) {}

  async execute(input: InputProps, token: string) {
    await this.webhookGateway.updateWebhook(input, token);

    return {
      closeModal: true,
      message: "Webhook updated successfully",
      type: "success",
    };
  }
}

export { UpdateWebhookUseCase };
