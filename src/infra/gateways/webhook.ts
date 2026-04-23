import type { Webhook } from "~/domain/entities/webhook";
import type {
  CreateWebhookProps,
  UpdateWebhookProps,
  WebhookGatewayDTO,
} from "~/domain/gateways/webhook";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { WebhookMapper } from "../mappers/webhook";
import { externalWebhooksSchema } from "../schemas/external/webhook";

class WebhookGateway implements WebhookGatewayDTO {
  async listWebhooks(
    trafficSourceId: string,
    token: string,
  ): Promise<Webhook[]> {
    const apiResponse = await storeMicroservice.get(
      `/webhooks/${trafficSourceId}`,
      { token },
    );

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(externalWebhooksSchema);
    const data = schemaValidator.validate(apiResponse.response);

    return data.map(WebhookMapper.toEntity);
  }

  async createWebhook(input: CreateWebhookProps, token: string): Promise<void> {
    const { trafficSourceId, ...body } = input;

    const apiResponse = await storeMicroservice.post(
      `/webhooks/${trafficSourceId}`,
      { body, token },
    );

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async updateWebhook(input: UpdateWebhookProps, token: string): Promise<void> {
    const { id: webhookId, ...body } = input;

    const apiResponse = await storeMicroservice.put(`/webhooks/${webhookId}`, {
      body,
      token,
    });

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }

  async deleteWebhook(webhookId: string, token: string): Promise<void> {
    const apiResponse = await storeMicroservice.delete(
      `/webhooks/${webhookId}`,
      { token },
    );

    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);
  }
}

export { WebhookGateway };
