module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        changa: 'Changa, sans-serif',
        bebas: 'Bebas Neue',
        verdana: [
          'Tahoma',
          'Verdana',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Arial',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        'bir-red': '#FF0000',
        'bir-dark': '#0E0E0E',
        'bir-text-green': '#06D7B1',
        'bir-text-gray': '#E3C8C8',
      },
      backgroundImage: {
        'red-pic': "url('/bg/bg-red.jpg')",
        'texture-and-cross':
          " url('/bg/pattern-cross.png'), url('/bg/texture-1.jpg')",
        'texture-1': "url('/bg/texture-1.jpg')",
        'pattern-1': "url('/bg/pattern-cross.png')",
        'bir-lang-malakas': "url('/bir-lang-malakas.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
