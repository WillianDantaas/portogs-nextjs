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

        // Indigo
        indigo9: '#364FC7',
        indigo8: '#3B5BDB',
        indigo7: '#4263EB',
        indigo6: '#4C6EF5',
        indigo5: '#5C7CFA',
        indigo4: '#748FFC',
        indigo3: '#91A7FF',
        indigo2: '#BAC8FF',
        indigo1: '#DBE4FF',
        indigo0: '#EDF2FF',



        // Violet
        violet9: '#5F3DC4',
        violet8: '#6741D9',
        violet7: '#7048E8',
        violet6: '#7950F2',
        violet5: '#845EF7',
        violet4: '#9775FA',
        violet3: '#9775FA',
        violet2: '#B197FC',
        violet1: '#D0BFFF',
        violet0: '#F3F0FF',


        // gradient1 = violet5 > indigo9
        // grandient2 = violet9 > indigo5
        
        
        // Gray
        gray9: '#212529',
        gray8: '#343A40',
        gray7: '#495057',
        gray6: '#868E96',
        gray5: '#ADB5BD',
        gray4: '#CED4DA',
        gray3: '#DEE2E6',
        gray2: '#E9ECEF',
        gray1: '#F1F3F5',
        gray0: '#F8F9FA',
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
