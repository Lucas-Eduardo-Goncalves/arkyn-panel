import type { Route } from "+/layout.trafficSourceLayout";
import { TrafficSourceLayout } from "~/client/layouts/trafficSourceLayout";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listTrafficSourceById } from "../factories/trafficSource/listTrafficSourceByIdFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const trafficSource = await listTrafficSourceById.handle(adaptedRoute);
  return { trafficSource };
}

export default TrafficSourceLayout;
