import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "lis-", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "var(--lis-color-night)",
        primary: "var(--lis-color-primary)",
        accent: "var(--lis-color-accent)",
        soft: "var(--lis-color-soft)",
        white: "var(--lis-color-white)",
        neutral: "var(--lis-color-neutral)",
      },
    },
  },
  plugins: [],
};
export default config;