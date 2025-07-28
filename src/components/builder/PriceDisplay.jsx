import { motion, AnimatePresence } from 'framer-motion';

const PriceDisplay = ({ total }) => {
  return (
    <div className="sticky bottom-4 w-full z-40">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-primary text-white rounded-lg shadow-2xl p-4 flex justify-between items-center max-w-2xl mx-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <span className="font-bold text-lg">Valor Total Estimado:</span>
          <div className="text-3xl font-extrabold flex items-center">
            <span>R$</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={total}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                {total.toLocaleString('pt-BR')}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PriceDisplay;
