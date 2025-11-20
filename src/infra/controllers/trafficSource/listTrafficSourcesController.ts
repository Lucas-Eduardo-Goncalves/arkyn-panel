import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListTrafficSourcesUseCase } from "~/app/useCases/trafficSource/listTrafficSourcesUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listTrafficSourcesSchema } from "~/infra/schemas/internal/trafficSource";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListTrafficSourcesController {
  constructor(private listTrafficSourceUseCase: ListTrafficSourcesUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(
      listTrafficSourcesSchema
    );

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const trafficSources = await this.listTrafficSourceUseCase.execute(
      mappedFilter,
      user.token
    );

    return trafficSources;
  }
}

export { ListTrafficSourcesController };
