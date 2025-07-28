import { motion } from 'framer-motion';
import Button from '../ui/Button'; // Importando nosso botão reutilizável

// Variantes de animação para o container e seus filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima os filhos com um intervalo de 0.2s
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-bg-dark">
      <div className="container mx-auto px-4 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-text-light leading-tight mb-4"
          >
            Transformando Ideias em
            <span className="text-primary"> Soluções Digitais </span>
            Inovadoras
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted mb-8"
          >
            Criação de sites e sistemas sob medida que resolvem problemas reais e impulsionam o crescimento do seu negócio.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button to="/crie-seu-site" variant="primary">
              Quero um Orçamento
            </Button>
            <Button to="/#projetos" variant="secondary">
              Ver Projetos
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
