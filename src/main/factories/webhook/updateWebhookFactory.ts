import { UpdateWebhookUseCase } from "~/app/useCases/webhook/updateWebhookUseCase";
import { UpdateWebhookController } from "~/infra/controllers/webhook/updateWebhookController";
import { WebhookGateway } from "~/infra/gateways/webhook";

const webhookGateway = new WebhookGateway();
const updateWebhookUseCase = new UpdateWebhookUseCase(webhookGateway);
const updateWebhookController = new UpdateWebhookController(
  updateWebhookUseCase
);

const updateWebhook = {
  handle: updateWebhookController.handle.bind(updateWebhookController),
};

export { updateWebhook };
