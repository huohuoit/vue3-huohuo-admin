import { App } from "vue";
import reQrcode from "./src/index";

/** 二维码组件 */
export const ReQrcode = Object.assign(reQrcode, {
  install(app: App) {
    app.component(reQrcode.name, reQrcode);
  }
});

export default ReQrcode;
