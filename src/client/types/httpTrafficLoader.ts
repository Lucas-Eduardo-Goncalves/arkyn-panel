import { loader } from "~/main/routes/route.httpTraffics";

type HttpTrafficLoader = Awaited<ReturnType<typeof loader>>;

export type { HttpTrafficLoader };
