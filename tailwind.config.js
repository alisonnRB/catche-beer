/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg" : "#181818",
        "motion" : "#363434",
        "subMotion" : "#242424",
        "redCustom" : "#991A1A",
        "greenCustom" : "#45B049", 
        "openGreen" : "#133A14",
        "subText" : "#B5B5B5"
      },
      fontFamily: {
        'sans': ["K2D", "sans-serif"],
      }
    },
  },
  plugins: [],
};
