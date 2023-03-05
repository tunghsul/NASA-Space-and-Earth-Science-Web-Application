import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App).use(router);
app.use(VueAxios, axios).provide("axios", app.config.globalProperties.axios);
app.mount("#app");
