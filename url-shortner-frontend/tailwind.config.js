/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #3b82f6, #9333ea)",
        "custom-gradient-2": "linear-gradient(to left, #3b82f6, #f43f5e)",
        "card-gradient": "linear-gradient(to right, #38b2ac, #4299e1)",
      },
      colors: {
          background: "#0f172a",         // dark background
          surface: "#1e293b",            // surface containers
          primary: "#219ebc",            // blue-green
          secondary: "#8ecae6",          // sky blue
          accent: "#ffb703",             // yellow-orange contrast
          textPrimary: "#f8fafc",        // whiteish
          textSecondary: "#94a3b8",      // slate
          error: "#ef4444",
          borderColor: "#334155",
          success: "#10b981",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};





