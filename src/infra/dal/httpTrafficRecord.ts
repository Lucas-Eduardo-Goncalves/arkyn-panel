import type { HttpTrafficRecordDalDTO } from "~/domain/dal/httpTrafficRecord";
import type { HttpTrafficRecord } from "~/domain/view/httpTrafficRecord";
import { HttpAdapter } from "../adapters/httpAdapter";
import { SchemaValidatorAdapter } from "../adapters/schemaValidatorAdapter";
import { storeMicroservice } from "../http/store";
import { HttpTrafficRecordMapper } from "../mappers/httpTrafficRecord";
import { externalHttpTrafficRecordSchema } from "../schemas/external/httpTrafficRecord";

class HttpTrafficRecordDal implements HttpTrafficRecordDalDTO {
  async listHttpTrafficRecord(
    httpTrafficId: string,
    token: string
  ): Promise<HttpTrafficRecord> {
    let url = `/http-traffic-records/record/${httpTrafficId}`;
    const apiResponse = await storeMicroservice.get(url, { token });
    if (!apiResponse.success) throw HttpAdapter.badRequest(apiResponse.message);

    const schemaValidator = new SchemaValidatorAdapter(
      externalHttpTrafficRecordSchema
    );

    const data = schemaValidator.validate(apiResponse.response);
    return HttpTrafficRecordMapper.toEntity(data);
  }
}

export { HttpTrafficRecordDal };
