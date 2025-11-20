import { TrafficSource } from "~/domain/entities/trafficSource";
import type { ExternalTrafficSource } from "../schemas/external/trafficSource";

class TrafficSourceMapper {
  static toEntity(externalTrafficSource: ExternalTrafficSource) {
    return TrafficSource.restore({
      id: externalTrafficSource.id,
      name: externalTrafficSource.name,
      trafficDomain: externalTrafficSource.trafficDomain,
      userId: externalTrafficSource.userId,
      createdAt: externalTrafficSource.createdAt,
      updatedAt: externalTrafficSource.updatedAt,
    });
  }
}

export { TrafficSourceMapper };
