module.exports = {
  extends: [
    // 上書きさせたくないものを後に記載する
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-tailwindcss',
  ],
  customSyntax: "postcss-html",
  overrides: [
    {
      files: ["src/**/*.vue"],
      rules: {
        "selector-class-pattern": null,
        "selector-pseudo-class-no-unknown": null, // :deepエラー回避
      },
    },
  ],
};
