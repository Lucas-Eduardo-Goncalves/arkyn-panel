import type { ListHttpTrafficRecordUseCase } from "~/app/useCases/httpTrafficRecord/listHttpTrafficRecordUseCase";
import { AuthMiddleware } from "~/main/middlewares/authMiddleware";
import type { RouteDTO } from "~/main/types/route";

class ListHttpTrafficRecordController {
  constructor(
    private listHttpTrafficRecordUseCase: ListHttpTrafficRecordUseCase
  ) {}

  async handle(route: RouteDTO) {
    const { token } = await AuthMiddleware.authenticate(route);

    const httpTrafficId = route.query?.httpTrafficId;
    if (!httpTrafficId) throw new Error("httpTrafficId param is required");

    const httpTrafficRecord = await this.listHttpTrafficRecordUseCase.execute(
      httpTrafficId,
      token
    );

    return httpTrafficRecord;
  }
}

export { ListHttpTrafficRecordController };
