type UserConstructorProps = {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  utc: number;
  role: "user";
  createdAt: string;
  updatedAt: string;
};

type UserRestoreProps = UserConstructorProps;

class User {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  utc: number;
  role: "user";
  createdAt: string;
  updatedAt: string;

  private constructor(props: UserConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.avatarUrl = props.avatarUrl;
    this.email = props.email;
    this.utc = props.utc;
    this.role = props.role;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static restore(props: UserRestoreProps): User {
    return new User({
      id: props.id,
      name: props.name,
      avatarUrl: props.avatarUrl,
      email: props.email,
      utc: props.utc,
      role: props.role,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      avatarUrl: this.avatarUrl,
      email: this.email,
      utc: this.utc,
      role: this.role,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export { User };
