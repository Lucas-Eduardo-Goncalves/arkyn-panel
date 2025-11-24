import type { TrafficSourceSearchParams } from "~/app/search/trafficSourceSearchParams";
import type { SearchResult } from "~/app/shared/searchResult";
import type { TrafficSource } from "../entities/trafficSource";

type CreateTrafficSourceProps = {
  name: string;
  trafficDomain: string;
};

type UpdateTrafficSourceProps = {
  id: string;
  name: string;
  trafficDomain: string;
};

type TrafficSourceGatewayDTO = {
  listTrafficSources: (
    searchParams: TrafficSourceSearchParams,
    token: string
  ) => Promise<SearchResult<TrafficSource>>;

  listById: (trafficSourceId: string, token: string) => Promise<TrafficSource>;

  createTrafficSource: (
    input: CreateTrafficSourceProps,
    token: string
  ) => Promise<void>;

  updateTrafficSource: (
    input: UpdateTrafficSourceProps,
    token: string
  ) => Promise<void>;

  deleteTrafficSource: (
    trafficSourceId: string,
    token: string
  ) => Promise<void>;
};

export type {
  CreateTrafficSourceProps,
  TrafficSourceGatewayDTO,
  UpdateTrafficSourceProps,
};
