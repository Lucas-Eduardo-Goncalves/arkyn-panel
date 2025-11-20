import type { Route } from "+/route.changeForgotPassword";
import { ChangeForgotPasswordPage } from "~/client/pages/changeForgotPassword";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { changeForgotPassword } from "../factories/admin/changeForgotPasswordFactory";

export async function action(props: Route.ActionArgs) {
  try {
    const adaptedRoute = await RouteAdapter.adaptRoute(props);
    return await changeForgotPassword.handle(adaptedRoute);
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function ChangeForgotPasswordRoute() {
  return <ChangeForgotPasswordPage />;
}
