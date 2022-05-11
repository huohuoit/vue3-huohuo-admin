import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";

// 引入其他需要做额外配置的插件
import { configLegacyPlugin } from "./legacy";

export function createVitePlugins(VITE_LEGACY) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 直接引入的配置
    vue()
  ];
  // 需要做额外配置的插件
  vitePlugins.push(configLegacyPlugin(VITE_LEGACY));

  return vitePlugins;
}
