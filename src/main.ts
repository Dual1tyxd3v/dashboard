import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdHome, ViFileTypeConfig } from "oh-vue-icons/icons";

addIcons(MdHome, ViFileTypeConfig);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);

app.mount("#app");
