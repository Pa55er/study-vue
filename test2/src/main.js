import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// bootstrap 5 추가
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import router from "./router.js";

// createApp(App).mount("#app");
const app = createApp(App);
app.use(router);
app.mount("#app");
