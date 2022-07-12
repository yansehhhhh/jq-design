module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser", // ++ vue代码相关配置
  extends: [
    "plugin:vue/essential",
    "standard",
    "plugin:prettier/recommended", //++ prettier配置
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
    "@vue/prettier", // ++ prettier配置
  ],
  rules: {
    "vue/multi-word-component-names": 0, // ++ 关闭.vue文件必须是大驼峰命名的校验
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
      },
    ],
  },
};
