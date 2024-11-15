/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        celestials: "url('/image/celestials.png')",
        characters: "url('/image/characters.png')",
        hello: "url('/image/hello.png')",
        text: "url('/image/text.png')",
        "character-1": "url('/image/main-character.png')",
        "sound-bg-1": "url('/image/bg-sound-1.png')",
      },
    },
  },
  plugins: [],
};
