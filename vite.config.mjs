import { defineConfig } from "vite";

export default defineConfig({
    root: "html",

    publicDir: "../public",

    build: {
        outDir: "../dist",
        emptyOutDir: true
    }
});