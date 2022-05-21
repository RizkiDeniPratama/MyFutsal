import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import axios from "axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

axios.defaults.baseURL = "http://localhost:3000/";

app.use(pinia);
app.use(router);

app.mount("#app");
