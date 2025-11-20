import {
  Button,
  FormProvider,
  Input,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  useModal,
} from "@arkyn/components";
import { Form, useActionData, useNavigation } from "react-router";
import { ModalContent } from "./styles";
import { IdCard } from "lucide-react";

function EditTrafficSource() {
  const { modalIsOpen, modalData, closeModal } = useModal(
    "edit-traffic-source"
  );

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Edit traffic source</ModalHeader>

        <ModalContent>
          <Input
            name="id"
            label="Traffic source identifier:"
            showAsterisk
            defaultValue={modalData?.id}
            readOnly
          />

          <Input
            name="name"
            label="Name:"
            placeholder="Write here..."
            showAsterisk
            defaultValue={modalData?.name}
          />

          <Input
            name="trafficDomain"
            label="Domain:"
            placeholder="Write here..."
            showAsterisk
            defaultValue={modalData?.trafficDomain}
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            name="_action"
            value="updateTrafficSource"
            isLoading={navigation.state !== "idle"}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { EditTrafficSource };
