import type { Route } from "+/route.webhooks";
import { WebhooksPage } from "~/client/pages/webhooks";
import { DecodeActionAdapter } from "~/infra/adapters/decodeAction";
import { ErrorHandlerAdapter } from "~/infra/adapters/errorHandlerAdapter";
import { HttpAdapter } from "~/infra/adapters/httpAdapter";
import { RouteAdapter } from "~/infra/adapters/routeAdapter";
import { createWebhook } from "../factories/webhook/createWebhookFactory";
import { deleteWebhook } from "../factories/webhook/deleteWebhookFactory";
import { listWebhooks } from "../factories/webhook/listWebhooksFactory";
import { updateWebhook } from "../factories/webhook/updateWebhookFactory";

export async function loader(args: Route.LoaderArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);

  const webhooks = await listWebhooks.handle(adaptedRoute);

  return { webhooks };
}

export async function action(args: Route.ActionArgs) {
  const adaptedRoute = await RouteAdapter.adaptRoute(args);
  const _action = await DecodeActionAdapter.decode(adaptedRoute.request);

  try {
    switch (_action) {
      case "createWebhook":
        return await createWebhook.handle(adaptedRoute);
      case "updateWebhook":
        return await updateWebhook.handle(adaptedRoute);
      case "deleteWebhook":
        return await deleteWebhook.handle(adaptedRoute);
      default:
        throw HttpAdapter.notImplemented("Action not implemented");
    }
  } catch (error) {
    return ErrorHandlerAdapter.handle(error);
  }
}

export default function WebhooksRoute() {
  return <WebhooksPage />;
}
