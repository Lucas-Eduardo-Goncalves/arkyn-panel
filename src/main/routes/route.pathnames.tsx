import type { Route } from "+/route.pathnames";
import { PathnamesPage } from "~/client/pages/pathnames";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listPathnames } from "../factories/pathname/listPathnamesFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const pathnames = await listPathnames.handle(adaptedRoute);
  return { pathnames };
}

export default function PathnamesRoute() {
  return <PathnamesPage />;
}
