/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
      brand: {
        red: "#BD2F2B",   // primary deep red
        orange: "#F16A2C" // secondary warm orange
      },
      // complimentary palette
      brandAccent: {
        yellow: "#F5C542", // vibrant gold/yellow for highlights
        teal: "#1E9FA3",   // teal to balance warmth with cool
        blue: "#2B6CB0",   // deep blue for trust & contrast
      },
      brandNeutral: {
        50:  "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        700: "#374151",
        900: "#111827"
      },
    },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px"
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
};
