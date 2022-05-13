import App from "./App.vue";
import router from "./router";
import { setupStore } from "/@/store";
import { createApp } from "vue";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";

const app = createApp(App);
// Configure store
setupStore(app);
app.use(router).use(ElementPlus);
app.mount("#app");
