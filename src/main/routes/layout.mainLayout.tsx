import type { Route } from "+/layout.mainLayout";
import { MainLayout } from "~/client/layouts/mainLayout";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const user = await AuthMiddleware.authenticate(adaptedRoute);
  return user;
}

export default MainLayout;
