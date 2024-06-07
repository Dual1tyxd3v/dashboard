import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdHome,
  ViFileTypeConfig,
  BiMusicNote,
  BiYoutube,
  IoGameController,
} from "oh-vue-icons/icons";

addIcons(MdHome, ViFileTypeConfig, BiMusicNote, BiYoutube, IoGameController);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);

app.mount("#app");
