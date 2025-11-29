import { Badge } from "@arkyn/components";

const methodBadge = {
  get: <Badge scheme="success">get</Badge>,
  post: <Badge scheme="warning">post</Badge>,
  put: <Badge scheme="info">put</Badge>,
  delete: <Badge scheme="danger">delete</Badge>,
  patch: <Badge scheme="primary">patch</Badge>,
};

export { methodBadge };
