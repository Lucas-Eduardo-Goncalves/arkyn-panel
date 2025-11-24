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

function EditWebhook() {
  const { modalIsOpen, modalData, closeModal } = useModal("edit-webhook");

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Edit webhook</ModalHeader>

        <ModalContent>
          <Input
            name="id"
            label="Webhook identifier:"
            showAsterisk
            defaultValue={modalData?.id}
            readOnly
          />

          <input
            type="hidden"
            value="discord"
            name="type"
            defaultValue={modalData?.type}
          />

          <Input
            name="value"
            label="Value:"
            placeholder="Write here..."
            showAsterisk
            defaultValue={modalData?.value}
          />

          <Select
            name="level"
            label="Level:"
            showAsterisk
            defaultValue={modalData?.level}
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
            value="updateWebhook"
            isLoading={navigation.state !== "idle"}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { EditWebhook };
