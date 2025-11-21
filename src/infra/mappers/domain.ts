import { Domain } from "~/domain/view/domain";
import type { ExternalDomain } from "../schemas/external/domain";

class DomainMapper {
  static toEntity(externalDomain: ExternalDomain) {
    return Domain.restore({
      id: externalDomain.id,
      protocol: externalDomain.protocol,
      trafficSourceId: externalDomain.trafficSourceId,
      value: externalDomain.value,
      createdAt: externalDomain.createdAt,
    });
  }
}

export { DomainMapper };
