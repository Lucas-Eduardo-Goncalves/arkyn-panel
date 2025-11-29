import { HttpTrafficSearchParams } from "~/app/search/httpTrafficSearchParams";
import type { HttpTrafficDalDTO } from "~/domain/dal/httpTraffic";

type InputProps = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
  filter: {
    id?: string;
    method?: "get" | "post" | "put" | "delete" | "patch";
    level?: "info" | "warning" | "fatal";
    status?: number;
    protocol?: "https" | "http";
    trafficSourceId: string;
  };
};

class ListHttpTrafficsUseCase {
  constructor(private HttpTrafficDal: HttpTrafficDalDTO) {}

  async execute(input: InputProps, token: string) {
    const searchParams = new HttpTrafficSearchParams(input);

    const httpTraffics = await this.HttpTrafficDal.listHttpTraffics(
      searchParams,
      token
    );

    return httpTraffics.toJson();
  }
}

export { ListHttpTrafficsUseCase };
