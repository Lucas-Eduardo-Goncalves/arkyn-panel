type TrafficSourceConstructorProps = {
  id: string;
  name: string;
  trafficDomain: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type TrafficSourceRestoreProps = TrafficSourceConstructorProps;

class TrafficSource {
  id: string;
  name: string;
  trafficDomain: string;
  userId: string;
  createdAt: string;
  updatedAt: string;

  private constructor(props: TrafficSourceConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.trafficDomain = props.trafficDomain;
    this.userId = props.userId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: TrafficSourceRestoreProps): TrafficSource {
    return new TrafficSource({
      id: props.id,
      name: props.name,
      trafficDomain: props.trafficDomain,
      userId: props.userId,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      trafficDomain: this.trafficDomain,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { TrafficSource };
