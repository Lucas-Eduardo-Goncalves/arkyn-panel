import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListHttpTrafficsUseCase } from "~/app/useCases/httpTraffic/listHttpTrafficsUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listHttpTrafficsSchema } from "~/infra/schemas/internal/httpTraffic";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListHttpTrafficsController {
  constructor(private listHttpTrafficUseCase: ListHttpTrafficsUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(listHttpTrafficsSchema);

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const httpTraffics = await this.listHttpTrafficUseCase.execute(
      mappedFilter,
      user.token
    );

    return httpTraffics;
  }
}

export { ListHttpTrafficsController };
