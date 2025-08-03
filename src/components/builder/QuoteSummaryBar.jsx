import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const QuoteSummaryBar = ({ totalPrice, onFinalize }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-30 p-4"
    >
      <div className="max-w-md mx-auto">
        <div className="bg-bg-card/90 backdrop-blur-lg rounded-xl shadow-2xl p-2 flex items-center gap-2 border border-border-color/50">
          <div className="flex-grow flex items-baseline gap-2 p-2">
            <span className="text-base font-semibold text-text-muted">Investimento:</span>
            <p className="text-xl font-bold text-primary">
              R$ {totalPrice.toLocaleString('pt-BR')}
            </p>
          </div>
          <button
            onClick={onFinalize}
            className="flex-shrink-0 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteSummaryBar;
