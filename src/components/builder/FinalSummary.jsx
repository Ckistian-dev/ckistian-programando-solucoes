import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FinalSummary = ({ selections, totalPrice, onSubmit }) => {
  const renderSelection = (label, value) => {
    if (!value) return null;
    let displayValue = '';

    if (Array.isArray(value)) {
      if (value.length === 0) return null;
      displayValue = value.map(item => item.title || item).join(', ');
    } else if (typeof value === 'object') {
      displayValue = value.title || value.type || 'N/A';
    } else {
      displayValue = value;
    }

    return (
      <div className="flex justify-between py-3 border-b border-border-color/30">
        <span className="text-text-muted">{label}</span>
        <span className="font-semibold text-text-light text-right">{displayValue}</span>
      </div>
    );
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-bg-card p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-text-light">Detalhamento do Investimento</h3>
        <p className="text-text-muted">Revise as seleções e envie seu orçamento para começarmos.</p>
      </div>

      <div className="space-y-2 mb-8">
        {renderSelection("Propósito do Site", selections.siteType)}
        {renderSelection("Público-Alvo", selections.targetAudience)}
        {renderSelection("Páginas do Site", selections.siteMap)}
        {renderSelection("Funcionalidades", selections.features)}
        {renderSelection("Criação de Logo", selections.logoDesign)}
        {renderSelection("Tipo de Design", selections.designChoice)}
        {renderSelection("Produção de Conteúdo", selections.contentProduction)}
        {renderSelection("Mídia (Imagens/Vídeos)", selections.mediaProduction)}
        {renderSelection("Hospedagem", selections.hosting)}
        {renderSelection("Domínio Personalizado", selections.domainRegistration)}
        {renderSelection("Plano de Manutenção", selections.maintenance)}
        {renderSelection("Plano de SEO", selections.seo)}
      </div>

      <div className="text-right py-4 border-t-2 border-primary">
        <span className="text-text-muted font-semibold">Valor Total do Projeto:</span>
        <p className="text-4xl font-extrabold text-primary">
          {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>

      <button
        onClick={onSubmit}
        className="mt-8 w-full flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" />
        Encaminhar Orçamento via WhatsApp
      </button>
    </motion.div>
  );
};

export default FinalSummary;
