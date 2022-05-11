export function createProxy(prefix, target) {
  return target.length > 0
    ? {
        [prefix]: {
          target: target, // 用Url模块解析的Url字符串
          // ws: true, //  如果你想代理websockets
          changeOrigin: true, // 将主机头的来源更改为目标URL
          rewrite: (path: string) => regExps(path, prefix)
        }
      }
    : null;
}

// 处理值为RegExp的情况
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(reg, "g"), "");
};
