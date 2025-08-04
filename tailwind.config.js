module.exports = {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
