const TailwindRtl = require(`tailwindcss-rtl`);

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const tailwindConfig = {
  mode: `jit`,
  purge: [
    `./pages/**/*.{js,ts,jsx,tsx}`,
    `./src/components/**/*.{js,ts,jsx,tsx}`,
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [TailwindRtl],
};

module.exports = tailwindConfig;
