// GlobalComponents for Volar
declare module "vue" {
  export interface GlobalComponents {
    IconifyIconOffline: typeof import("../src/components/ReIcon")["IconifyIconOffline"];
    IconifyIconOnline: typeof import("../src/components/ReIcon")["IconifyIconOnline"];
    FontIcon: typeof import("../src/components/ReIcon")["FontIcon"];
  }
}

declare global {
  declare type Recordable<T = any> = Record<string, T>;
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY_DOMAIN: string;
    VITE_PROXY_DOMAIN_REAL: string;
    VITE_ROUTER_HISTORY: string;
    VITE_LEGACY: boolean;
  }
}

type Nullable<T> = T | null;

export {};
