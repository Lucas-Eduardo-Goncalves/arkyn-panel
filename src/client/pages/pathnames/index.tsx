import { Button, useAutomation } from "@arkyn/components";
import { ArrowLeft } from "lucide-react";
import { useActionData, useNavigate, useParams } from "react-router";

import { LineTitle } from "~/client/components/lineTitle";
import { Caption } from "./components/caption";
import { Footer } from "./components/footer";
import { Table } from "./components/table";
import { Container } from "./styles";

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
      <LineTitle title="Pathnames">
        <Button leftIcon={ArrowLeft} variant="outline" onClick={backToDomains}>
          Back to domains
        </Button>
      </LineTitle>

      <Caption />
      <Table />
      <Footer />
    </Container>
  );
}

export { PathnamesPage };
