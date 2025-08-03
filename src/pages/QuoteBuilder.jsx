import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import SiteTypeSelector from '../components/builder/SiteTypeSelector';
import QuoteSummaryBar from '../components/builder/QuoteSummaryBar';
import StepTitle from '../components/builder/StepTitle';
import FeatureCard from '../components/builder/FeatureCard';
import ColorPaletteSelector from '../components/builder/ColorPaletteSelector';

// Estrutura de dados do orçamentador
const quoteOptions = [
  {
    step: 1,
    title: 'Qual tipo de site você precisa?',
    key: 'siteType',
    options: [
      {
        title: 'Landing Page',
        description: 'Uma única página focada em conversão. Ideal para campanhas, eventos ou apresentação de um produto específico. É a porta de entrada perfeita para capturar a atenção do seu público-alvo com uma mensagem direta e eficaz.',
        shortDescription: 'Página única para campanhas e produtos.',
        price: 1200,
        img: 'https://placehold.co/400x300/25A1AF/FFFFFF?text=Landing+Page',
      },
      {
        title: 'Site Institucional',
        description: 'Um site com várias páginas (Sobre, Serviços, Contato, etc.). Perfeito para apresentar sua empresa, detalhar seus serviços e fortalecer a credibilidade da sua marca no ambiente digital.',
        shortDescription: 'Múltiplas páginas para apresentar sua empresa.',
        price: 2500,
        img: 'https://placehold.co/400x300/E1A33B/2C2C3A?text=Institucional',
      },
      {
        title: 'E-commerce',
        description: 'Uma loja virtual completa para vender seus produtos online. Inclui catálogo de produtos, carrinho de compras, integração com sistemas de pagamento e um painel para gerenciar pedidos e estoque.',
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
        description: 'Essencial para qualquer site que precise armazenar e gerenciar informações de forma dinâmica, como cadastros de usuários, listas de produtos, postagens de blog ou dados de formulários.',
        shortDescription: 'Para armazenar dados como usuários ou produtos.',
        price: 800,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=Banco+de+Dados',
      },
      {
        title: 'Integrações com APIs',
        description: 'Permite que seu site se comunique com outras plataformas e serviços. Exemplos comuns incluem integração com gateways de pagamento (Stripe, PagSeguro), redes sociais, Google Maps ou sistemas de automação de marketing.',
        shortDescription: 'Conexão com outros serviços (pagamentos, etc.).',
        price: 750,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=APIs',
      },
      {
        title: 'Área de Blog',
        description: 'Uma seção dedicada para a publicação de artigos e notícias. É uma ferramenta poderosa para marketing de conteúdo, melhorando o ranking do seu site no Google (SEO) e estabelecendo sua autoridade no setor.',
        shortDescription: 'Uma seção para publicar artigos e notícias.',
        price: 600,
        img: 'https://placehold.co/400x300/3A3A4A/FFFFFF?text=Blog',
      },
    ],
    isMultiSelect: true,
  },
    {
    step: 3,
    title: 'Escolha uma Paleta de Cores',
    key: 'colorPalette',
    isPaletteSelector: true,
  }
];

const QuoteBuilder = () => {
  const [selections, setSelections] = useState({
    siteType: [quoteOptions[0].options[0]],
    colorPalette: {},
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
  
  const handlePaletteSelect = (palette) => {
    setSelections(prev => ({ ...prev, colorPalette: palette }));
  };

  useEffect(() => {
    const total = Object.values(selections)
      .flat()
      // ✅ CORREÇÃO: Filtra apenas os itens que têm um preço antes de somar
      .filter(option => option && typeof option.price === 'number')
      .reduce((sum, option) => sum + option.price, 0);
    setTotalPrice(total);
  }, [selections]);

  return (
    <motion.div
      className="py-20 bg-bg-dark pb-40"
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

        <div className="space-y-24 mt-16">
          {quoteOptions.map(step => (
            <div key={step.step}>
              <StepTitle stepNumber={step.step} title={step.title} />
              
              {step.isPaletteSelector ? (
                <ColorPaletteSelector onPaletteChange={handlePaletteSelect} />
              ) : step.key === 'siteType' ? (
                <SiteTypeSelector 
                  options={step.options}
                  selectedOption={selections.siteType[0]}
                  onSelect={(opt) => handleSelect(step.key, opt, step.isMultiSelect)}
                />
              ) : (
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                  {step.options.map(option => (
                    <FeatureCard
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

      {totalPrice > 0 && (
        <QuoteSummaryBar selections={selections} totalPrice={totalPrice} />
      )}
    </motion.div>
  );
};

export default QuoteBuilder;
