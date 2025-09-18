/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // everything inside src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // if you also have an app/ at root
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["var(--font-albert-sans)", "sans-serif"]      },
    },
  },
  plugins: [],
};
