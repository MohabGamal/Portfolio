/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e060f", // 050816
        secondary: "#f4eef7", //aaa6c3
        tertiary: "#23142c", //151030
        pinkish: "#d03966",
        "black-100": "#1c1023",
        "black-200": "#9f4c6e",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('assets/hero.png')",
        explosion: "url('assets/suspense.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
