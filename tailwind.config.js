/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Se o seu HTML estiver na raiz do projeto:
    './index.html',
    // Se você tiver outros arquivos como privacy.html, etc.
    './*.html', 
    // Adicione outros diretórios, se houver
  ],
  theme: {
    extend: {
      colors: {
        'financio-gold': '#D4AF37',
        'financio-dark': '#2A2A2A',
        'financio-bg': '#F7F6F3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}