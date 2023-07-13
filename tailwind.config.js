/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    'node_modules/preline/dist/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    "fontFamily": {
      "lexend": "Lexend",
      sans: ["Inter", 'sans-serif']
     },

    extend: {
       "boxShadow": {
        "card-shadow": "0px 0px 0px 0px rgba(38,50,56,0.1), -1px 1px 3px 0px rgba(38,50,56,0.1), -2px 4px 5px 0px rgba(38,50,56,0.09), -5px 9px 6px 0px rgba(38,50,56,0.05), -9px 17px 8px 0px rgba(38,50,56,0.01), -15px 26px 8px 0px rgba(38,50,56,0)"
       },
    },
  },
}