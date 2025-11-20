import { styled } from "@linaria/react";

const Container = styled.div`
  padding: 16px;

  border: 1px solid var(--border);
  border-radius: 8px;
  background-color: var(--background-foreground);

  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: var(--text-heading);
  }

  .domain {
    margin-top: 16px;

    display: flex;
    flex-direction: column;

    small {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: var(--text-muted);
    }

    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: var(--text-body);
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;

      &:hover {
        color: rgb(var(--spotlight-primary));
        text-decoration: underline;
      }
    }
  }

  .stats {
    margin-top: 16px;
    margin-bottom: 16px;

    display: flex;
    align-items: center;
    gap: 12px;

    div {
      display: flex;
      align-items: center;
      gap: 4px;

      strong {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;

        &.success {
          color: rgb(var(--spotlight-success));
        }

        &.danger {
          color: rgb(var(--spotlight-danger));
        }
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: var(--text-muted);
      }
    }
  }

  > .arkynDivider {
    margin-top: auto;
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 8px;

    > :first-child {
      margin-right: auto;
    }
  }
`;

export { Container };
