import { createRouter } from "suika-router";
import { Home } from "./Home";

export const router = createRouter({
  mode: "hash",
  routes: [
    { path: "/", component: Home },
  ]
})
