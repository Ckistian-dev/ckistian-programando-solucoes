import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPen, FaFont } from 'react-icons/fa';

// --- OPÇÕES DE FONTES (PARES CURADOS) ---
const fontPairings = [
  { name: 'Moderno & Limpo', heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  { name: 'Elegante & Clássico', heading: "'Playfair Display', serif", body: "'Roboto', sans-serif" },
  { name: 'Tecnológico & Geométrico', heading: "'Montserrat', sans-serif", body: "'Open Sans', sans-serif" },
  { name: 'Arrojado & Impactante', heading: "'Oswald', sans-serif", body: "'Lato', sans-serif" },
  { name: 'Amigável & Redondo', heading: "'Nunito', sans-serif", body: "'Nunito', sans-serif" },
  { name: 'Sofisticado & Editorial', heading: "'Lora', serif", body: "'Source Sans Pro', sans-serif" },
  { name: 'Minimalista & Profissional', heading: "'Poppins', sans-serif", body: "'Poppins', sans-serif" },
  { name: 'Tradicional & Legível', heading: "'Merriweather', serif", body: "'Lato', sans-serif" },
  { name: 'Criativo & Ousado', heading: "'Raleway', sans-serif", body: "'Roboto', sans-serif" },
];

// --- COMPONENTE DO MODAL DE EDIÇÃO DE FONTES ---
const FontEditorModal = ({ initialFonts, onSave, onClose }) => {
  const [editedFonts, setEditedFonts] = useState(initialFonts);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative bg-bg-card w-full max-w-2xl rounded-xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-border-color/50">
          <h3 className="font-bold text-2xl text-text-light flex items-center gap-3"> Escolha um Estilo de Tipografia</h3>
        </div>
        <div className="p-6 space-y-3 overflow-y-auto max-h-[60vh]">
          {fontPairings.map(pair => {
            const isSelected = editedFonts.name === pair.name;
            return (
              <div key={pair.name} onClick={() => setEditedFonts(pair)} className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${isSelected ? 'border-primary bg-primary/10' : 'border-border-color bg-bg-dark hover:border-primary/50'}`}>
                <h4 className="font-bold text-xl text-text-light" style={{fontFamily: pair.heading}}>{pair.name}</h4>
                <p className="text-text-muted" style={{fontFamily: pair.body}}>Exemplo de texto de corpo para pré-visualização.</p>
              </div>
            );
          })}
        </div>
        <div className="p-6 border-t border-border-color/50 mt-auto">
          <button onClick={() => onSave(editedFonts)} className="w-full bg-accent text-bg-dark font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105">
            Salvar Fontes
          </button>
        </div>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-bg-dark/50 rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-all">
          <FaTimes />
        </button>
      </motion.div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL (VISÍVEL NA PÁGINA) ---
const FontSelector = ({ onFontChange, initialValue }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // ✅ CORREÇÃO: Adicionada uma salvaguarda para garantir que 'initialValue' seja sempre um objeto válido.
  const currentFonts = (initialValue && initialValue.heading && initialValue.body) 
    ? initialValue 
    : fontPairings[0];

  // ✅ Nova função para salvar e fechar o modal
  const handleSave = (newFonts) => {
    onFontChange(newFonts); // Passa os dados para o componente pai
    setModalOpen(false);   // Fecha o modal
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Pré-visualização visível diretamente na página */}
      <div className="bg-bg-card rounded-lg p-6 border-2 border-border-color">
        <h3 className="text-2xl font-bold mb-2 text-text-light" style={{fontFamily: currentFonts.heading}}>Título de Exemplo</h3>
        <p className="text-text-muted" style={{fontFamily: currentFonts.body}}>
          Este é um parágrafo de exemplo para você ver como a combinação de fontes e cores funciona. A tipografia define a personalidade do seu site.
        </p>
      </div>

      {/* Barra de controle */}
      <div className="mt-4 bg-bg-card p-4 rounded-lg flex sm:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-lg text-text-light">Estilo de Fonte</h3>
          <p className="text-text-muted text-sm" style={{fontFamily: currentFonts.body}}>
            <span className="font-semibold text-text-light" style={{fontFamily: currentFonts.heading}}>{currentFonts.name}</span>
          </p>
        </div>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all">
          <FaPen className="w-3.5 h-3.5" /> Alterar
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <FontEditorModal
            initialFonts={currentFonts}
            onSave={handleSave} // ✅ Usando a nova função handleSave
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FontSelector;
