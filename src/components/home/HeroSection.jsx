import { motion } from 'framer-motion';
import Button from '../ui/Button';

// --- IMAGEM DE FUNDO ÚNICA ---
const backgroundImage = 'https://i.ibb.co/qFkvXRD9/Gemini-Generated-Image-cp3jzscp3jzscp3j.png';

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">

      {/* Imagem de Fundo com Animação de Zoom em Loop */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <motion.img
          src={backgroundImage}
          alt="Fundo tecnológico abstrato"
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          animate={{
            scale: [1, 1.2, 1], // Keyframes: Inicia em 100%, vai para 110%, volta para 100%
          }}
          transition={{
            duration: 20, // Duração de um ciclo completo (ida e volta)
            ease: 'easeInOut',
            repeat: Infinity, // Repete infinitamente
            repeatType: 'mirror', // O loop vai e volta (1 -> 1.1 -> 1)
          }}
        />
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
