import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/main-layout/index.tsx", [
    route("/", "./pages/home/home.tsx"),
    route("/cart", "./pages/cart/index.tsx"),
    route("/success", "./pages/success/success.tsx"),
  ]),
] satisfies RouteConfig;
