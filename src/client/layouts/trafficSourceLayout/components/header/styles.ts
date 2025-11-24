import { styled } from "@linaria/react";

const Container = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;

  padding: 32px 32px 0 32px;

  .informationArea {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-weight: 600;
      font-size: 24px;
      line-height: 24px;
      color: var(--text-heading);
    }

    .informationGroup {
      display: flex;
      gap: 16px;

      .informationRow {
        display: flex;
        align-items: center;
        gap: 8px;

        svg {
          height: 14px;
          width: 14px;

          color: rgb(var(--spotlight-primary));
        }

        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0%;
        }
      }
    }
  }
`;

export { Container };
