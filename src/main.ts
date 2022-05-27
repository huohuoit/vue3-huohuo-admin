import App from "./App.vue";
import router from "./router";
import { setupStore } from "/@/store";
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import ElementPlus from "element-plus";
import { registerGlobComp } from "/@/components/registerGlobComp";

import "element-plus/dist/index.css";
import "virtual:windi.css";

const app = createApp(App);

// Configure store
setupStore(app);

// Register global components
registerGlobComp(app);

app.use(router).use(MotionPlugin).use(ElementPlus);
app.mount("#app");
