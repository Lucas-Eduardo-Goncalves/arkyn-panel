import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListTrafficSourceByIdUseCase } from "~/app/useCases/trafficSource/listTrafficSourceByIdUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listTrafficSourceByIdSchema } from "~/infra/schemas/internal/trafficSource";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListTrafficSourceByIdController {
  constructor(private listTrafficSourceUseCase: ListTrafficSourceByIdUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(
      listTrafficSourceByIdSchema
    );

    const validatedParams = schemaValidator.validate(searchParams);

    const trafficSourceById = await this.listTrafficSourceUseCase.execute(
      validatedParams.trafficSourceId,
      user.token
    );

    return trafficSourceById;
  }
}

export { ListTrafficSourceByIdController };
