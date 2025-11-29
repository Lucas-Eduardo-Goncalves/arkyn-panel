import { HttpTrafficRecord } from "~/domain/view/httpTrafficRecord";
import type { ExternalHttpTrafficRecord } from "../schemas/external/httpTrafficRecord";

class HttpTrafficRecordMapper {
  static toEntity(externalHttpTrafficRecord: ExternalHttpTrafficRecord) {
    return HttpTrafficRecord.restore({
      id: externalHttpTrafficRecord.id,
      method: externalHttpTrafficRecord.method,
      domain: externalHttpTrafficRecord.domain,
      protocol: externalHttpTrafficRecord.protocol,
      elapsedTime: externalHttpTrafficRecord.elapsedTime,
      status: externalHttpTrafficRecord.status,
      level: externalHttpTrafficRecord.level,
      pathname: externalHttpTrafficRecord.pathname,
      trafficSourceId: externalHttpTrafficRecord.trafficSourceId,
      request: externalHttpTrafficRecord.request,
      response: externalHttpTrafficRecord.response,
      trafficUserId: externalHttpTrafficRecord.trafficUserId,
      createdAt: externalHttpTrafficRecord.createdAt,
    });
  }
}

export { HttpTrafficRecordMapper };
