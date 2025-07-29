import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import OptionCard from '../components/builder/OptionCard';
import SiteTypeSelector from '../components/builder/SiteTypeSelector';
import QuoteSummaryBar from '../components/builder/QuoteSummaryBar'; // ✅ Importe o novo componente

// Estrutura de dados do orçamentador
const quoteOptions = [
  {
    step: 1,
    title: 'Qual tipo de site você precisa?',
    key: 'siteType',
    options: [
      {
        title: 'Landing Page',
        description: 'Uma única página focada em conversão. Ideal para campanhas, eventos ou apresentação de um produto específico.',
        shortDescription: 'Página única para campanhas e produtos.',
        price: 1200,
        img: 'https://placehold.co/400x300/25A1AF/FFFFFF?text=Landing+Page',
      },
      {
        title: 'Site Institucional',
        description: 'Um site com várias páginas (Sobre, Serviços, Contato). Perfeito para apresentar sua empresa e fortalecer sua marca.',
        shortDescription: 'Múltiplas páginas para apresentar sua empresa.',
        price: 2500,
        img: 'https://placehold.co/400x300/E1A33B/2C2C3A?text=Institucional',
      },
      {
        title: 'E-commerce',
        description: 'Uma loja virtual completa para vender seus produtos online, com carrinho, pagamentos e gerenciamento de pedidos.',
        shortDescription: 'Loja virtual completa para vender online.',
        price: 5000,
        img: 'https://placehold.co/400x300/F5F5F5/2C2C3A?text=E-commerce',
      },
    ],
    isMultiSelect: false,
  },
  {
    step: 2,
    title: 'Quais funcionalidades extras você deseja?',
    key: 'features',
    options: [
      {
        title: 'Banco de Dados',
        description: 'Necessário para armazenar informações, como usuários, produtos ou posts de blog. Essencial para sistemas dinâmicos.',
        price: 800,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=Banco+de+Dados',
      },
      {
        title: 'Integrações com APIs',
        description: 'Para conectar seu site a outros serviços, como sistemas de pagamento (Stripe), mapas (Google Maps) ou redes sociais.',
        price: 750,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=APIs',
      },
      {
        title: 'Área de Blog',
        description: 'Uma seção para você publicar artigos e notícias, ajudando no marketing de conteúdo e SEO (ranking no Google).',
        price: 600,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=Blog',
      },
    ],
    isMultiSelect: true,
  },
];

const QuoteBuilder = () => {
  const [selections, setSelections] = useState({
    siteType: [quoteOptions[0].options[0]]
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (stepKey, option, isMultiSelect) => {
    setSelections(prev => {
      const currentStepSelections = prev[stepKey] || [];
      
      if (isMultiSelect) {
        const isSelected = currentStepSelections.some(item => item.title === option.title);
        if (isSelected) {
          return { ...prev, [stepKey]: currentStepSelections.filter(item => item.title !== option.title) };
        } else {
          return { ...prev, [stepKey]: [...currentStepSelections, option] };
        }
      } else {
        return { ...prev, [stepKey]: [option] };
      }
    });
  };

  useEffect(() => {
    const total = Object.values(selections)
      .flat()
      .reduce((sum, option) => sum + option.price, 0);
    setTotalPrice(total);
  }, [selections]);

  return (
    <motion.div
      className="py-20 bg-bg-dark pb-40" // Aumentado padding inferior para não sobrepor o footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Crie o Site dos Seus Sonhos"
          subtitle="Selecione as opções abaixo para um orçamento instantâneo"
        />

        <div className="space-y-16 mt-16">
          {quoteOptions.map(step => (
            <div key={step.step}>
              <h2 className="text-2xl font-bold text-center text-text-light mb-8">{step.step}. {step.title}</h2>
              
              {step.key === 'siteType' ? (
                <SiteTypeSelector 
                  options={step.options}
                  selectedOption={selections.siteType[0]}
                  onSelect={(opt) => handleSelect(step.key, opt, step.isMultiSelect)}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {step.options.map(option => (
                    <OptionCard
                      key={option.title}
                      option={option}
                      isSelected={selections[step.key]?.some(item => item.title === option.title) || false}
                      onSelect={(opt) => handleSelect(step.key, opt, step.isMultiSelect)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Barra de resumo discreta que substitui os componentes antigos */}
      {totalPrice > 0 && (
        <QuoteSummaryBar selections={selections} totalPrice={totalPrice} />
      )}
    </motion.div>
  );
};

export default QuoteBuilder;
