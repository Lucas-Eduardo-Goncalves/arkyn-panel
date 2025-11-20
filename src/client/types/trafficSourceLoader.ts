import { loader } from "~/main/routes/route.trafficSources";

type TrafficSourceLoader = Awaited<ReturnType<typeof loader>>;

export type { TrafficSourceLoader };
