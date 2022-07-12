module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      maxWidth: {
        '16': '16rem',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
