import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/app/**/*.tsx",
    "./src/app/**/*.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {

      },
    },
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif']
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
};

export default config;
