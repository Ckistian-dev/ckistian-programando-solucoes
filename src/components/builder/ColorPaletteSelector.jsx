import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import tinycolor from 'tinycolor2';
import { FaTimes, FaPen } from 'react-icons/fa';

// --- PALETA INICIAL PADRÃO ---
const defaultPalette = {
  primary: '#3B82F6', accent: '#F59E0B', bg: '#111827',
  text: '#F9FAFB', text_muted: '#9CA3AF',
};

// --- COMPONENTE DE PRÉ-VISUALIZAÇÃO ---
const LivePreview = ({ palette }) => (
  <div
    className="w-full h-56 rounded-lg shadow-lg border-2 border-border-color overflow-hidden transition-all duration-500"
    style={{ backgroundColor: palette.bg, color: palette.text }}
  >
    <div className="h-10 flex items-center px-4" style={{ backgroundColor: palette.primary }}>
      <div className="w-1/4 h-3 rounded-full bg-white/50"></div>
    </div>
    <div className="p-4">
      <div className="w-3/4 h-6 rounded-full mb-3" style={{ backgroundColor: palette.text_muted }}></div>
      <div className="w-1/2 h-4 rounded-full mb-6" style={{ backgroundColor: palette.text_muted }}></div>
      <button
        className="px-6 py-2 rounded-lg font-bold transition-transform hover:scale-105"
        style={{ backgroundColor: palette.accent, color: tinycolor(palette.accent).isDark() ? '#fff' : '#000' }}
      >
        Botão de Ação
      </button>
    </div>
  </div>
);

// --- COMPONENTE DO MODAL DE EDIÇÃO DE CORES ---
const PaletteEditorModal = ({ initialPalette, onSave, onClose }) => {
  const [editedPalette, setEditedPalette] = useState(initialPalette);

  const handleColorChange = (colorName, hexValue) => {
    setEditedPalette(prev => ({ ...prev, [colorName]: hexValue }));
  };

  const colorKeys = [
    { key: 'primary', name: 'Primária' }, { key: 'accent', name: 'Destaque' },
    { key: 'bg', name: 'Fundo' }, { key: 'text', name: 'Texto Principal' },
    { key: 'text_muted', name: 'Texto Secundário' },
  ];
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative bg-bg-card w-full max-w-lg rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          <LivePreview palette={editedPalette} />
          <div className="space-y-3">
            {colorKeys.map(({ key, name }) => (
              <div key={key} className="flex items-center justify-between bg-bg-dark p-2 rounded-lg">
                <span className="capitalize text-text-muted font-semibold">{name}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-text-light">{editedPalette[key]}</span>
                  <input type="color" value={editedPalette[key]} onChange={(e) => handleColorChange(key, e.target.value)} className="w-10 h-10 rounded-md cursor-pointer border-2 border-border-color bg-transparent"/>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => onSave(editedPalette)} className="w-full bg-accent text-bg-dark font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105">
            Salvar Paleta
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
const ColorPaletteSelector = ({ onPaletteChange, initialValue }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Garante que o estado inicial tenha valores padrão
  const currentPalette = initialValue && Object.keys(initialValue).length > 0 ? initialValue : defaultPalette;

  const handleSaveFromModal = (newPalette) => {
    onPaletteChange(newPalette);
    setModalOpen(false);
  };

  // Garante que o valor padrão seja enviado na primeira renderização
  useEffect(() => {
    if (!initialValue || Object.keys(initialValue).length === 0) {
      onPaletteChange(defaultPalette);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Pré-visualização visível diretamente na página */}
      <LivePreview palette={currentPalette} />

      {/* Barra de controle abaixo da pré-visualização */}
      <div className="mt-4 bg-bg-card p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* ✅ Seção de texto restaurada */}
        <div>
          <h3 className="font-bold text-lg text-text-light">Paleta de Cores Selecionada</h3>
          <p className="text-text-muted text-sm">Esta será a base visual de cores do seu novo site.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {['primary', 'accent', 'bg', 'text'].map(key => (
              <div key={key} className="w-8 h-8 rounded-full border-2 border-border-color" style={{ backgroundColor: currentPalette[key] }}></div>
            ))}
          </div>
          <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all">
            <FaPen className="w-3.5 h-3.5" />
            Editar
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <PaletteEditorModal
            initialPalette={currentPalette}
            onSave={handleSaveFromModal}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPaletteSelector;
