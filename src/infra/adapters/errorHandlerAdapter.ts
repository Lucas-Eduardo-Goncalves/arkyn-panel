import { errorHandler } from "@arkyn/server";

class ErrorHandlerAdapter {
  static handle(error: any) {
    console.log(error);
    return errorHandler(error);
  }
}

export { ErrorHandlerAdapter };
