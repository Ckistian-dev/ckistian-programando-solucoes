import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const QuoteSummaryBar = ({ selections, totalPrice }) => {
  
  const handleFinalizeQuote = () => {
    // ✅ **IMPORTANTE:** Substitua pelo seu número de WhatsApp.
    const phoneNumber = '5545991068514'; 
    
    // ✅ Mensagem de WhatsApp corrigida para garantir o envio correto dos emojis
    const wave = String.fromCodePoint(0x1F44B);
    const memo = String.fromCodePoint(0x1F4DD);
    const laptop = String.fromCodePoint(0x1F4BB);
    const sparkles = String.fromCodePoint(0x2728);
    const moneyBag = String.fromCodePoint(0x1F4B0);
    const rocket = String.fromCodePoint(0x1F680);

    let message = `Olá, Ckistian! ${wave}\n\nVim pelo seu site e montei uma proposta de orçamento. Gostaria de discutir os detalhes!\n\n`;
    message += `${memo} *Resumo do Orçamento:*\n\n`;

    // Adiciona o tipo de site
    if (selections.siteType && selections.siteType.length > 0) {
        message += `${laptop} *Tipo de Site:*\n`;
        selections.siteType.forEach(option => {
            message += `- ${option.title}\n`;
        });
        message += '\n';
    }

    // Adiciona as funcionalidades extras
    if (selections.features && selections.features.length > 0) {
        message += `${sparkles} *Funcionalidades Extras:*\n`;
        selections.features.forEach(option => {
            message += `- ${option.title}\n`;
        });
        message += '\n';
    }

    // Adiciona o preço total
    const formattedPrice = totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    message += `${moneyBag} *Valor Total Estimado:*\n*${formattedPrice}*\n\n`;

    message += `Aguardo seu contato para darmos o próximo passo! ${rocket}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-30 p-4"
    >
      <div className="container mx-auto">
        <div className="bg-bg-card/90 backdrop-blur-lg rounded-xl shadow-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border border-border-color/50">
          <div className="text-center sm:text-left">
            <span className="text-text-muted">Valor Estimado:</span>
            <p className="text-3xl font-bold text-primary">
              R$ {totalPrice.toLocaleString('pt-BR')}
            </p>
          </div>
          <button
            onClick={handleFinalizeQuote}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            Finalizar Orçamento
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteSummaryBar;
