import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    // bootstrap 5 추가
    resolve: {
        alias: {
            "@popperjs/core": "@popperjs/core/lib/index.js",
        },
    },
});
