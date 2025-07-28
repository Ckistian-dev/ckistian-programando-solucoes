import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Variantes para o card individual
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const ProjectCard = ({ imgSrc, title, description, tags, link }) => {
  return (
    <motion.div
      className="bg-bg-card rounded-lg overflow-hidden shadow-xl group"
      variants={cardVariants}
    >
      <div className="relative overflow-hidden">
        <img 
          src={imgSrc} 
          alt={`Imagem do projeto ${title}`} 
          className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/3A3A4A/F5F5F5?text=Projeto'; }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-4xl transform hover:scale-125 transition-transform"
            aria-label={`Ver projeto ${title}`}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-text-light mb-2">{title}</h3>
        <p className="text-text-muted mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-bg-dark text-primary text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
