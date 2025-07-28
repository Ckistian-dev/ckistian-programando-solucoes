import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from './ProjectCard';

// Dados dos projetos (substitua com seus projetos reais)
const projectsData = [
  {
    imgSrc: 'https://placehold.co/600x400/25A1AF/FFFFFF?text=Projeto+Alpha',
    title: 'Sistema de Gestão Financeira',
    description: 'Plataforma web completa para controle de despesas e receitas, com dashboards interativos e relatórios automáticos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    imgSrc: 'https://placehold.co/600x400/E1A33B/2C2C3A?text=Projeto+Beta',
    title: 'E-commerce de Moda',
    description: 'Loja virtual moderna e responsiva, integrada com os principais gateways de pagamento e com um painel de gerenciamento de produtos intuitivo.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase'],
    link: '#',
  },
  {
    imgSrc: 'https://placehold.co/600x400/F5F5F5/2C2C3A?text=Projeto+Gama',
    title: 'Landing Page de Evento',
    description: 'Página de captura de leads para um evento de tecnologia, com design impactante, animações e formulário de inscrição.',
    tags: ['Vite', 'React', 'Framer Motion'],
    link: '#',
  },
];

// Variantes para o container da grade de projetos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Projetos em Destaque"
          subtitle="Conheça alguns dos nossos trabalhos"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
