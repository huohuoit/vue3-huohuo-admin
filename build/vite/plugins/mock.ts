import { viteMockServe } from "vite-plugin-mock";

export function configMockPlugin(command) {
  const prodMock = true;
  return viteMockServe({
    mockPath: "mock",
    localEnabled: command === "serve", // 开发环境
    prodEnabled: command !== "serve" && prodMock, // 生产环境
    injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
    logger: false
  });
}
