import { Divider, useAutomation } from "@arkyn/components";
import { useActionData, useLoaderData } from "react-router";

import type { TrafficSourceLoader } from "~/client/types/trafficSourceLoader";

import { Card } from "./components/card";
import { CreateTrafficSource } from "./components/createTrafficSource";
import { DeleteTrafficSource } from "./components/deleteTrafficSource";
import { EditTrafficSource } from "./components/editTrafficSource";
import { Header } from "./components/header";

import { Container, GridContainer } from "./styles";

function TrafficSourcesPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  const { trafficSources } = useLoaderData<TrafficSourceLoader>();

  type TrafficSource = (typeof trafficSources.data)[number];
  type TrafficSourceWithFullName = TrafficSource & { fullName: string };

  const groupedSources = trafficSources.data.reduce(
    (acc, trafficSource) => {
      const match = trafficSource.name.match(/\*\*(.*?)\*\*/);
      const categoryName = match ? match[1] : "Sem categoria";

      if (!acc[categoryName]) acc[categoryName] = [];
      acc[categoryName].push({
        ...trafficSource,
        name: trafficSource.name.replace(/\*\*(.*?)\*\*/, "").trim(),
        fullName: trafficSource.name,
      });

      return acc;
    },
    {} as Record<string, TrafficSourceWithFullName[]>,
  );

  const entriesSources = Object.entries(groupedSources);

  return (
    <>
      <Container>
        <Header />

        {entriesSources
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([category, trafficSources]) => (
            <GridContainer>
              <h2>{category}</h2>
              <Divider />
              {trafficSources
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((trafficSource) => (
                  <Card
                    key={trafficSource.id}
                    id={trafficSource.id}
                    createdAt={trafficSource.createdAt}
                    name={trafficSource.name}
                    fullName={trafficSource.fullName}
                    trafficDomain={trafficSource.trafficDomain}
                  />
                ))}
            </GridContainer>
          ))}
      </Container>

      <CreateTrafficSource />
      <DeleteTrafficSource />
      <EditTrafficSource />
    </>
  );
}

export { TrafficSourcesPage };
