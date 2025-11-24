type WebhookConstructorProps = {
  id: string;
  value: string;
  level: "info" | "warning" | "fatal";
  type: "discord";
  trafficSourceId: string;
  createdAt: string;
  updatedAt: string;
};

type WebhookRestoreProps = WebhookConstructorProps;

class Webhook {
  id: string;
  value: string;
  level: "info" | "warning" | "fatal";
  type: "discord";
  trafficSourceId: string;
  createdAt: string;
  updatedAt: string;

  private constructor(props: WebhookConstructorProps) {
    this.id = props.id;
    this.value = props.value;
    this.level = props.level;
    this.type = props.type;
    this.trafficSourceId = props.trafficSourceId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: WebhookRestoreProps): Webhook {
    return new Webhook({
      id: props.id,
      value: props.value,
      level: props.level,
      type: props.type,
      trafficSourceId: props.trafficSourceId,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      value: this.value,
      level: this.level,
      type: this.type,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { Webhook };
