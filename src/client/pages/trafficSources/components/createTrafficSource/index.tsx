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

function CreateTrafficSource() {
  const { modalIsOpen, closeModal } = useModal("create-traffic-Source");

  const actionData = useActionData();
  const navigation = useNavigation();

  return (
    <FormProvider
      form={<Form method="post" />}
      fieldErrors={actionData?.fieldErrors}
    >
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Add traffic source</ModalHeader>

        <ModalContent>
          <Input
            name="name"
            label="Name:"
            placeholder="Write here..."
            showAsterisk
          />

          <Input
            name="trafficDomain"
            label="Domain:"
            placeholder="Write here..."
            showAsterisk
          />
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            name="_action"
            value="createTrafficSource"
            isLoading={navigation.state !== "idle"}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { CreateTrafficSource };
