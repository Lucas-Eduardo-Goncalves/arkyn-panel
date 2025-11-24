import type { ReactNode } from "react";
import { Container } from "./styles";

type LineTitleProps = {
  title: string;
  children?: ReactNode;
};

function LineTitle(props: LineTitleProps) {
  return (
    <Container>
      <strong>{props.title}</strong>
      {props.children}
    </Container>
  );
}

export { LineTitle };
