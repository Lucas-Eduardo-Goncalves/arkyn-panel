import { ApiService } from "@arkyn/server";
import { environmentVariables } from "~/main/config/environmentVariables";

const authMicroservice = new ApiService({
  baseUrl: `${environmentVariables.MICRO_AUTH_URL}`,
  enableDebug: process.env.NODE_ENV === "development",
});

export { authMicroservice };
