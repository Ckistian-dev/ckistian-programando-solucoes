import { motion } from 'framer-motion';

const ToggleSwitch = ({ onSelectionChange, initialValue }) => {
  const isYes = initialValue === 'Sim';

  return (
    <div
      onClick={() => onSelectionChange(isYes ? 'Não' : 'Sim')}
      // Container principal, com as labels dentro
      className={`relative w-40 h-12 flex items-center rounded-full cursor-pointer p-1.5 transition-colors duration-300 ${
        isYes ? 'bg-primary' : 'bg-bg-card'
      }`}
    >
      {/* Knob deslizante */}
      <motion.div
        className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-md"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        initial={false}
        animate={{ x: isYes ? '100%' : '0%' }}
      />
      {/* Labels */}
      <div className="relative w-full flex justify-around items-center text-sm font-bold">
        <span className={`z-10 transition-colors ${!isYes ? 'text-text-light' : 'text-text-muted'}`}>
          Não
        </span>
        <span className={`z-10 transition-colors ${isYes ? 'text-text-light' : 'text-text-muted'}`}>
          Sim
        </span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
