import "./styles/styles.less";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app.vue";
import { router } from "./providers/vue-router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
