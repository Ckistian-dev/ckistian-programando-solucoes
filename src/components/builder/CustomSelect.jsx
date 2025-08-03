import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const CustomSelect = ({ options, onSelectionChange, initialValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue || options[0]);
  const [otherValue, setOtherValue] = useState('');
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

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (option !== 'Outros') {
      onSelectionChange(option);
    } else {
      // Se 'Outros' for selecionado, mas o campo de texto estiver vazio,
      // a seleção final ainda não é enviada.
      onSelectionChange(otherValue || 'Outros');
    }
  };

  const handleOtherChange = (e) => {
    setOtherValue(e.target.value);
    onSelectionChange(e.target.value);
  };

  return (
    <div className="relative max-w-2xl mx-auto" ref={dropdownRef}>
      {/* Botão Principal do Dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-bg-card p-4 rounded-lg border-2 border-border-color hover:border-primary transition-colors duration-300"
      >
        <span className="text-lg text-text-light">
          {selected === 'Outros' ? (otherValue || 'Outros (especifique)') : selected}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FaChevronDown className="text-text-muted" />
        </motion.div>
      </button>

      {/* Opções do Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full w-full bg-bg-card rounded-lg shadow-2xl mt-2 z-20 overflow-hidden"
          >
            {options.map(option => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="p-4 hover:bg-bg-dark cursor-pointer transition-colors text-text-light border-b border-border-color/30 last:border-b-0"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      
      {/* Campo de Texto para "Outros" */}
      <AnimatePresence>
        {selected === 'Outros' && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            <input
              type="text"
              value={otherValue}
              onChange={handleOtherChange}
              placeholder="Especifique o público-alvo..."
              className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
