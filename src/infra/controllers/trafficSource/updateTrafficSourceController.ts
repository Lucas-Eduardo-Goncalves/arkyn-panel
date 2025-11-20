import type { UpdateTrafficSourceUseCase } from "~/app/useCases/trafficSource/updateTrafficSourceUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { updateTrafficSourceSchema } from "~/infra/schemas/internal/trafficSource";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class UpdateTrafficSourceController {
  constructor(private updateTrafficSourceUseCase: UpdateTrafficSourceUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      updateTrafficSourceSchema
    );

    const validatedBody = schemaValidator.validate(body);

    return await this.updateTrafficSourceUseCase.execute(
      validatedBody,
      user.token
    );
  }
}

export { UpdateTrafficSourceController };
