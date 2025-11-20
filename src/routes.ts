import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./main/routes/_index.ts"),
  
  layout("./main/routes/layout.signLayout.tsx", [ 
    route("sign-in", "./main/routes/route.signIn.tsx"),
    route("forgot-password", "./main/routes/route.forgotPassword.tsx"),
    route("forgot-password/:forgotPasswordToken", "./main/routes/route.changeForgotPassword.tsx"),
  ]),

  layout("./main/routes/layout.mainLayout.tsx", [
    route("home", "./main/routes/route.home.tsx"),
  ]),
] satisfies RouteConfig;