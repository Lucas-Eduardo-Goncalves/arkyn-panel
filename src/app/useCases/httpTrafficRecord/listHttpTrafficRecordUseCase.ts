import type { HttpTrafficRecordDalDTO } from "~/domain/dal/httpTrafficRecord";

class ListHttpTrafficRecordUseCase {
  constructor(private HttpTrafficRecordDal: HttpTrafficRecordDalDTO) {}

  async execute(httpTrafficId: string, token: string) {
    const httpTrafficRecord =
      await this.HttpTrafficRecordDal.listHttpTrafficRecord(
        httpTrafficId,
        token
      );

    return httpTrafficRecord.toJson();
  }
}

export { ListHttpTrafficRecordUseCase };
