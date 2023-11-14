import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 전역 CSS 파일 import
// import "./assets/css/globals.css";
// import "./assets/css/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
