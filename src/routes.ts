import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./main/routes/_index.ts"),
  
  layout("./main/routes/layout.signLayout.tsx", [ 
    route("sign-in", "./main/routes/route.signIn.tsx"),
    route("forgot-password", "./main/routes/route.forgotPassword.tsx"),
    route("forgot-password/:forgotPasswordToken", "./main/routes/route.changeForgotPassword.tsx"),
  ]),

  layout("./main/routes/layout.mainLayout.tsx", [
    route("traffic-sources", "./main/routes/route.trafficSources.tsx"),

    route("traffic-sources/:trafficSourceId", "./main/routes/layout.trafficSourceLayout.tsx", [
      index("./main/routes/route.home.tsx"),
      route("domains", "./main/routes/route.domains.tsx"),
      route("domains/:domainId/pathnames", "./main/routes/route.pathnames.tsx"),
    ]),
  ]),
] satisfies RouteConfig;