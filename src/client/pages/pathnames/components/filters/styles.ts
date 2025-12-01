import { styled } from "@linaria/react";
import { Form } from "react-router";

const DrawerContent = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px;
  width: 400px;

  height: 100%;

  .arkynButton {
    margin-top: auto;
  }
`;

export { DrawerContent };
