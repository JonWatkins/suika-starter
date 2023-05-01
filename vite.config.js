import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      outDir: "./dist",
    },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
    },
  };
});
