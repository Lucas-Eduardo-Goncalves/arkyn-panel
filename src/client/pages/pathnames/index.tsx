import { Button, IconButton, useDrawer } from "@arkyn/components";
import { ArrowLeft, Filter } from "lucide-react";
import { useNavigate, useParams } from "react-router";

import { LineTitle } from "~/client/components/lineTitle";
import { Filters } from "./components/filters";
import { Footer } from "./components/footer";
import { Table } from "./components/table";
import { Container } from "./styles";

function PathnamesPage() {
  const { openDrawer } = useDrawer("pathname-filters-drawer");

  const params = useParams();
  const navigate = useNavigate();

  function backToDomains() {
    navigate(`/traffic-sources/${params.trafficSourceId}/domains`);
  }

  return (
    <Container>
      <LineTitle title="Pathnames">
        <IconButton
          icon={Filter}
          aria-label="Open filters"
          onClick={() => openDrawer()}
          variant="outline"
          size="sm"
        />

        <Button
          size="sm"
          leftIcon={ArrowLeft}
          variant="outline"
          onClick={backToDomains}
        >
          Back to domains
        </Button>
      </LineTitle>

      <Table />
      <Footer />
      <Filters />
    </Container>
  );
}

export { PathnamesPage };
