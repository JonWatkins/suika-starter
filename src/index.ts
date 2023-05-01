import "./style.scss";
import { mount } from "suika";
import { App } from "./App";

const el = document.querySelector("#app");
mount(App, el as HTMLElement);
