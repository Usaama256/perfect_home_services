import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import envCompatible from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      //https://www.npmjs.com/package/vite-plugin-node-polyfills
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
    react(),
    envCompatible,
  ],
  resolve: {
    alias: [
      {
        find: "common",
        replacement: path.resolve(__dirname, "src/common"),
      },
    ],
  },
  server: {
    port: 1682,
  },
});
