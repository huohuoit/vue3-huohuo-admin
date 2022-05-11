// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
  // 此处为默认值，无需修改
  const ret: ViteEnv = {
    VITE_PORT: 7755,
    VITE_PUBLIC_PATH: "",
    VITE_PROXY_DOMAIN: "",
    VITE_PROXY_DOMAIN_REAL: "",
    VITE_ROUTER_HISTORY: "",
    VITE_LEGACY: false
  };
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName =
      realName === "true" ? true : realName === "false" ? false : realName;

    if (envName === "VITE_PORT") {
      realName = Number(realName);
    }
    ret[envName] = realName;
    if (typeof realName === "string") {
      process.env[envName] = realName;
    } else if (typeof realName === "object") {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  return ret;
}
