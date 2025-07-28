import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from './ProjectCard';

// Dados dos projetos (substitua com seus projetos reais)
const projectsData = [
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
        imgSrc: 'https://i.ibb.co/yQdCQJc/Opera-Instant-neo-2025-07-28-172423-la-doce-vida-vercel-app.png',
        title: 'La Doce Vida - E-commerce',
        description: 'E-commerce para confeitaria artesanal, com design delicado, catálogo de produtos e integração direta para pedidos via WhatsApp.',
        tags: ['React', 'Vite', 'CSS Modules'],
        link: 'https://la-doce-vida.vercel.app',
    },
    {
        category: 'Sistemas',
        imgSrc: 'https://i.ibb.co/HCv9FwB/Opera-Instant-neo-2025-07-28-172653-www-ruachdelivery-com-br.png',
        title: 'Ruach Delivery',
        description: 'Plataforma de delivery de alimentos com cardápio digital, sistema de pedidos online e área administrativa para gerenciamento.',
        tags: ['React', 'Firebase', 'Styled-Components'],
        link: 'https://www.ruachdelivery.com.br',
    },
    // Adicione mais projetos aqui...
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
