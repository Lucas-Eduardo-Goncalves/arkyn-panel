import type { Route } from "+/route.trafficSources";
import { TrafficSourcesPage } from "~/client/pages/trafficSources";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createTrafficSource } from "../factories/trafficSource/createTrafficSourceFactory";
import { deleteTrafficSource } from "../factories/trafficSource/deleteTrafficSourceFactory";
import { listTrafficSources } from "../factories/trafficSource/listTrafficSourcesFactory";
import { updateTrafficSource } from "../factories/trafficSource/updateTrafficSourceFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const trafficSources = await listTrafficSources.handle(adaptedRoute);

  return { trafficSources };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createTrafficSource":
        return await createTrafficSource.handle(adaptedRoute);
      case "updateTrafficSource":
        return await updateTrafficSource.handle(adaptedRoute);
      case "deleteTrafficSource":
        return await deleteTrafficSource.handle(adaptedRoute);
      default:
        throw HttpAdapter.notImplemented("Action not implemented");
    }
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function TrafficSourcesRoute() {
  return <TrafficSourcesPage />;
}
