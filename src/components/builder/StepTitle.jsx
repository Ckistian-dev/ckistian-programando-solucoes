import { motion } from 'framer-motion';

const StepTitle = ({ stepNumber, title }) => {
  return (
    <motion.div
      className="flex items-center gap-4 md:gap-6 mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      {/* Número da Etapa Estilizado */}
      <div className="flex items-center justify-center min-w-16 h-16 rounded-full bg-bg-card border-2 border-primary">
        <span className="text-3xl font-bold text-primary">
          {String(stepNumber).padStart(2, '0')}
        </span>
      </div>
      {/* Título da Etapa */}
      <h2 className="text-2xl md:text-3xl font-bold text-text-light">
        {title}
      </h2>
    </motion.div>
  );
};

export default StepTitle;
