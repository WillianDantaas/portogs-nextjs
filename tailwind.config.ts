import type { Config } from "tailwindcss";

const config: Config = {
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
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        indigo9: '#364FC7',
        indigo5: '#5C7CFA',
        violet9: '#5F3DC4',
        violet5: '#845EF7',
        // gradient1 = violet5 > indigo9
        // grandient2 = violet9 > indigo5
        
        // gray6: '#868E96',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
