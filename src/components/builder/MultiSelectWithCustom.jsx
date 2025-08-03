import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaPlus, FaTimes } from 'react-icons/fa';

const MultiSelectWithCustom = ({ options, onSelectionChange, initialValue = [] }) => {
  const [selected, setSelected] = useState(initialValue);
  const [customValue, setCustomValue] = useState('');

  const handleToggle = (option) => {
    const isSelected = selected.includes(option);
    const newSelection = isSelected
      ? selected.filter(item => item !== option)
      : [...selected, option];
    setSelected(newSelection);
  };

  const handleAddCustom = () => {
    if (customValue && !selected.includes(customValue)) {
      setSelected([...selected, customValue]);
      setCustomValue('');
    }
  };

  const handleRemove = (itemToRemove) => {
    setSelected(selected.filter(item => item !== itemToRemove));
  };

  useEffect(() => {
    onSelectionChange(selected);
  }, [selected]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Opções Pré-definidas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {options.map(option => {
          const isSelected = selected.includes(option);
          return (
            <motion.div
              key={option}
              onClick={() => handleToggle(option)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                isSelected ? 'border-primary bg-primary/10' : 'border-border-color bg-bg-card hover:border-primary/50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-5 h-5 rounded-sm flex items-center justify-center transition-colors ${isSelected ? 'bg-primary' : 'bg-bg-dark'}`}>
                {isSelected && <FaCheck className="text-white w-3 h-3" />}
              </div>
              <span className="font-semibold text-text-light">{option}</span>
            </motion.div>
          );
        })}
      </div>
      
      {/* Input para Opção Customizada */}
      <div className="flex gap-4 mt-6">
        <input
          type="text"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          placeholder="Add outra página (ex: FAQ)"
          className="flex-grow bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light"
        />
        <button
          type="button"
          onClick={handleAddCustom}
          className="flex-shrink-0 flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all"
        >
          <FaPlus /> Adicionar
        </button>
      </div>

      {/* Tags das Opções Selecionadas */}
      <AnimatePresence>
        {selected.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-bg-dark rounded-lg mt-6"
          >
            <h4 className="font-semibold text-text-muted mb-3">Páginas selecionadas:</h4>
            <div className="flex flex-wrap gap-2">
              {selected.map(item => (
                <motion.div
                  key={item}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2 bg-primary/20 text-primary font-semibold px-3 py-1 rounded-full"
                >
                  <span>{item}</span>
                  <button onClick={() => handleRemove(item)} className="hover:text-red-500">
                    <FaTimes className="w-3 h-3"/>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiSelectWithCustom;
