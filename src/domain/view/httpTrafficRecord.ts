type Request = {
  headers: string;
  bodyPreview: string;
  bodyUrl: string;
  queryParams: string;
  createdAt: string;
};

type Response = {
  headers: string;
  bodyPreview: string;
  bodyUrl: string;
  createdAt: string;
};

type HttpTrafficRecordConstructorProps = {
  id: string;
  status: number;
  method: "get" | "post" | "put" | "delete" | "patch";
  level: "info" | "warning" | "fatal";
  protocol: "http" | "https";
  elapsedTime: number;
  trafficUserId: string | null;
  trafficSourceId: string;
  domain: string;
  pathname: string;
  request: Request;
  response: Response;
  createdAt: string;
};

type HttpTrafficRecordRestoreProps = HttpTrafficRecordConstructorProps;

class HttpTrafficRecord {
  id: string;
  status: number;
  method: "get" | "post" | "put" | "delete" | "patch";
  level: "info" | "warning" | "fatal";
  protocol: "http" | "https";
  elapsedTime: number;
  trafficUserId: string | null;
  trafficSourceId: string;
  domain: string;
  pathname: string;
  request: Request;
  response: Response;
  createdAt: string;

  private constructor(props: HttpTrafficRecordConstructorProps) {
    this.id = props.id;
    this.status = props.status;
    this.method = props.method;
    this.level = props.level;
    this.elapsedTime = props.elapsedTime;
    this.protocol = props.protocol;
    this.trafficUserId = props.trafficUserId;
    this.trafficSourceId = props.trafficSourceId;
    this.domain = props.domain;
    this.pathname = props.pathname;
    this.request = props.request;
    this.response = props.response;
    this.createdAt = props.createdAt;
  }

  static restore(props: HttpTrafficRecordRestoreProps): HttpTrafficRecord {
    return new HttpTrafficRecord({
      id: props.id,
      status: props.status,
      method: props.method,
      level: props.level,
      protocol: props.protocol,
      elapsedTime: props.elapsedTime,
      trafficUserId: props.trafficUserId,
      trafficSourceId: props.trafficSourceId,
      domain: props.domain,
      pathname: props.pathname,
      request: props.request,
      response: props.response,
      createdAt: props.createdAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      status: this.status,
      method: this.method,
      level: this.level,
      elapsedTime: this.elapsedTime,
      trafficUserId: this.trafficUserId,
      trafficSourceId: this.trafficSourceId,
      protocol: this.protocol,
      domain: this.domain,
      pathname: this.pathname,
      request: this.request,
      response: this.response,
      createdAt: this.createdAt,
    };
  }
}

export { HttpTrafficRecord };
