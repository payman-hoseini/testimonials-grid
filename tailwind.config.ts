import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Moderate-violet": "hsl(263, 55%, 52%)",
        "Very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "Very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        "Light-gray": "hsl(0, 0%, 81%)",
        "Light-grayish-blue": "hsl(210, 46%, 95%)"
      },
      fontFamily : {
        Barlow : ["Barlow"]
      }
    },
  },
  plugins: [],
};
export default config;
