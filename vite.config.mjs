import { defineConfig } from "vite";

export default defineConfig({
    root: "html",

    base: "./",

    publicDir: "../public",

    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});