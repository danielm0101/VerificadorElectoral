/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de las secciones
        identificacion: '#ffb700',
        preparacion: '#11d0d0',
        extraccion: '#ff5a5a',
        comparacion: '#d3c4d1',
        // Colores base
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}