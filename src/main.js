import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import AuthCard from "./components/ui/AuthCard.vue";
import BaseInput from "./components/ui/BaseInput.vue";

const app = createApp(App);

app.component("AuthCard", AuthCard);
app.component("BaseInput", BaseInput);
app.use(router);
app.mount("#app");
