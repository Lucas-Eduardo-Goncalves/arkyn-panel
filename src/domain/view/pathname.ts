type PathnameConstructorProps = {
  id: string;
  value: string;
  domainId: string;
  trafficSourceId: string;
  createdAt: string;
};

type PathnameRestoreProps = PathnameConstructorProps;

class Pathname {
  id: string;
  value: string;
  domainId: string;
  trafficSourceId: string;
  createdAt: string;

  private constructor(props: PathnameConstructorProps) {
    this.id = props.id;
    this.value = props.value;
    this.domainId = props.domainId;
    this.trafficSourceId = props.trafficSourceId;
    this.createdAt = props.createdAt;
  }

  static restore(props: PathnameRestoreProps): Pathname {
    return new Pathname({
      id: props.id,
      value: props.value,
      domainId: props.domainId,
      trafficSourceId: props.trafficSourceId,
      createdAt: props.createdAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      value: this.value,
      createdAt: this.createdAt,
    };
  }
}

export { Pathname };
