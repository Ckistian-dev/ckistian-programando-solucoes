import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPen } from 'react-icons/fa';

// Variantes de animação para um efeito de expansão suave
const dropdownVariants = {
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      type: 'spring',
      duration: 0.7,
      bounce: 0,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: 'spring',
      duration: 0.5, // ✅ Animação de fechamento mais suave
    },
  },
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};


const SiteTypeSelector = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-full mx-auto" ref={dropdownRef}>
      {/* Card Principal (Opção Selecionada) */}
      <div className="bg-bg-card rounded-lg shadow-xl overflow-hidden">
        <img
          src={selectedOption.img}
          alt={selectedOption.title}
          className="w-full h-64 object-cover md:h-[50lvh]"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold text-text-light mb-2">{selectedOption.title}</h3>
          <p className="text-text-muted mb-4">{selectedOption.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-bold text-primary">
              R$ {selectedOption.price.toLocaleString('pt-BR')}
            </p>
            {/* ✅ Botão atualizado com novo texto e ícone */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all"
            >
              Selecione
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <FaChevronDown />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown com nova animação de expansão */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full w-full bg-bg-card rounded-lg shadow-2xl mt-2 z-20 overflow-hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="p-1"
            >
              {options.map(option => (
                <motion.li
                  key={option.title}
                  variants={itemVariants}
                  onClick={() => handleOptionClick(option)}
                  className="flex items-start gap-4 p-2 hover:bg-bg-dark cursor-pointer transition-colors border-b border-border-color/30 last:border-b-0"
                >
                  <img src={option.img} alt={option.title} className="w-1/3 h-20 object-cover rounded-md flex-shrink-0"/>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-text-light">{option.title}</h4>
                      <p className="font-bold text-primary text-lg ml-4 whitespace-nowrap">
                        R$ {option.price.toLocaleString('pt-BR')}
                      </p>
                    </div>
                    <p className="text-sm text-text-muted">{option.shortDescription}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SiteTypeSelector;
