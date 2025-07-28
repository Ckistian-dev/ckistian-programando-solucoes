/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind analise todos os arquivos relevantes
  ],
  theme: {
    extend: {
      // Aqui estendemos o tema padrão do Tailwind com nosso sistema de design
      colors: {
        // Paleta de cores baseada no seu logo e na estratégia que definimos
        'primary': '#25A1AF',      // Azul-petróleo tecnológico para botões, links e destaques
        'accent': '#2b89a6',       // Amarelo/Ouro para CTAs de alto contraste
        'bg-dark': '#2C2C3A',      // Fundo principal escuro e sofisticado
        'bg-card': '#3A3A4A',      // Tom mais claro para cards e seções secundárias
        'text-light': '#F5F5F5',   // Cor principal para textos sobre fundos escuros
        'text-muted': '#A0A0B0',   // Cinza claro para textos secundários e descrições
        'border-color': '#4A4A5A', // Cor para bordas sutis e divisores
      },
      fontFamily: {
        // Definindo a fonte principal para consistência
        sans: ['Inter', 'sans-serif'],
      },
      // Adicionaremos mais customizações aqui conforme necessário (ex: animações)
    },
  },
  plugins: [],
}
