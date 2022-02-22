import { resolve } from "path";
import { defineConfig } from "vite";
import viteStylelint from "@amatlash/vite-plugin-stylelint";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  publicDir: "../public",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        conferences: resolve(root, "conferences.html"),
        equipe: resolve(root, "equipe.html"),
      },
    },
  },
  plugins: [
    viteStylelint({
      include: ["**/*.css"],
    }),
  ],
});
