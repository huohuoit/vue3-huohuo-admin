import { resolve } from "path";
import { wrapperEnv } from "./build/utils";
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import { createProxy } from "./build/vite/proxy";
import { createVitePlugins } from "./build/vite/plugins";

// 当前执行node命令时文件夹的地址（工作目录）
const root: string = process.cwd();

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// 设置别名
const alias: Record<string, string> = {
  "/@": pathResolve("src"),
  "@build": pathResolve("build")
};

export default ({ mode }: ConfigEnv): UserConfigExport => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, root);
  // env中所有值都是string类型，处理需要兼容其他类型的情况。并提取需要的环境变量
  const {
    VITE_PORT,
    VITE_LEGACY,
    VITE_PUBLIC_PATH,
    VITE_PROXY_DOMAIN,
    VITE_PROXY_DOMAIN_REAL
  } = wrapperEnv(env);
  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias
    },
    server: {
      https: false,
      port: VITE_PORT,
      host: "0.0.0.0",
      proxy: createProxy(VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL)
    },
    plugins: createVitePlugins(VITE_LEGACY),
    optimizeDeps: {
      include: [],
      exclude: []
    },
    build: {
      sourcemap: false,
      brotliSize: false,
      chunkSizeWarningLimit: 4000
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false
    }
  };
};
