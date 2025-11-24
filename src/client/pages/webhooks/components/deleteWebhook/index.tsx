import {
  Button,
  FormProvider,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  useModal,
} from "@arkyn/components";
import { Trash2 } from "lucide-react";
import { Form, useNavigation } from "react-router";

import { ModalContent } from "./styles";

function DeleteWebhook() {
  const { modalIsOpen, modalData, closeModal } = useModal("delete-webhook");

  const navigation = useNavigation();

  return (
    <FormProvider form={<Form method="post" />}>
      <ModalContainer isVisible={modalIsOpen} makeInvisible={closeModal}>
        <ModalHeader>Delete webhook</ModalHeader>

        <ModalContent>
          <input type="hidden" name="id" value={modalData?.id} />
          <Trash2 />
          <p>Are you sure you want to delete this webhook?</p>
        </ModalContent>

        <ModalFooter>
          <Button type="button" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            name="_action"
            value="deleteWebhook"
            scheme="danger"
            isLoading={navigation.state !== "idle"}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContainer>
    </FormProvider>
  );
}

export { DeleteWebhook };
