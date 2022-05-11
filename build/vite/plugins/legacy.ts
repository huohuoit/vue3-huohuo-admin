import legacy from "@vitejs/plugin-legacy";

export function configLegacyPlugin(VITE_LEGACY) {
  return VITE_LEGACY
    ? legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
      })
    : null;
}
