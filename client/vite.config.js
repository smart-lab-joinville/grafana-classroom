import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    port: 5512,
    host: true,
  },
  plugins: [
    vue({
      isProduction: false,
    }),
  ],
  appType: "spa",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./assets"),
    },
  },
});
