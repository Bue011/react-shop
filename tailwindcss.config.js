/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Phải có dòng này để Tailwind quét trúng file code của bạn
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}