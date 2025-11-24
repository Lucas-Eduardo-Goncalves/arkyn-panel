import {
  Button,
  FormProvider,
  Input,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  Select,
  useModal,
} from "@arkyn/components";
import { Form, useActionData, useNavigation } from "react-router";

import { ModalContent } from "./styles";

function CreateWebhook() {
  const { modalIsOpen, closeModal } = useModal("create-webhook");

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Add webhook</ModalHeader>

        <ModalContent>
          <input type="hidden" value="discord" name="type" />

          <Input
            name="value"
            label="Value:"
            placeholder="Write here..."
            showAsterisk
          />

          <Select
            name="level"
            label="Level:"
            showAsterisk
            options={[
              { label: "Info", value: "info" },
              { label: "Warning", value: "warning" },
              { label: "Fatal", value: "fatal" },
            ]}
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            name="_action"
            value="createWebhook"
            isLoading={navigation.state !== "idle"}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateWebhook };
