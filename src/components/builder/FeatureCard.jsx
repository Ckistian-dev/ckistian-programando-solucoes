import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaQuestion, FaTimes } from 'react-icons/fa';

// Componente do Modal de Informações
const InfoModal = ({ option, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative bg-bg-card w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche-o
      >
        <img src={option.img} alt={option.title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-text-light mb-4">{option.title}</h3>
          {/* Este parágrafo usa a descrição completa */}
          <p className="text-text-muted">{option.description}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-bg-dark/50 rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-all"
        >
          <FaTimes />
        </button>
      </motion.div>
    </motion.div>
  );
};

const FeatureCard = ({ option, isSelected, onSelect }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative w-full flex gap-4 md:gap-6 p-2 rounded-xl border-2 transition-all duration-300 ${
          isSelected
            ? 'border-primary bg-primary/10 shadow-lg'
            : 'border-border-color bg-bg-card'
        }`}
      >
        {/* Imagem e Botão de Seleção */}
        <div className="relative w-1/3 md:w-1/4 flex-shrink-0">
          <img
            src={option.img}
            alt={option.title}
            className="w-full h-full object-cover rounded-lg aspect-[4/3]"
          />
          <motion.button
            onClick={() => onSelect(option)}
            className={`absolute top-2 left-2 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? 'bg-primary/80 border-primary'
                : 'bg-bg-dark/50 border-text-muted/50 hover:border-primary'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FaCheck className="text-white w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Conteúdo */}
        <div className="w-2/3 md:w-3/4 flex flex-col">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-text-light text-base md:text-xl pr-4">{option.title}</h4>
            <p className="font-bold text-primary text-base md:text-xl ml-auto whitespace-nowrap">
              + R$ {option.price.toLocaleString('pt-BR')}
            </p>
          </div>

          <div className="mt-2 flex-grow">
            <p className="text-sm md:text-base text-text-muted">
              {/* Este parágrafo usa a descrição curta */}
              {option.shortDescription}
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center align-middle ml-2 w-5 h-5 md:w-6 md:h-6 bg-bg-dark/50 rounded-full text-text-muted hover:bg-primary hover:text-white transition-all"
              >
                <FaQuestion className="w-2.5 h-2.5 md:w-3 md:h-3" />
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && <InfoModal option={option} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default FeatureCard;
