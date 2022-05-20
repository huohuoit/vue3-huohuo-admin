import App from "./App.vue";
import router from "./router";
import { setupStore } from "/@/store";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "virtual:windi.css";

const app = createApp(App);
// Configure store
setupStore(app);
app.use(router).use(MotionPlugin).use(ElementPlus);
app.mount("#app");
