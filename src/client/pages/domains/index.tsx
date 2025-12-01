import { IconButton, useDrawer } from "@arkyn/components";

import { Filter } from "lucide-react";
import { LineTitle } from "~/client/components/lineTitle";
import { Filters } from "./components/filters";
import { Footer } from "./components/footer";
import { Table } from "./components/table";
import { Container } from "./styles";

function DomainsPage() {
  const { openDrawer } = useDrawer("domain-filters-drawer");

  return (
    <Container>
      <LineTitle title="Domains">
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
      <Filters />
    </Container>
  );
}

export { DomainsPage };
