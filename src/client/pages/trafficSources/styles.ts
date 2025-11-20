import { styled } from "@linaria/react";
import { Form } from "react-router";

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

const CaptionContainer = styled(Form)`
  display: flex;
  align-items: center;
  align-items: end;
  gap: 8px;

  > :first-child {
    min-width: 360px;
  }

  .arkynInput {
    background: var(--background-foreground);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

export { Container, CaptionContainer, GridContainer };
