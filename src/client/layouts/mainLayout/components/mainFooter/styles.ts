import { styled } from "@linaria/react";

const MainFooterContainer = styled.footer`
  background-color: #fff;
  border-top: 1px solid var(--border);
`;

const Content = styled.footer`
  display: flex;
  flex-direction: column;

  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 48px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 150px;
    margin-left: -12px;
  }

  strong {
    margin-top: 16px;
    font-weight: 600;
    font-size: 16px;
    color: var(--text-heading);
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: var(--text-body);
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 8px;
  }
`;

const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    strong {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 8px;
      color: var(--text-heading);
    }

    a {
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: var(--text-body);

      &:hover {
        text-decoration: underline;
        color: var(--text-heading);
      }
    }
  }
`;

const CodeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;

  code {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-body);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 16px;
    list-style: none;

    a svg {
      max-height: 20px;
      max-width: 20px;
      color: var(--text-body);

      &:hover {
        cursor: pointer;
        color: var(--text-heading);
      }
    }
  }
`;

export {
  CodeSection,
  NavSection,
  ImageContainer,
  ColumnsContainer,
  Content,
  MainFooterContainer,
};
