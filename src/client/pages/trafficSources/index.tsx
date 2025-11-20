import { Divider, IconButton, Input, useAutomation } from "@arkyn/components";
import { Search } from "lucide-react";
import { useActionData, useLoaderData } from "react-router";

import type { TrafficSourceLoader } from "~/client/types/trafficSourceLoader";

import { Card } from "./components/card";
import { CreateTrafficSource } from "./components/createTrafficSource";
import { DeleteTrafficSource } from "./components/deleteTrafficSource";
import { EditTrafficSource } from "./components/editTrafficSource";
import { Header } from "./components/header";

import { CaptionContainer, Container, GridContainer } from "./styles";

function TrafficSourcesPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  const { trafficSources } = useLoaderData<TrafficSourceLoader>();

  return (
    <>
      <Container>
        <Header />

        <CaptionContainer>
          <Input leftIcon={Search} name="name" placeholder="Search by name" />
        </CaptionContainer>

        <Divider />

        <GridContainer>
          {trafficSources.data.map((trafficSource) => (
            <Card
              key={trafficSource.id}
              id={trafficSource.id}
              createdAt={trafficSource.createdAt}
              name={trafficSource.name}
              trafficDomain={trafficSource.trafficDomain}
            />
          ))}
        </GridContainer>
      </Container>

      <CreateTrafficSource />
      <DeleteTrafficSource />
      <EditTrafficSource />
    </>
  );
}

export { TrafficSourcesPage };
