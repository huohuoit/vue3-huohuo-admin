// 全局注册的组件
import type { App } from "vue";
import { withInstall } from "/@/utils/withInstall";
import iconifyIconOffline from "./ReIcon/src/iconifyIconOffline";
import iconifyIconOnline from "./ReIcon/src/iconifyIconOnline";
import fontIcon from "./ReIcon/src/iconfont";

export const IconifyIconOffline = withInstall(iconifyIconOffline);

export const IconifyIconOnline = withInstall(iconifyIconOnline);

export const FontIcon = withInstall(fontIcon);

export function registerGlobComp(app: App) {
  app.use(IconifyIconOffline).use(IconifyIconOnline).use(FontIcon);
}
