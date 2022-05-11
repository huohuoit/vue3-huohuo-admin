import { UserConfigExport, ConfigEnv, loadEnv } from "vite";

// vite.config.ts
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const root: string = process.cwd();
  const env = loadEnv(mode, root);
  return {
    // 配置项
  };
};
