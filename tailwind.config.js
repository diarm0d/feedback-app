/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        gradient:
          "linear-gradient(91.08deg, rgb(227, 236, 251) -3.34%, rgb(243, 216, 243) 25.84%, rgb(205, 241, 236) 50.99%, rgb(243, 216, 243) 70%, rgb(227, 236, 251) 105.99%)",
      },
    },
  },
  plugins: [],
};
