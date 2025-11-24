import { DeleteWebhookUseCase } from "~/app/useCases/webhook/deleteWebhookUseCase";
import { DeleteWebhookController } from "~/infra/controllers/webhook/deleteWebhookController";
import { WebhookGateway } from "~/infra/gateways/webhook";

const webhookGateway = new WebhookGateway();
const deleteWebhookUseCase = new DeleteWebhookUseCase(webhookGateway);
const deleteWebhookController = new DeleteWebhookController(
  deleteWebhookUseCase
);

const deleteWebhook = {
  handle: deleteWebhookController.handle.bind(deleteWebhookController),
};

export { deleteWebhook };
