// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-500': '#3b82f6', // 青色の定義
        'white': '#ffffff',      // 白色
        'gray-100': '#f3f4f6',  // グレー
        // ... 他の使っている色もここに追加できます
      }
    },
  },
  plugins: [],
};