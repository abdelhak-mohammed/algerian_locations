import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "AlgeriaLocations",
      fileName: "index",
    },
  },
});