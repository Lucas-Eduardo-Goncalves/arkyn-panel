import type { Route } from "+/route.httpTraffics";
import { HttpTrafficsPage } from "~/client/pages/httpTraffics";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listHttpTraffics } from "../factories/httpTraffic/listHttpTrafficsFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const httpTraffics = await listHttpTraffics.handle(adaptedRoute);
  return { httpTraffics };
}

export default function HttpTrafficsRoute() {
  return <HttpTrafficsPage />;
}
