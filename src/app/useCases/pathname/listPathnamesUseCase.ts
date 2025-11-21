import { PathnameSearchParams } from "~/app/search/pathnameSearchParams";
import type { PathnameDalDTO } from "~/domain/dal/pathname";

type InputProps = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
  filter: {
    domainId: string;
    trafficSourceId: string;
  };
};

class ListPathnamesUseCase {
  constructor(private pathnameDal: PathnameDalDTO) {}

  async execute(input: InputProps, token: string) {
    const searchParams = new PathnameSearchParams(input);
    const pathnames = await this.pathnameDal.listPathnames(searchParams, token);
    return pathnames.toJson();
  }
}

export { ListPathnamesUseCase };
