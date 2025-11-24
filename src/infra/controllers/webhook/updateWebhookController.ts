import type { UpdateWebhookUseCase } from "~/app/useCases/webhook/updateWebhookUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updateWebhookSchema } from "~/infra/schemas/internal/webhook";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdateWebhookController {
  constructor(private updateWebhookUseCase: UpdateWebhookUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(updateWebhookSchema);

    const validatedBody = schemaValidator.validate(body);

    return await this.updateWebhookUseCase.execute(validatedBody, user.token);
  }
}

export { UpdateWebhookController };
