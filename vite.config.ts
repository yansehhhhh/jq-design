import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import styleImport, { VantResolve } from "vite-plugin-style-import"; //按需引入
import viteCompression from "vite-plugin-compression"; // gzip
import envConfig from "./config/index"; // 环境变量
const env = process.argv[process.argv.length - 1];
console.log("当前环境:: ", env);
const nowEnv = ["build"].indexOf(env) > -1 ? envConfig["prod"] : envConfig[env];
export default defineConfig({
  plugins: [
    vue(),
    // 50+ chrome内核兼容
    legacy({
      targets: [
        "Android > 39",
        "Chrome >= 50",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ],
    }),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `../es/${name}/style`,
        },
      ],
    }),
    // gzip压缩
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "/@assets": resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    minify: "terser", //代码混淆terser：文件体积更小，速度慢；esbuild：文件体积更大，速度快
    // 清除console等多余代码
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name]-[hash].js", //分类输出
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/img/[name]-[hash][extname]";
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 超大静态资源拆分
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    assetsInlineLimit: 4096 << 2,
  },
  server: {
    host: "0.0.0.0",
    open: false,
    https: false,
    port: nowEnv.port,
    cors: true,
    proxy: nowEnv.domain,
    hmr: {
      overlay: false,
    },
  },
});
