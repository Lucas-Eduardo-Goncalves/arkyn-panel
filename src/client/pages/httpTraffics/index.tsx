import { IconButton, useDrawer } from "@arkyn/components";
import { Filter } from "lucide-react";

import { LineTitle } from "~/client/components/lineTitle";
import { Filters } from "./components/filters";
import { Footer } from "./components/footer";
import { HttpTrafficRecord } from "./components/httpTrafficRecord";
import { Table } from "./components/table";

import { Container } from "./styles";

function HttpTrafficsPage() {
  const { openDrawer } = useDrawer("http-traffic-filters-drawer");

  return (
    <Container>
      <LineTitle title="Http traffics">
        <IconButton
          icon={Filter}
          aria-label="Open filters"
          onClick={() => openDrawer()}
          variant="outline"
          size="sm"
        />
      </LineTitle>
      <Table />
      <Footer />
      <HttpTrafficRecord />
      <Filters />
    </Container>
  );
}

export { HttpTrafficsPage };
