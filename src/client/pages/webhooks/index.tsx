import { Button, useAutomation, useModal } from "@arkyn/components";
import { Plus } from "lucide-react";
import { useActionData } from "react-router";

import { LineTitle } from "~/client/components/lineTitle";
import { CreateWebhook } from "./components/createWebhook";
import { DeleteWebhook } from "./components/deleteWebhook";
import { EditWebhook } from "./components/editWebhook";
import { Table } from "./components/table";
import { Container } from "./styles";

function WebhooksPage() {
  const actionData = useActionData();
  useAutomation(actionData);

  const { openModal } = useModal("create-webhook");

  return (
    <>
      <Container>
        <LineTitle title="Webhooks">
          <Button leftIcon={Plus} onClick={openModal}>
            Add webhook
          </Button>
        </LineTitle>

        <Table />
      </Container>

      <CreateWebhook />
      <DeleteWebhook />
      <EditWebhook />
    </>
  );
}

export { WebhooksPage };
