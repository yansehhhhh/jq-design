export default {
  dev: {
    domain: {
      // java 服务统一地址
      "/api-gk/": {
        target: "https://beta.zgjys.com/api-gk/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-gk/, ""),
      },
    },
    port: 3000,
  },
  test: {
    domain: {
      // java 服务统一地址
      "/api-gk/": {
        target: "https://alpha.zgjys.com/api-gk/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-gk/, ""),
      },
    },
    port: 3000,
  },
  prod: {
    domain: {
      // java 服务统一地址
      "/api-gk/": {
        target: "https://m.zgjys.com/api-gk/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-gk/, ""),
      },
    },
    port: 3000,
  },
};
