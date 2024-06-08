import { defineStore } from "pinia";
import ConfigApi from "./configAPI";

export const useConfigStore = defineStore({
  id: "configStore",
  state: () => ({ ...ConfigApi.getConfig() }),
  getters: {
    
  }
});
