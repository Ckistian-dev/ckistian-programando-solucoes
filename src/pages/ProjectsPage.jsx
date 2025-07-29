import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/home/ProjectCard'; // Reutilizaremos o card da home

// --- DADOS DOS PROJETOS ---
// ✅ Dados atualizados com seus projetos reais.
const allProjects = [
  {
    category: 'Sistemas',
    imgSrc: 'https://i.ibb.co/rRZHkqxb/Captura-de-tela-2025-07-28-173704.jpg',
    title: 'ERP Talatto - Sistema de Gestão',
    description: 'Sistema de gestão empresarial (ERP) completo para otimizar processos, com controle de finanças, estoque e relatórios interativos.',
    tags: ['React', 'Python', 'MySQL', 'Styled-Components'],
    link: 'https://erp-talatto.vercel.app/login',
  },
  {
    category: 'Sites',
    imgSrc: 'https://i.ibb.co/K1T3Fm9/Captura-de-tela-2025-07-28-194038.jpg',
    title: 'La Doce Vida',
    description: 'E-commerce para confeitaria artesanal, com design delicado, catálogo de produtos e integração direta para pedidos via WhatsApp.',
    tags: ['React', 'Vite', 'CSS Modules'],
    link: 'https://la-doce-vida.vercel.app',
  },
  {
    category: 'Sites',
    imgSrc: 'https://i.ibb.co/fd8rDb9V/Captura-de-tela-2025-07-28-194131.jpg',
    title: 'Ruach Delivery',
    description: 'Plataforma de delivery de alimentos com cardápio digital, sistema de pedidos online e área administrativa para gerenciamento.',
    tags: ['React', 'Firebase', 'Styled-Components'],
    link: 'https://www.ruachdelivery.com.br',
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
              className={`px-6 py-2 font-semibold rounded-lg transition-colors ${activeFilter === category
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
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
