import { useLoaderData } from "react-router";
import type { HttpTrafficLoader } from "~/client/types/httpTrafficLoader";
import { Container } from "./styles";
import { convertMsToTime } from "../../utilities/convertMsToTime";

function DetailsView() {
  const { httpTrafficRecord } = useLoaderData<HttpTrafficLoader>();
  if (!httpTrafficRecord) return null;

  const {
    domain,
    elapsedTime,
    level,
    method,
    pathname,
    protocol,
    status,
    createdAt,
  } = httpTrafficRecord;

  return (
    <Container>
      <div>
        <p>Method</p>
        <p>{method}</p>
      </div>
      <div>
        <p>Domain</p>
        <p>{domain}</p>
      </div>
      <div>
        <p>Pathname</p>
        <p>{pathname}</p>
      </div>
      <div>
        <p>Protocol</p>
        <p>{protocol}</p>
      </div>
      <div>
        <p>Status</p>
        <p>{status}</p>
      </div>
      <div>
        <p>Level</p>
        <p>{level}</p>
      </div>
      <div>
        <p>Elapsed time</p>
        <p>{convertMsToTime(elapsedTime)}</p>
      </div>
      <div>
        <p>Created at</p>
        <p>{createdAt}</p>
      </div>
    </Container>
  );
}

export { DetailsView };
