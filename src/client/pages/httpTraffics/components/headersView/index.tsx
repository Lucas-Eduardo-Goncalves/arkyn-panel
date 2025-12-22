import { Container } from "./styles";

type HeadersViewProps = {
  title: string;
  data: string;
};

function HeadersView(props: HeadersViewProps) {
  const { data, title } = props;
  const headers = Object.entries(JSON.parse(data));

  return (
    <Container>
      <strong>{title}</strong>

      <ul>
        {headers.map(([key, value]) => (
          <li key={key}>
            <p>{key}</p>
            <p>{String(value)}</p>
          </li>
        ))}
      </ul>

      {headers.length <= 0 && <p>No data preview available.</p>}
    </Container>
  );
}

export { HeadersView };
