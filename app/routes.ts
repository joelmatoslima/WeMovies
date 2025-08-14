import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout/index.tsx", [
    route("/", "./pages/home/index.tsx"),
  ]),
] satisfies RouteConfig;
