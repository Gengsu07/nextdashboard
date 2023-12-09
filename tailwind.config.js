/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        start: "#182237",
        end: "#253352",
      },
      backgroundImage: {
        linear_gradient: "linear-gradient(to top, #182237, #253352)",
      },
    },
  },
  plugins: [],
};
