import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import StepTitle from '../components/builder/StepTitle';
import QuoteSummaryBar from '../components/builder/QuoteSummaryBar';

// Importando todos os componentes de etapa
import FormCard from '../components/builder/FormCard';
import SiteTypeSelector from '../components/builder/SiteTypeSelector';
import CustomSelect from '../components/builder/CustomSelect';
import MultiSelectWithCustom from '../components/builder/MultiSelectWithCustom';
import FeatureCard from '../components/builder/FeatureCard';
import ColorPaletteSelector from '../components/builder/ColorPaletteSelector';
import FontSelector from '../components/builder/FontSelector';
import DesignChoice from '../components/builder/DesignChoice';
import FinalSummary from '../components/builder/FinalSummary';

// --- ESTRUTURA DE DADOS COMPLETA PARA O ORÇAMENTADOR ---
const builderData = {
  steps: [
    { step: 1, title: 'Dados do Cliente e da Empresa', key: 'clientInfo', component: FormCard },
    { step: 2, title: 'Qual o propósito principal do site?', key: 'siteType', component: SiteTypeSelector, options: [
      { title: 'Institucional', description: 'Apresentar a empresa, seus valores e serviços.', shortDescription: 'Apresentar sua empresa.', price: 100, img: 'https://www.loguei.com/site/wp-content/uploads/2023/09/image27.jpg' },
      { title: 'E-commerce', description: 'Vender produtos online.', shortDescription: 'Vender produtos online.', price: 300, img: 'https://www.labraro.com.br/img/usuario/netshoes.webp' },
      { title: 'Blog ou Portal', description: 'Publicar artigos e notícias.', shortDescription: 'Publicar artigos e notícias.', price: 100, img: 'https://volkdobrasil.com.br/wp-content/uploads/2024/07/imagem-blog-volk-do-brasil-scaled.jpg' },
      { title: 'Landing Page', description: 'Focar na conversão para uma campanha.', shortDescription: 'Página única para conversão.', price: 50, img: 'https://www.searchenginejournal.com/wp-content/uploads/2023/08/screenshot-2023-08-23-at-11.00.40-am-64e6210e4123f-sej.png' },
      { title: 'Sistema Web', description: 'Sistema com painel administrativo, cadastro de usuários, e funcionalidades personalizadas conforme a necessidade do projeto.', shortDescription: 'Sistema simples sob medida.', price: 300, img: 'https://globalsites.com.br/wp-content/uploads/2023/11/01-1.png' }
    ]},
    { step: 3, title: 'Qual é o Público-Alvo?', key: 'targetAudience', component: CustomSelect, options: [ 'Jovens', 'Adultos', 'Empresas (B2B)', 'Famílias', 'Público Local', 'Outros' ]},
    { step: 4, title: 'Estrutura e Mapa do Site', key: 'siteMap', component: MultiSelectWithCustom, options: ['Home', 'Sobre Nós', 'Serviços', 'Produtos', 'Contato', 'Blog']},
    { 
      step: 5, 
      title: 'Funcionalidades Adicionais', 
      key: 'features', 
      options: [
        { 
          title: 'Registro de Domínio', 
          description: 'Registramos o endereço do seu site (ex: www.suaempresa.com.br) em seu nome por um ano, garantindo sua marca na internet e passando mais profissionalismo aos seus clientes.', 
          shortDescription: 'Garanta o endereço do seu site por 1 ano.', 
          price: 50, 
          img: 'https://www.valuehost.com.br/blog/wp-content/uploads/2019/11/original-d77dbd617a1f716b4013a58a6835d49b.png.webp' 
        },
        { 
          title: 'Banco de Dados', 
          description: 'Um banco de dados é como a memória permanente do seu site. É essencial para qualquer funcionalidade que precise salvar ou consultar informações, como: cadastros de usuários, senhas, posts de um blog, produtos de uma loja, agendamentos, etc. Sem ele, o site seria apenas informativo e não poderia armazenar dados.', 
          shortDescription: 'Essencial para salvar dados (login, produtos, blog).', 
          price: 50, 
          img: 'https://fluxoconsultoria.poli.ufrj.br/wp-content/uploads/2024/05/foto-blog-Bando-de-dados.webp' 
        },
        { 
          title: 'Integrações APIs', 
          description: 'APIs são pontes que conectam seu site a outros serviços poderosos. Isso permite, por exemplo, receber pagamentos online (Stripe, PagSeguro), mostrar um mapa do Google, exibir o feed do Instagram ou conectar-se a um sistema de gestão (ERP).', 
          shortDescription: 'Conexão com serviços externos (pagamentos, mapas).', 
          price: 50, 
          img: 'https://adatech.dev.br/wp-content/uploads/2024/01/20240111-o-que-e-api.webp' 
        },
      ]
    },
    { step: 6, title: 'O design será exclusivo ou baseado em um template?', key: 'designChoice', component: DesignChoice, priceExclusive: 50, priceTemplate: 0 },
    { step: 7, title: 'Paleta de Cores', key: 'palette', component: ColorPaletteSelector },
    { step: 8, title: 'Tipografia (Fontes)', key: 'fonts', component: FontSelector },
    { step: 9, title: 'Resumo e Finalização', key: 'finalSummary', component: FinalSummary },
  ],
};

