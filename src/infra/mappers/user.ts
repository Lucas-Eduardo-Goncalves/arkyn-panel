import { User } from "~/domain/entities/user";
import type { ExternalUser } from "../schemas/external/user";

class UserMapper {
  static toEntity(externalUser: ExternalUser) {
    return User.restore({
      id: externalUser.id,
      name: externalUser.name,
      avatarUrl: externalUser.avatarUrl,
      email: externalUser.email,
      createdAt: externalUser.createdAt,
      updatedAt: externalUser.updatedAt,
      role: externalUser.role,
      utc: externalUser.utc,
    });
  }
}

export { UserMapper };
