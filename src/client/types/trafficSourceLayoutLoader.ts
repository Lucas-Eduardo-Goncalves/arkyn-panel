import { loader } from "~/main/routes/layout.trafficSourceLayout";

type TrafficSourceLayoutLoader = Awaited<ReturnType<typeof loader>>;

export type { TrafficSourceLayoutLoader };
