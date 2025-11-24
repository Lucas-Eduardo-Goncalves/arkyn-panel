import { useAutomation } from "@arkyn/components";
import { useActionData } from "react-router";

import { LineTitle } from "~/client/components/lineTitle";
import { Caption } from "./components/caption";
import { Footer } from "./components/footer";
import { Table } from "./components/table";
import { Container } from "./styles";

function DomainsPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  return (
    <Container>
      <LineTitle title="Domains" />
      <Caption />
      <Table />
      <Footer />
    </Container>
  );
}

export { DomainsPage };
