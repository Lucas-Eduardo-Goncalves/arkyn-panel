import type { HttpTrafficRecord } from "../view/httpTrafficRecord";

type HttpTrafficRecordDalDTO = {
  listHttpTrafficRecord: (
    httpTrafficId: string,
    token: string
  ) => Promise<HttpTrafficRecord>;
};

export type { HttpTrafficRecordDalDTO };
