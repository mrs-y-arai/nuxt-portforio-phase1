/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwindを適用したいファイル群を指定
  content: [".src/**/*.{vue,js,ts,jsx,tsx}"],
  // 色の変数などを読み込む
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
