import type { Route } from "+/route.forgotPassword";
import { ForgotPasswordPage } from "~/client/pages/forgotPassword";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { forgotPassword } from "../factories/user/forgotPasswordFactory";

export async function action(props: Route.ActionArgs) {
  try {
    const adaptedRoute = await RouteAdapter.adaptRoute(props);
    return await forgotPassword.handle(adaptedRoute);
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function ForgotPasswordRoute() {
  return <ForgotPasswordPage />;
}
