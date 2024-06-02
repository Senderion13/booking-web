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
        white: "#fff",
        steelblue: {
          "100": "#4d8fc3",
          "200": "#305776",
        },
        seashell: "#fff3eb",
        black: "#000",
        gray: "#081012",
        rosybrown: {
          100: "#e0ab9a",
          200: "#ad7866",
        },
      },
      spacing: {},
      fontFamily: {
        namu: "NAMU",
        inter: "Inter",
      },
    },
    fontSize: {
      "5xl": "1.5rem",
      lgi: "1.188rem",
      base: "1rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      lg: "1.125rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
};
export default config;
