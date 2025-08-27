/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    // Add other paths to your template files here
  ],
  theme: {
    extend: {
      // Extend Tailwind's default theme with custom values
      // Example:
      // colors: {
      //   'custom-blue': '#1da1f2',
      // },
      fontFamily: {
        'madurai': ['Hind Madurai', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here
    // Example:
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};