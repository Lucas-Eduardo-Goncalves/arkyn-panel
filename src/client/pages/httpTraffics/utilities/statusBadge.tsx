import { Badge } from "@arkyn/components";

function statusBadge(status: number) {
  if (status >= 200 && status < 400) {
    return <Badge scheme="success">{status}</Badge>;
  } else if (status >= 400 && status < 500) {
    return <Badge scheme="warning">{status}</Badge>;
  } else {
    return <Badge scheme="danger">{status}</Badge>;
  }
}

export { statusBadge };
