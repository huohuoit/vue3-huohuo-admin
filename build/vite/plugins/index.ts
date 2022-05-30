import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import windiCSS from "vite-plugin-windicss";
import svgLoader from "vite-svg-loader";
import vueJsx from "@vitejs/plugin-vue-jsx";
import DefineOptions from "unplugin-vue-define-options/vite";

// 引入其他需要做额外配置的插件
import { configLegacyPlugin } from "./legacy";
import { configMockPlugin } from "./mock";

export function createVitePlugins(command, VITE_LEGACY) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 直接引入的配置
    vue(),
    // jsx、tsx语法支持
    vueJsx()
  ];

  // vite-plugin-windicss
  vitePlugins.push(windiCSS());

  // vite-plugin-mock
  vitePlugins.push(configMockPlugin(command));

  // svg组件化支持
  vitePlugins.push(svgLoader());

  // unplugin-vue-define-options
  vitePlugins.push(DefineOptions());

  // 需要做额外配置的插件
  vitePlugins.push(configLegacyPlugin(VITE_LEGACY));

  return vitePlugins;
}
