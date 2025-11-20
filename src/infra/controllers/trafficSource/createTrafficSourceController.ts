import type { CreateTrafficSourceUseCase } from "~/app/useCases/trafficSource/createTrafficSourceUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { createTrafficSourceSchema } from "~/infra/schemas/internal/trafficSource";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class CreateTrafficSourceController {
  constructor(private createTrafficSourceUseCase: CreateTrafficSourceUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      createTrafficSourceSchema
    );

    const validatedBody = schemaValidator.validate(body);

    return await this.createTrafficSourceUseCase.execute(
      validatedBody,
      user.token
    );
  }
}

export { CreateTrafficSourceController };
