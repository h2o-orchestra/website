/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'h2o-blue': '#3b82f6',
        'h2o-dark': '#1e293b',
      },
    },
  },
  plugins: [],
}