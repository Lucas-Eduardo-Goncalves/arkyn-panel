import { styled } from "@linaria/react";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 32px;
  margin: 32px;
  gap: 24px;

  border: solid 1px var(--border);
  border-radius: 8px;
  background-color: var(--background-foreground);
`;

export { Container };
