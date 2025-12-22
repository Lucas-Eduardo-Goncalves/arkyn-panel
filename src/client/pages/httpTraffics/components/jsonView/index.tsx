import { CodeBlock } from "~/client/components/codeBlock";
import { Container } from "./styles";

type JsonViewProps = {
  title: string;
  data: string;
};

function JsonView(props: JsonViewProps) {
  const { title, data } = props;

  const hasDataPreview =
    data !== "null" &&
    data !== "{ }" &&
    data !== "{}" &&
    data !== "" &&
    data !== null &&
    data !== undefined;

  const formattedData = hasDataPreview
    ? JSON.stringify(JSON.parse(data), null, 2)
    : data;

  return (
    <Container>
      <strong>{title}</strong>

      {hasDataPreview && (
        <CodeBlock className="language-json" showHeader>
          {formattedData}
        </CodeBlock>
      )}

      {!hasDataPreview && <p>No data preview available.</p>}
    </Container>
  );
}

export { JsonView };
