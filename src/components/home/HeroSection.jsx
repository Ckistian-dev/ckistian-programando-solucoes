import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

// --- IMAGENS DO CARROSSEL DE FUNDO ---
const backgroundImages = [
  'https://i.ibb.co/hJf31sy4/image.png',
  'https://i.ibb.co/LD00ZGQz/Gemini-Generated-Image-xvpe93xvpe93xvpe.png',
  'https://i.ibb.co/qFkvXRD9/Gemini-Generated-Image-cp3jzscp3jzscp3j.png',
  'https://i.ibb.co/5XfjZnM9/22bf94e6-50b7-47dd-bd87-f52126d2ed98.png',
  'https://i.ibb.co/jPLKyGTz/4167515c-08b5-4e68-89f9-015c9ff856ab.png'
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  // Efeito para trocar a imagem do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 20000); // ✅ Aumentado para 20 segundos por imagem
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">

      {/* Carrossel de Imagens no Fundo com Animação Melhorada */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {backgroundImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Fundo tecnológico abstrato"
            className="absolute inset-0 w-full h-full object-cover blur-sm" // Desfoque sutil
            animate={{
              opacity: index === bgIndex ? 1 : 0, 
              scale: index === bgIndex ? 1.15 : 1,
            }}
            transition={{
              // ✅ A transição de opacidade (o "merge") agora dura 6 segundos
              opacity: { duration: 6, ease: 'easeInOut' },
              // ✅ O zoom agora dura os 20 segundos em que a imagem está na tela
              scale: { duration: 20, ease: 'linear' },
            }}
          />
        ))}
        {/* Overlay para garantir a legibilidade do texto */}
        <div className="absolute inset-0 bg-bg-dark/70"></div>
      </div>

      {/* Conteúdo Principal (sem alterações) */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight mb-4 [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformando Ideias em
            <span className="text-primary"> Soluções Digitais </span>
            Inovadoras
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text-muted mb-8 [text-shadow:1px_1px_4px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Criação de sites e sistemas sob medida que resolvem problemas reais e impulsionam o crescimento do seu negócio.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button to="/crie-seu-site" variant="primary">
              Quero um Orçamento
            </Button>
            <Button to="/projetos" variant="secondary">
              Ver Projetos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
