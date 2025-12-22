import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  strong {
    font-size: 14px;
    line-height: 20px;
    color: var(--text-body);
    font-weight: 600;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;

    > :nth-child(even) {
      background-color: var(--card-foreground-secondary);
    }

    li {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      > p {
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
  }

  > p {
    padding: 4px;
    font-family: "Fira Code", monospace;
    font-size: 12px;
    line-height: 12px;
    color: var(--text-body);
    max-width: 350px;
    word-break: break-all;
    overflow-wrap: break-word;
  }
`;

export { Container };
