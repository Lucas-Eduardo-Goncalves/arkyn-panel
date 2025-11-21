import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListDomainsUseCase } from "~/app/useCases/domain/listDomainsUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listDomainsSchema } from "~/infra/schemas/internal/domain";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListDomainsController {
  constructor(private listDomainUseCase: ListDomainsUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(listDomainsSchema);

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const domains = await this.listDomainUseCase.execute(
      mappedFilter,
      user.token
    );

    return domains;
  }
}

export { ListDomainsController };
