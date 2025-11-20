import type { DeleteTrafficSourceUseCase } from "~/app/useCases/trafficSource/deleteTrafficSourceUseCase";
import { DecodeRequestBodyAdapter } from "~/infra/adapters/decodeRequestBodyAdapter";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { deleteTrafficSourceSchema } from "~/infra/schemas/internal/trafficSource";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class DeleteTrafficSourceController {
  constructor(private deleteTrafficSourceUseCase: DeleteTrafficSourceUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);
    const body = await DecodeRequestBodyAdapter.decode(route.request);

    const schemaValidator = new SchemaValidatorAdapter(
      deleteTrafficSourceSchema
    );
    const validatedBody = schemaValidator.validate(body);

    return await this.deleteTrafficSourceUseCase.execute(
      validatedBody.id,
      user.token
    );
  }
}

export { DeleteTrafficSourceController };
