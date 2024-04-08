/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          // 自定义动画名称
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite", // 使用自定义动画
      },
    },
    fontFamily: {
      reem: ["Reem Kufi Fun", "sans-serif"],
      IBM: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
