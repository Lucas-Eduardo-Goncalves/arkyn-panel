import { styled } from "@linaria/react";
import { Form } from "react-router";

const Container = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .arkynFieldWrapper {
    min-width: 480px;
  }
`;

export { Container };
