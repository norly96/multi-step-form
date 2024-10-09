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
        marineBlue: "var(--marineBlue)",
        purplishBlue: "var(--purplishBlue)",
        pastelBlue: "var(--pastelBlue)",
        lightBlue: "var(--lightBlue)",
        strawberryRed: "var(--strawberryRed)",
        coolGray: "var(--coolGray)",
        lightGray: "var(--lightGray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
      },
    },
  },
  plugins: [],
};
export default config;
