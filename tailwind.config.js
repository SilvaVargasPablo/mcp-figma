/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── COLORES del sistema de diseño Figma ───────────────────────────
      colors: {
        brand: {
          bg: '#111112',          // fondo principal de la página
          surface: '#171717',     // fondo de tarjetas/piloto
          footer: '#19191a',      // fondo del footer
          accent: '#00FFD1',      // acento cian/teal (botón suscribir)
        },
        slate: {
          400: '#94A3B8',         // slate/400 — texto secundario
        },
        grey: {
          300: '#A7B7CE',         // Grey/300 — bordes y textos tenues
        },
        other: {
          light: '#FFFFFF',       // Other/light
        },
      },
      // ─── TIPOGRAFÍA del sistema de diseño Figma ─────────────────────────
      fontFamily: {
        monument: ['"PP Monument Extended"', 'sans-serif'],
        'tt-norms': ['"TT Norms"', 'sans-serif'],
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'mplus1': ['"M PLUS 1"', 'sans-serif'],
      },
      fontSize: {
        // Caption/01/Regular — TT Norms Regular 12/16
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        // text-sm/leading-5/font-normal — Plus Jakarta Sans 14/20
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        // title/04 — TT Norms Bold 16/24
        'title-04': ['16px', { lineHeight: '24px', fontWeight: '700' }],
      },
      // ─── ESPACIADOS personalizados ───────────────────────────────────────
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',         // padding lateral del footer
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '47px',
      },
    },
  },
  plugins: [],
}
