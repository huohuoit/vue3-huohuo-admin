import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import windiCSS from "vite-plugin-windicss";

// 引入其他需要做额外配置的插件
import { configLegacyPlugin } from "./legacy";

export function createVitePlugins(VITE_LEGACY) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 直接引入的配置
    vue()
  ];

  // vite-plugin-windicss
  vitePlugins.push(windiCSS());

  // 需要做额外配置的插件
  vitePlugins.push(configLegacyPlugin(VITE_LEGACY));

  return vitePlugins;
}
