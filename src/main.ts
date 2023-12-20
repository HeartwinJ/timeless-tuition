import "./assets/tailwind.css";

import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import formkitConfig from "./formkit/formkit.config";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig(formkitConfig()));

app.mount("#app");
