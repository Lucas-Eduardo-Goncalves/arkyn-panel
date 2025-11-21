import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { Table } from "./components/table";
import { Container, Header } from "./styles";

function DomainsPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <Header>
        <h1>Domains</h1>
      </Header>
      <Table />
    </Container>
  );
}

export { DomainsPage };
