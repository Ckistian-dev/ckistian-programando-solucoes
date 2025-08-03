import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaLink } from 'react-icons/fa';

const DesignChoice = ({ onSelectionChange, initialValue }) => {
  const isExclusive = initialValue.type === 'Exclusivo';

  const handleSelect = (type) => {
    onSelectionChange({ ...initialValue, type });
  };
  
  const handleLinkChange = (e) => {
    onSelectionChange({ ...initialValue, templateLink: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Design Exclusivo */}
        <div
          onClick={() => handleSelect('Exclusivo')}
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isExclusive ? 'border-primary bg-primary/10' : 'border-border-color bg-bg-card hover:border-primary/50'}`}
        >
          <FaPaintBrush className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-bold text-lg text-text-light mb-2">Design Exclusivo (do Zero)</h3>
          <p className="text-sm text-text-muted">Criaremos uma identidade visual única e sob medida, pensada exclusivamente para o seu negócio.</p>
        </div>
        
        {/* Card: Baseado em Template */}
        <div
          onClick={() => handleSelect('Template')}
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${!isExclusive ? 'border-primary bg-primary/10' : 'border-border-color bg-bg-card hover:border-primary/50'}`}
        >
          <FaLink className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-bold text-lg text-text-light mb-2">Baseado em Template</h3>
          <p className="text-sm text-text-muted">Usaremos um modelo como inspiração ou base, agilizando o processo com um design já consolidado.</p>
        </div>
      </div>

      {/* Input para Link do Template */}
      <AnimatePresence>
        {!isExclusive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <label htmlFor="templateLink" className="block text-text-muted mb-2 font-semibold">Link do site de referência ou template</label>
            <input
              type="text"
              id="templateLink"
              value={initialValue.templateLink || ''}
              onChange={handleLinkChange}
              placeholder="https://exemplo.com/template-incrivel"
              className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignChoice;
