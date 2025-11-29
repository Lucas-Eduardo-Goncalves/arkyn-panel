import { HttpTraffic } from "~/domain/view/httpTraffic";
import type { ExternalHttpTraffic } from "../schemas/external/httpTraffic";

class HttpTrafficMapper {
  static toEntity(externalHttpTraffic: ExternalHttpTraffic) {
    return HttpTraffic.restore({
      id: externalHttpTraffic.id,
      method: externalHttpTraffic.method,
      domainId: externalHttpTraffic.domainId,
      elapsedTime: externalHttpTraffic.elapsedTime,
      status: externalHttpTraffic.status,
      level: externalHttpTraffic.level,
      pathnameId: externalHttpTraffic.pathnameId,
      trafficSourceId: externalHttpTraffic.trafficSourceId,
      requestId: externalHttpTraffic.requestId,
      responseId: externalHttpTraffic.responseId,
      trafficUserId: externalHttpTraffic.trafficUserId,
      createdAt: externalHttpTraffic.createdAt,
    });
  }
}

export { HttpTrafficMapper };
