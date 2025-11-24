import type { CreateWebhookUseCase } from "~/app/useCases/webhook/createWebhookUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createWebhookSchema } from "~/infra/schemas/internal/webhook";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateWebhookController {
  constructor(private createWebhookUseCase: CreateWebhookUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);
    const params = route.params;

    const schemaValidator = new SchemaValidatorAdapter(createWebhookSchema);

    const validatedBody = schemaValidator.validate({ ...body, ...params });

    return await this.createWebhookUseCase.execute(validatedBody, user.token);
  }
}

export { CreateWebhookController };
