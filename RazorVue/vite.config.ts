import { defineConfig } from "vite"

export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js"
        }
    },
    define: {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true
    },

    server: {
        cors: true
    }
})