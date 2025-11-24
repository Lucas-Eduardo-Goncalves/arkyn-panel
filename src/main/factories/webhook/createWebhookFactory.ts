import { CreateWebhookUseCase } from "~/app/useCases/webhook/createWebhookUseCase";
import { CreateWebhookController } from "~/infra/controllers/webhook/createWebhookController";
import { WebhookGateway } from "~/infra/gateways/webhook";

const webhookGateway = new WebhookGateway();
const createWebhookUseCase = new CreateWebhookUseCase(webhookGateway);
const createWebhookController = new CreateWebhookController(
  createWebhookUseCase
);

const createWebhook = {
  handle: createWebhookController.handle.bind(createWebhookController),
};

export { createWebhook };