const defaultPalette = {
  primary: '#3B82F6', accent: '#F59E0B', bg: '#111827',
  text: '#F9FAFB', text_muted: '#9CA3AF',
};

const QuoteBuilder = () => {
  const [selections, setSelections] = useState({
    clientInfo: {},
    siteType: [builderData.steps.find(s => s.key === 'siteType').options[0]],
    targetAudience: builderData.steps.find(s => s.key === 'targetAudience').options[0],
    siteMap: ['Home', 'Sobre Nós', 'Contato'],
    features: [],
    palette: defaultPalette,
    fonts: { name: 'Moderno & Limpo', heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
    designChoice: { type: 'Exclusivo', templateLink: '' },
  });
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectionChange = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const handleFinalizeQuote = () => {
    const phoneNumber = '5545991068514';
    let message = "Olá, Ckistian! 👋\n\nVim pelo seu site e montei uma proposta de orçamento:\n\n";
    const { clientInfo, siteType, targetAudience, siteMap, features, palette, fonts, designChoice } = selections;
    message += `👤 *Cliente:* ${clientInfo.name || 'Não informado'}\n`;
    message += `📞 *Contato:* ${clientInfo.contact || 'Não informado'}\n`;
    message += `🏢 *Segmento:* ${clientInfo.segment || 'Não informado'}\n\n`;
    message += `💻 *Propósito do Site:* ${siteType[0].title}\n`;
    message += `🎯 *Público-Alvo:* ${targetAudience}\n\n`;
    if (siteMap.length > 0) message += `🗺️ *Páginas:* ${siteMap.join(', ')}\n\n`;
    if (features.length > 0) message += `✨ *Funcionalidades:* ${features.map(f => f.title).join(', ')}\n\n`;
    if (palette && palette.primary) message += `🎨 *Paleta de Cores:* ${palette.primary}\n`;
    if (fonts && fonts.name) message += `✒️ *Fontes:* ${fonts.name}\n\n`;
    
    // ✅ CORREÇÃO APLICADA AQUI
    message += `🖌️ *Design:* ${designChoice.type}\n`;
    if (designChoice.type === 'Template' && designChoice.templateLink) {
      message += `🔗 *Link de Referência:* ${designChoice.templateLink}\n`;
    }
    message += `\n`; // Adiciona uma linha em branco para espaçamento
    
    message += `💰 *Investimento Total Estimado:* *${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    let total = 0;
    if (selections.siteType) total += selections.siteType.reduce((sum, item) => sum + (item.price || 0), 0);
    if (selections.features) total += selections.features.reduce((sum, item) => sum + (item.price || 0), 0);
    if (selections.designChoice.type === 'Exclusivo') total += 50;
    setTotalPrice(total);
  }, [selections]);

  return (
    <motion.div className="py-20 bg-bg-dark pb-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Vamos Construir seu Projeto" subtitle="Preencha as etapas para um orçamento detalhado" />
        <div className="space-y-24 mt-16">
          {builderData.steps.map(step => {
            const Component = step.component;
            return (
              <div key={step.step}>
                <StepTitle stepNumber={step.step} title={step.title} />
                
                {(() => {
                  if (step.key === 'features') {
                    return (
                      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {step.options.map(option => (
                          <FeatureCard
                            key={option.title}
                            option={option}
                            isSelected={selections.features.some(item => item.title === option.title)}
                            onSelect={(opt) => {
                              const currentFeatures = selections.features || [];
                              const isSelected = currentFeatures.some(item => item.title === opt.title);
                              const newFeatures = isSelected ? currentFeatures.filter(item => item.title !== opt.title) : [...currentFeatures, opt];
                              handleSelectionChange('features', newFeatures);
                            }}
                          />
                        ))}
                      </div>
                    );
                  }

                  if (Component) {
                    return (
                      <Component 
                        options={step.options} 
                        initialValue={selections[step.key]} 
                        data={selections[step.key]} 
                        selectedOption={selections[step.key]?.[0]} 
                        onSelectionChange={(value) => handleSelectionChange(step.key, value)} 
                        onDataChange={(value) => handleSelectionChange(step.key, value)} 
                        onSelect={(value) => handleSelectionChange(step.key, [value])} 
                        onPaletteChange={(value) => handleSelectionChange('palette', value)}
                        onFontChange={(value) => handleSelectionChange('fonts', value)}
                        selections={selections}
                        totalPrice={totalPrice}
                        onSubmit={handleFinalizeQuote}
                      />
                    );
                  }
                  
                  return null;
                })()}
              </div>
            );
          })}
        </div>
      </div>
      {totalPrice > 0 && (
        <QuoteSummaryBar totalPrice={totalPrice} onFinalize={handleFinalizeQuote} />
      )}
    </motion.div>
  );
};

export default QuoteBuilder;
