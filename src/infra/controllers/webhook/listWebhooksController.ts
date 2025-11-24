import { SearchParamsMapper } from "~/app/shared/searchParamsMapper";
import type { ListWebhooksUseCase } from "~/app/useCases/webhook/listWebhooksUseCase";
import { SchemaValidatorAdapter } from "~/infra/adapters/schemaValidatorAdapter";
import { listWebhooksSchema } from "~/infra/schemas/internal/webhook";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListWebhooksController {
  constructor(private listWebhookUseCase: ListWebhooksUseCase) {}

  async handle(route: RouteDTO) {
    const user = await AuthMiddleware.authenticate(route);

    const searchParams = SearchParamsMapper.toObject({
      query: route.query,
      params: route.params,
    });

    const schemaValidator = new SchemaValidatorAdapter(listWebhooksSchema);

    const validatedParams = schemaValidator.validate(searchParams);

    const webhooks = await this.listWebhookUseCase.execute(
      validatedParams.trafficSourceId,
      user.token
    );

    return webhooks;
  }
}

export { ListWebhooksController };
