/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/red-love.png')",
        "form-bg": "url('/images/form-bg.jpg')",
        "footer-bg": "url('/images/footer.jpg')",
      },
      colors: {
        "blood-red": "#C4342B",
        primary: "#FEBF00",
        "para-color": "#333333",
        cream: "#fbf7f2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
