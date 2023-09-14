/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}", "./*html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
      colors: {
        custom: {
          blue: "#0079FF",
          gray: "#697C9A",
          "blue-gray": "#4B6A9B",
          "dark-gray": "#2B3442",
          "very-light-gray": "#F6F8FF",
          "super-light-gray": "#FEFEFE",
          white: "#FFFFFF",
          "allmost-black": "#141D2F",
          "very-dark-blue": "#1E2A47",
          "darkest-one": "#2B3442",
        },
      },
      boxShadow: {
        "custom-search": "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
        "custom-result": "0px 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },
  },
  plugins: [],
}
