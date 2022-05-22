import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import GAuth from 'vue3-google-oauth2'

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const gAuthOptions = {
  clientId:
    "13231332826-1ju2tdkqjsrjm88useodabrjqa290dmi.apps.googleusercontent.com",
};
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

axios.defaults.baseURL = "http://localhost:3000/";

app.use(GAuth, gAuthOptions);
app.use(pinia);
app.use(router);

app.mount("#app");
