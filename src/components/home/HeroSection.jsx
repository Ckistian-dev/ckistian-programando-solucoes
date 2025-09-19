import { motion } from 'framer-motion';
import Button from '../ui/Button';

// --- IMAGEM DE FUNDO ÚNICA ---
const backgroundImage = 'https://i.ibb.co/qFkvXRD9/Gemini-Generated-Image-cp3jzscp3jzscp3j.png';

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">

      {/* Container da Imagem de Fundo */}
      <div className="absolute inset-0 w-full h-full -z-10">
        
        {/* --- ALTERAÇÃO PRINCIPAL ---
          Adicionamos um wrapper para a imagem com classes de escala responsivas.
          - 'scale-150': Aumenta a imagem em 50% por padrão (mobile-first).
          - 'md:scale-100': Reseta a escala para 100% em telas médias (tablet) ou maiores.
          Você pode ajustar o valor 'scale-150' para 'scale-125' ou outro se o zoom for excessivo.
        */}
        <div className="absolute inset-0 w-full h-full scale-150 md:scale-100">
          <motion.img
            src={backgroundImage}
            alt="Fundo tecnológico abstrato"
            // A classe 'relative' é mais apropriada aqui do que 'absolute inset-0' já que o wrapper já cuida do posicionamento
            className="relative w-full h-full object-cover blur-sm"
            animate={{
              scale: [1, 1.1, 1], // Reduzi um pouco a animação para não ficar excessiva com o novo zoom base
            }}
            transition={{
              duration: 20,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </div>

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