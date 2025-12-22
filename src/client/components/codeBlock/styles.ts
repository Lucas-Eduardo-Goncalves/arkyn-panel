import { styled } from "@linaria/react";

const InlineBlockContainer = styled.code`
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 4px;
  font-family: "Fira Code", "Menlo", "Ubuntu Mono", monospace;
  font-size: 0.9em;
  color: rgb(var(--spotlight-primary));
  white-space: nowrap;
`;

const BlockContainer = styled.div`
  background-color: var(--card-foreground-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: auto;
`;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 24px;
  border-bottom: 1px solid var(--border);

  p {
    font-size: 14px;
    color: var(--text-muted);
  }

  button {
    border: 1px solid var(--border);
    background: transparent;

    padding: 4px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 16px;
      width: 16px;
      color: var(--text-muted);
    }

    &:hover {
      background-color: var(--border);
    }
  }
`;

const BlockContent = styled.pre`
  padding: 24px;
  overflow: auto;

  * {
    font-family: "Fira Code", monospace;
    font-size: 12px;
    line-height: 12px;
    color: var(--text-body);
    max-width: 350px;
    word-break: break-all;
    overflow-wrap: break-word;
  }
`;

export { InlineBlockContainer, BlockHeader, BlockContent, BlockContainer };
