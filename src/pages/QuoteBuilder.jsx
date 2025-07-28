import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import OptionCard from '../components/builder/OptionCard';
import PriceDisplay from '../components/builder/PriceDisplay';
import Button from '../components/ui/Button';

// Cole aqui a estrutura de dados 'quoteOptions' que mostrei no Passo 16

const QuoteBuilder = () => {
  const [selections, setSelections] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Lógica para selecionar/desselecionar uma opção
  const handleSelect = (stepKey, option, isMultiSelect) => {
    setSelections(prev => {
      const currentStepSelections = prev[stepKey] || [];
      
      if (isMultiSelect) {
        // Adiciona ou remove da lista de múltiplas seleções
        const isSelected = currentStepSelections.some(item => item.title === option.title);
        if (isSelected) {
          return { ...prev, [stepKey]: currentStepSelections.filter(item => item.title !== option.title) };
        } else {
          return { ...prev, [stepKey]: [...currentStepSelections, option] };
        }
      } else {
        // Substitui a seleção única
        return { ...prev, [stepKey]: [option] };
      }
    });
  };

  // Calcula o preço total sempre que as seleções mudam
  useEffect(() => {
    const total = Object.values(selections)
      .flat() // Junta todas as seleções de todos os passos em um único array
      .reduce((sum, option) => sum + option.price, 0);
    setTotalPrice(total);
  }, [selections]);

  return (
    <motion.div
      className="py-20 bg-bg-dark"
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
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Button to="/contato" variant="accent">
                Finalizar e Entrar em Contato
            </Button>
        </div>

      </div>

      {totalPrice > 0 && <PriceDisplay total={totalPrice} />}
    </motion.div>
  );
};

// Cole aqui a estrutura de dados 'quoteOptions' (Passo 16)
export const quoteOptions = [
  {
    step: 1,
    title: 'Qual tipo de site você precisa?',
    key: 'siteType',
    options: [
      {
        title: 'Landing Page',
        description: 'Uma única página focada em conversão. Ideal para campanhas, eventos ou apresentação de um produto específico.',
        price: 1200,
        img: 'https://placehold.co/400x300/25A1AF/FFFFFF?text=Landing+Page',
      },
      {
        title: 'Site Institucional',
        description: 'Um site com várias páginas (Sobre, Serviços, Contato). Perfeito para apresentar sua empresa e fortalecer sua marca.',
        price: 2500,
        img: 'https://placehold.co/400x300/E1A33B/2C2C3A?text=Institucional',
      },
      {
        title: 'E-commerce',
        description: 'Uma loja virtual completa para vender seus produtos online, com carrinho, pagamentos e gerenciamento de pedidos.',
        price: 5000,
        img: 'https://placehold.co/400x300/F5F5F5/2C2C3A?text=E-commerce',
      },
    ],
    isMultiSelect: false, // O usuário só pode escolher um tipo de site
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
    isMultiSelect: true, // O usuário pode escolher várias funcionalidades
  },
  // Podemos adicionar mais passos aqui (ex: Domínio, Paleta de Cores, etc.)
];


export default QuoteBuilder;
