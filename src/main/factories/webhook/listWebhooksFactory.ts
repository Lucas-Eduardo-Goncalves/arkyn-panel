import { ListWebhooksUseCase } from "~/app/useCases/webhook/listWebhooksUseCase";
import { ListWebhooksController } from "~/infra/controllers/webhook/listWebhooksController";
import { WebhookGateway } from "~/infra/gateways/webhook";

const webhookGateway = new WebhookGateway();
const listWebhooksUseCase = new ListWebhooksUseCase(webhookGateway);
const listWebhooksController = new ListWebhooksController(listWebhooksUseCase);

const listWebhooks = {
  handle: listWebhooksController.handle.bind(listWebhooksController),
};

export { listWebhooks };
