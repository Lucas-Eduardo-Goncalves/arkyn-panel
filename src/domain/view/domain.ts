type DomainConstructorProps = {
  id: string;
  value: string;
  protocol: "https" | "http";
  trafficSourceId: string;
  createdAt: string;
};

type DomainRestoreProps = DomainConstructorProps;

class Domain {
  id: string;
  value: string;
  protocol: "https" | "http";
  trafficSourceId: string;
  createdAt: string;

  private constructor(props: DomainConstructorProps) {
    this.id = props.id;
    this.value = props.value;
    this.protocol = props.protocol;
    this.trafficSourceId = props.trafficSourceId;
    this.createdAt = props.createdAt;
  }

  static restore(props: DomainRestoreProps): Domain {
    return new Domain({
      id: props.id,
      value: props.value,
      protocol: props.protocol,
      trafficSourceId: props.trafficSourceId,
      createdAt: props.createdAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      value: this.value,
      protocol: this.protocol,
      trafficSourceId: this.trafficSourceId,
      createdAt: this.createdAt,
    };
  }
}

export { Domain };
