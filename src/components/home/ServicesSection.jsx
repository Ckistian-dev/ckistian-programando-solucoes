import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa'; // Ícones para cada serviço
import SectionTitle from '../ui/SectionTitle'; // Criaremos este componente a seguir

// Dados dos serviços para facilitar a manutenção e escalabilidade
const servicesData = [
  {
    icon: <FaCode className="w-10 h-10 text-primary" />,
    title: 'Criação de Sites e LPs',
    description: 'Desenvolvemos sites institucionais, landing pages e e-commerces responsivos e otimizados para performance, com foco na experiência do usuário (UX).',
  },
  {
    icon: <FaServer className="w-10 h-10 text-primary" />,
    title: 'Desenvolvimento de Sistemas',
    description: 'Criamos sistemas web personalizados, como dashboards, painéis de controle e plataformas complexas, para automatizar processos e gerenciar dados.',
  },
  {
    icon: <FaTools className="w-10 h-10 text-primary" />,
    title: 'Manutenção e Suporte',
    description: 'Oferecemos planos de manutenção para garantir que seu site ou sistema esteja sempre seguro, atualizado e funcionando perfeitamente.',
  },
];

// Variantes de animação para o container (a seção inteira)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Anima cada card com um intervalo
      when: "beforeChildren", // Garante que o container anime antes dos filhos
    },
  },
};

// Variantes para cada card de serviço
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-bg-card">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções completas para sua presença digital"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Anima quando a seção entra na tela
          viewport={{ once: true, amount: 0.3 }} // A animação acontece uma vez
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-bg-dark p-8 rounded-lg shadow-xl text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2"
              variants={cardVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-text-light mb-4">{service.title}</h3>
              <p className="text-text-muted flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
