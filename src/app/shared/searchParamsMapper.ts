import type { RouteDTO } from "../../main/types/route";

type ToObjectInputProps = {
  params: RouteDTO["params"];
  query: RouteDTO["query"];
};

type PaginationFields = {
  page?: number;
  pageLimit?: number;
  sort?: string;
  sortDirection?: "asc" | "desc";
};

class SearchParamsMapper {
  static toObject(input: ToObjectInputProps) {
    const { params, query } = input;
    return { ...params, ...query };
  }

  static toFilter<T extends Record<string, any>>(
    input: T & Partial<PaginationFields>
  ): {
    page?: number;
    pageLimit?: number;
    sort?: string;
    sortDirection?: "asc" | "desc";
    filter: Omit<T, keyof PaginationFields>;
  } {
    const whiteList = ["page", "pageLimit", "sort", "sortDirection"];
    const filter = {} as Omit<T, keyof PaginationFields>;

    Object.entries(input).forEach(([key, value]) => {
      if (!whiteList.includes(key)) (filter as any)[key] = value;
    });

    return {
      page: input?.page,
      pageLimit: input?.pageLimit,
      sort: input?.sort,
      sortDirection: input?.sortDirection,
      filter,
    };
  }
}

export { SearchParamsMapper };
