import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListPathnamesUseCase } from "~/app/useCases/pathname/listPathnamesUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listPathnamesSchema } from "~/infra/schemas/internal/pathname";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListPathnamesController {
  constructor(private listPathnameUseCase: ListPathnamesUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(listPathnamesSchema);

    const validatedParams = schemaValidator.validate(searchParams);
    const mappedFilter = SearchParamsMapper.toFilter(validatedParams);

    const pathnames = await this.listPathnameUseCase.execute(
      mappedFilter,
      user.token
    );

    return pathnames;
  }
}

export { ListPathnamesController };
