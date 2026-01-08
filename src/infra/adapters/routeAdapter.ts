import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

class RouteAdapter {
  static async adaptRoute({
    params,
    request,
  }: LoaderFunctionArgs | ActionFunctionArgs) {
    const url = new URL(request.url);

    const query: [string, string][] = [];

    url.searchParams.forEach((value, key) => {
      if (value === null) return;
      if (value === undefined) return;
      if (value.trim() === "") return;
      query.push([key, value]);
    });

    return {
      request: request,
      params: params as Record<string, string>,
      query: Object.fromEntries(query),
    };
  }
}

export { RouteAdapter };
