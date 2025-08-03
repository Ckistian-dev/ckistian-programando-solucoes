import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tinycolor from 'tinycolor2';
import { FaPalette, FaRandom } from 'react-icons/fa';

// --- SUGESTÕES DE PALETAS ---
const suggestedPalettes = [
  { name: 'Moderno', primary: '#3B82F6', accent: '#F59E0B' },
  { name: 'Corporativo', primary: '#1E40AF', accent: '#D97706' },
  { name: 'Vibrante', primary: '#EC4899', accent: '#8B5CF6' },
  { name: 'Natural', primary: '#10B981', accent: '#FBBF24' },
  { name: 'Sofisticado', primary: '#4B5563', accent: '#F87171' },
];

// --- COMPONENTE DE PRÉ-VISUALIZAÇÃO ---
const LivePreview = ({ palette }) => (
  <div
    className="w-full h-64 rounded-lg shadow-lg border-2 border-border-color transition-all duration-500"
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
        style={{ backgroundColor: palette.accent, color: palette.bg }}
      >
        Botão de Ação
      </button>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
const ColorPaletteSelector = ({ onPaletteChange }) => {
  const [currentPalette, setCurrentPalette] = useState({});

  // Gera uma paleta completa a partir de uma cor primária
  const generatePalette = (primaryColor) => {
    const color = tinycolor(primaryColor);
    const newPalette = {
      primary: color.toHexString(),
      accent: color.complement().saturate(10).toHexString(),
      bg: color.clone().desaturate(30).darken(40).toHexString(),
      text: '#F5F5F5',
      text_muted: '#A0A0B0',
    };
    setCurrentPalette(newPalette);
  };

  // Define uma paleta a partir das sugestões
  const selectSuggestedPalette = (palette) => {
    const color = tinycolor(palette.primary);
    const newPalette = {
      primary: color.toHexString(),
      accent: palette.accent,
      bg: color.clone().desaturate(30).darken(40).toHexString(),
      text: '#F5F5F5',
      text_muted: '#A0A0B0',
    };
    setCurrentPalette(newPalette);
  };

  const handleRandom = () => {
    const randomPalette = suggestedPalettes[Math.floor(Math.random() * suggestedPalettes.length)];
    selectSuggestedPalette(randomPalette);
  };

  // Dispara a função do componente pai sempre que a paleta mudar
  useEffect(() => {
    if (Object.keys(currentPalette).length > 0) {
      onPaletteChange(currentPalette);
    }
  }, [currentPalette]);
  
  // Define uma paleta inicial
  useEffect(() => {
    selectSuggestedPalette(suggestedPalettes[0]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {Object.keys(currentPalette).length > 0 && <LivePreview palette={currentPalette} />}

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Lado Esquerdo: Sugestões e Aleatório */}
        <div className="bg-bg-card p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4 text-text-light flex items-center gap-2">
            <FaPalette /> Sugestões de Paletas
          </h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {suggestedPalettes.map(p => (
              <div
                key={p.name}
                onClick={() => selectSuggestedPalette(p)}
                className="cursor-pointer p-2 rounded-lg hover:bg-bg-dark transition-colors text-center"
              >
                <div className="flex h-10 rounded overflow-hidden mb-2">
                  <div className="w-2/3" style={{ backgroundColor: p.primary }}></div>
                  <div className="w-1/3" style={{ backgroundColor: p.accent }}></div>
                </div>
                <span className="text-sm text-text-muted">{p.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={handleRandom}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all"
          >
            <FaRandom /> Gerar Aleatória
          </button>
        </div>

        {/* Lado Direito: Seletor Manual */}
        <div className="bg-bg-card p-6 rounded-lg flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg mb-4 text-text-light">Ou escolha sua cor principal</h3>
          <input
            type="color"
            defaultValue={currentPalette.primary}
            onChange={(e) => generatePalette(e.target.value)}
            className="w-24 h-24 rounded-full cursor-pointer border-4 border-bg-dark shadow-lg"
            aria-label="Escolha uma cor"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteSelector;
