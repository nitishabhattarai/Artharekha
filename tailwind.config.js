/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        primary:'#ed1b24',
        secondary:'#525252',
        'section-bg': '#00000008',
        border:'#d5d5d5',
        author:'#7b5a5a'
      }
    },
  },
  plugins: [],
};
