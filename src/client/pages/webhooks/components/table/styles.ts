import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  p.code {
    font-family: "Fira Code", monospace;
    width: min-content;
    white-space: nowrap;
    background-color: var(--border);
    padding: 4px 6px;
    border-radius: 4px;
  }
`;

export { Container };
