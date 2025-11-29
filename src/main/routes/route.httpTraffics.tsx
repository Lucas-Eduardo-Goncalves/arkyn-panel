import type { Route } from "+/route.httpTraffics";
import { HttpTrafficsPage } from "~/client/pages/httpTraffics";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listHttpTraffics } from "../factories/httpTraffic/listHttpTrafficsFactory";
import { listHttpTrafficRecord } from "../factories/httpTrafficRecord/listHttpTrafficRecordFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const httpTraffics = await listHttpTraffics.handle(adaptedRoute);

  let httpTrafficRecord = null;

  if (adaptedRoute.query.httpTrafficId) {
    httpTrafficRecord = await listHttpTrafficRecord.handle(adaptedRoute);
  }

  return { httpTraffics, httpTrafficRecord };
}

export default function HttpTrafficsRoute() {
  return <HttpTrafficsPage />;
}
