import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/home/ProjectCard'; // Reutilizaremos o card da home

// --- DADOS DOS PROJETOS ---
// Adicione todos os seus projetos aqui, com uma categoria.
const allProjects = [
  {
    category: 'Sistemas',
    imgSrc: 'https://placehold.co/600x400/25A1AF/FFFFFF?text=Projeto+Alpha',
    title: 'Sistema de Gestão Financeira',
    description: 'Plataforma web completa para controle de despesas e receitas, com dashboards interativos e relatórios automáticos.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    category: 'Sites',
    imgSrc: 'https://placehold.co/600x400/E1A33B/2C2C3A?text=Projeto+Beta',
    title: 'E-commerce de Moda',
    description: 'Loja virtual moderna e responsiva, integrada com os principais gateways de pagamento e com um painel de gerenciamento de produtos intuitivo.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Firebase'],
    link: '#',
  },
  {
    category: 'Sites',
    imgSrc: 'https://placehold.co/600x400/F5F5F5/2C2C3A?text=Projeto+Gama',
    title: 'Landing Page de Evento',
    description: 'Página de captura de leads para um evento de tecnologia, com design impactante, animações e formulário de inscrição.',
    tags: ['Vite', 'React', 'Framer Motion'],
    link: '#',
  },
  {
    category: 'Sistemas',
    imgSrc: 'https://placehold.co/600x400/3A3A4A/FFFFFF?text=Projeto+Delta',
    title: 'Dashboard de Análise de Dados',
    description: 'Ferramenta de BI para visualização de métricas de vendas em tempo real, com gráficos dinâmicos e filtros avançados.',
    tags: ['React', 'D3.js', 'Express'],
    link: '#',
  },
  // Adicione mais projetos aqui...
];

const filterCategories = ['Todos', 'Sites', 'Sistemas'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

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
          title="Nosso Portfólio"
          subtitle="Explore os projetos que tivemos o prazer de desenvolver"
        />

        {/* Filtros */}
        <div className="flex justify-center gap-4 my-12">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-bg-card text-text-muted hover:bg-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grade de Projetos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
