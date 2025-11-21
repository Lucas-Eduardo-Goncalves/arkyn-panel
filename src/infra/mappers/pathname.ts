import { Pathname } from "~/domain/view/pathname";
import type { ExternalPathname } from "../schemas/external/pathname";

class PathnameMapper {
  static toEntity(externalPathname: ExternalPathname) {
    return Pathname.restore({
      id: externalPathname.id,
      domainId: externalPathname.domainId,
      trafficSourceId: externalPathname.trafficSourceId,
      value: externalPathname.value,
      createdAt: externalPathname.createdAt,
    });
  }
}

export { PathnameMapper };
