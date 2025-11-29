import { styled } from "@linaria/react";

const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 900px;
  max-width: 900px;

  padding: 32px;
  gap: 32px;
`;

const HeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;

  border: 1px solid var(--border);
  border-radius: 8px;

  strong {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-body);
    font-weight: 600;
  }

  > :nth-child(even) {
    background-color: var(--card-foreground-secondary);
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    p {
      padding: 4px;
      font-family: "Fira Code", monospace;
      font-size: 12px;
      line-height: 12px;
      color: var(--text-body);
      max-width: 350px;
      word-break: break-all;
      overflow-wrap: break-word;
    }
  }
`;

export { DrawerContent, HeadersContainer };
