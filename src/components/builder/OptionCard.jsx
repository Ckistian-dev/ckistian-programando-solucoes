import { motion } from 'framer-motion';

const OptionCard = ({ option, isSelected, onSelect }) => {
  const cardVariants = {
    initial: { scale: 1, borderColor: '#4A4A5A' }, // border-border-color
    selected: { scale: 1.05, borderColor: '#25A1AF' }, // border-primary
  };

  return (
    <motion.div
      className="bg-bg-card rounded-lg shadow-lg cursor-pointer border-2 transition-all duration-300 flex flex-col"
      variants={cardVariants}
      initial="initial"
      animate={isSelected ? 'selected' : 'initial'}
      whileHover={{ scale: 1.05, y: -5 }}
      onClick={() => onSelect(option)}
    >
      <img 
        src={option.img} 
        alt={option.title} 
        className="w-full h-48 object-cover rounded-t-md"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/3A3A4A/F5F5F5?text=Opção'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-light mb-2">{option.title}</h3>
        <p className="text-text-muted text-sm mb-4 flex-grow">{option.description}</p>
        <p className="text-2xl font-bold text-primary text-right">
          R$ {option.price.toLocaleString('pt-BR')}
        </p>
      </div>
    </motion.div>
  );
};

export default OptionCard;
