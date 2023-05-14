/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwindを適用したいファイル群を指定
  content: [
    ".src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/features/**/*.{vue,js,ts,jsx,tsx}",
    "./src/layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // 色の変数などを読み込む
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondPrimary: "var(--secondPrimary)",
        black: "var(--black)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
