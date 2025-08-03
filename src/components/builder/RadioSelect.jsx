import { motion } from 'framer-motion';

const RadioSelect = ({ options, onSelectionChange, initialValue }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {options.map(option => {
        const isSelected = initialValue && initialValue.title === option.title;
        return (
          <motion.div
            key={option.title}
            onClick={() => onSelectionChange(option)}
            className={`flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              isSelected ? 'border-primary bg-primary/10' : 'border-border-color bg-bg-card hover:border-primary/50'
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${isSelected ? 'border-primary' : 'border-text-muted'}`}>
                {isSelected && <div className="w-3 h-3 bg-primary rounded-full" />}
              </div>
              <h3 className="font-bold text-lg text-text-light">{option.title}</h3>
            </div>
            <p className="text-sm text-text-muted md:flex-grow">{option.description}</p>
            {typeof option.price === 'number' && (
              <p className="font-bold text-primary text-xl whitespace-nowrap self-end md:self-center">
                + R$ {option.price.toLocaleString('pt-BR')}
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default RadioSelect;
