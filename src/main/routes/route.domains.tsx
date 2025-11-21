import type { Route } from "+/route.domains";
import { DomainsPage } from "~/client/pages/domains";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { listDomains } from "../factories/domain/listDomainsFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const domains = await listDomains.handle(adaptedRoute);
  return { domains };
}

export default function DomainsRoute() {
  return <DomainsPage />;
}
