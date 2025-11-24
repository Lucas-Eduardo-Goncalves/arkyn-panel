import type { DeleteWebhookUseCase } from "~/app/useCases/webhook/deleteWebhookUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deleteWebhookSchema } from "~/infra/schemas/internal/webhook";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeleteWebhookController {
  constructor(private deleteWebhookUseCase: DeleteWebhookUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(deleteWebhookSchema);
    const validatedBody = schemaValidator.validate(body);

    return await this.deleteWebhookUseCase.execute(
      validatedBody.id,
      user.token
    );
  }
}

export { DeleteWebhookController };
