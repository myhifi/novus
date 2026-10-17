/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md}": ["prettier --write"],
};

export default config;
