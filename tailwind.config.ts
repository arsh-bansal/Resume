import type { Config } from "tailwindcss";

/* Tailwind is kept for incidental spacing only. All identity — color,
   type, layout — lives in app/site.css as real CSS. */
const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
export default config;
