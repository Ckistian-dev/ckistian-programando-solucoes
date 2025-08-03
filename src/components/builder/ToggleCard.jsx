import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestion, FaTimes } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch';

// Componente do Modal de Informações
const InfoModal = ({ title, description, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.9, y: 50, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="relative bg-bg-card w-full max-w-lg rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-text-light mb-4">{title}</h3>
        <p className="text-text-muted">{description}</p>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-bg-dark/50 rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-all">
        <FaTimes />
      </button>
    </motion.div>
  </motion.div>
);

const ToggleCard = ({ item, selection, onSelectionChange }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-bg-card p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <label className="font-semibold text-text-light text-left">{item.label}</label>
          {item.description && (
            <button
              onClick={() => setModalOpen(true)}
              className="w-6 h-6 bg-bg-dark/50 rounded-full flex-shrink-0 flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all"
            >
              <FaQuestion className="w-3 h-3" />
            </button>
          )}
        </div>
        <ToggleSwitch
          initialValue={selection}
          onSelectionChange={(value) => onSelectionChange(item.key, value)}
        />
      </div>
      <AnimatePresence>
        {isModalOpen && <InfoModal title={item.label} description={item.description} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ToggleCard;
