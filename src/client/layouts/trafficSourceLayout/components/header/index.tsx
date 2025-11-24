import { Button } from "@arkyn/components";
import { ArrowLeft, Clock, Server } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router";

import type { TrafficSourceLayoutLoader } from "~/client/types/trafficSourceLayoutLoader";
import { Container } from "./styles";

function Header() {
  const loaderData = useLoaderData<TrafficSourceLayoutLoader>();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/traffic-sources");
  }

  return (
    <Container>
      <div className="informationArea">
        <h1>{loaderData.trafficSource.name}</h1>

        <div className="informationGroup">
          <div className="informationRow">
            <Clock />
            <p>{loaderData.trafficSource.createdAt}</p>
          </div>

          <div className="informationRow">
            <Server />
            <p>{loaderData.trafficSource.trafficDomain}</p>
          </div>
        </div>
      </div>

      <Button variant="outline" leftIcon={ArrowLeft} onClick={handleBack}>
        Back to traffic sources
      </Button>
    </Container>
  );
}

export { Header };
