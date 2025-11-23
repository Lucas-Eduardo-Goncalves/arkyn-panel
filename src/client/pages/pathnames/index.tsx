import { Button, useAutomation } from "@arkyn/components";
import { ArrowLeft } from "lucide-react";
import { useActionData, useNavigate, useParams } from "react-router";

import { Table } from "./components/table";
import { Container, Header } from "./styles";

function PathnamesPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  const params = useParams();
  const navigate = useNavigate();

  function backToDomains() {
    navigate(`/traffic-sources/${params.trafficSourceId}/domains`);
  }

  return (
    <Container>
      <Header>
        <h1>Pathnames</h1>
        <Button leftIcon={ArrowLeft} variant="outline" onClick={backToDomains}>
          Back to domains
        </Button>
      </Header>
      <Table />
    </Container>
  );
}

export { PathnamesPage };
