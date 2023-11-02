/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/preline/dist/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
};
