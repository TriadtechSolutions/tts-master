/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/custom/tts/**/*.twig",
    "./web/themes/custom/tts/**/*.twig",
    "./**/*.twig",
  ],
  
  // All classes will have ts- prefix
  prefix: 'ts-',
  
  theme: {
    extend: {},
  },
  plugins: [],
}