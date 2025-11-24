import { loader } from "~/main/routes/route.webhooks";

type WebhookLoader = Awaited<ReturnType<typeof loader>>;

export type { WebhookLoader };
