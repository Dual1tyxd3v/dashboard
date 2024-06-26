import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as Icons from "oh-vue-icons/icons";
import { createPinia } from "pinia";

const AllIcons = Object.values({ ...Icons });

addIcons(...AllIcons);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);
app.use(createPinia());

app.mount("#app");
