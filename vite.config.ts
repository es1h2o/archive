import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: "./docs",
    },
    base: "https://es1h2o.github.io/archive/",
});
