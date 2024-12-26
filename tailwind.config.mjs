/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./sections/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        description: "#52514e",
        sandstorm: "#f7cb45",
        coal: "#252424",
      },
    },
  },
  safelist: ["bg-fuchsia-400", "bg-sky-400", "bg-red-400", "bg-green-400", "bg-lime-400"],
  plugins: [],
};
