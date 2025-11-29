type HttpTrafficConstructorProps = {
  id: string;
  status: number;
  method: "get" | "post" | "put" | "delete" | "patch";
  level: "info" | "warning" | "fatal";
  elapsedTime: number;
  trafficUserId: string | null;
  trafficSourceId: string;
  domainId: string;
  pathnameId: string;
  requestId: string;
  responseId: string;
  createdAt: string;
};

type HttpTrafficRestoreProps = HttpTrafficConstructorProps;

class HttpTraffic {
  id: string;
  status: number;
  method: "get" | "post" | "put" | "delete" | "patch";
  level: "info" | "warning" | "fatal";
  elapsedTime: number;
  trafficUserId: string | null;
  trafficSourceId: string;
  domainId: string;
  pathnameId: string;
  requestId: string;
  responseId: string;
  createdAt: string;

  private constructor(props: HttpTrafficConstructorProps) {
    this.id = props.id;
    this.status = props.status;
    this.method = props.method;
    this.level = props.level;
    this.elapsedTime = props.elapsedTime;
    this.trafficUserId = props.trafficUserId;
    this.trafficSourceId = props.trafficSourceId;
    this.domainId = props.domainId;
    this.pathnameId = props.pathnameId;
    this.requestId = props.requestId;
    this.responseId = props.responseId;
    this.createdAt = props.createdAt;
  }

  static restore(props: HttpTrafficRestoreProps): HttpTraffic {
    return new HttpTraffic({
      id: props.id,
      status: props.status,
      method: props.method,
      level: props.level,
      elapsedTime: props.elapsedTime,
      trafficUserId: props.trafficUserId,
      trafficSourceId: props.trafficSourceId,
      domainId: props.domainId,
      pathnameId: props.pathnameId,
      requestId: props.requestId,
      responseId: props.responseId,
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
      domainId: this.domainId,
      pathnameId: this.pathnameId,
      requestId: this.requestId,
      responseId: this.responseId,
      createdAt: this.createdAt,
    };
  }
}

export { HttpTraffic };
