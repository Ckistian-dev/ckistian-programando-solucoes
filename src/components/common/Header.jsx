import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTES DO MENU (para melhor organização) ---

// Variante para a animação do container dos links
const navContainerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

// Variante para a animação de cada item do menu
const navItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// Componente para o ícone animado (Hamburger -> X)
const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="relative z-50 w-8 h-8 focus:outline-none pr-4">
    <motion.div
      className="absolute h-0.5 w-8 bg-text-light"
      variants={{
        open: { rotate: 45, y: 3 },
        closed: { rotate: 0, y: -8 }, // ✅ Aumentado de -4 para -6
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute h-0.5 w-8 bg-text-light"
      variants={{
        open: { opacity: 0 },
        closed: { opacity: 1 },
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.1 }}
    />
    <motion.div
      className="absolute h-0.5 w-8 bg-text-light"
      variants={{
        open: { rotate: -45, y: 3 },
        closed: { rotate: 0, y: 8 }, // ✅ Aumentado de 4 para 6
      }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    />
  </button>
);


// --- COMPONENTE PRINCIPAL DO HEADER ---

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkStyle = ({ isActive }) =>
    isActive ? 'text-primary' : 'text-text-light';

  return (
    <>
      <header className="bg-bg-dark/80 backdrop-blur-sm fixed top-0 left-0 w-full z-40 border-b border-border-color/50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          
          <Link to="/">
            <img 
              src="https://i.ibb.co/GvcKbmSb/Chat-GPT-Image-14-de-abr-de-2025-15-33-47-removebg-preview.png" 
              alt="Ckistian Programando Soluções Logo"
              // A altura foi ajustada para caber no cabeçalho
              className="h-40 w-auto transition-transform duration-300 hover:scale-105 pt-2"
            />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={`${activeLinkStyle} hover:text-primary transition-colors font-medium`}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
              <Link 
                to="/crie-seu-site"
                className="bg-accent text-bg-dark font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105"
              >
                Faça um Orçamento
              </Link>
          </div>

          {/* Botão do Menu Mobile Animado */}
          <div className="md:hidden">
            <MenuToggle toggle={() => setMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />
          </div>
        </div>
      </header>
      
      {/* Menu Mobile em Tela Cheia */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg-dark/95 backdrop-blur-md z-30 flex items-center justify-center"
          >
            <motion.nav 
              className="flex flex-col items-center space-y-8"
              variants={navContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={navItemVariants}>
                  <NavLink
                    to={link.path} 
                    className={`${activeLinkStyle} hover:text-primary transition-colors text-3xl font-bold`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={navItemVariants}>
                <Link 
                  to="/crie-seu-site"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-accent text-bg-dark font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all text-xl"
                >
                  Faça um Orçamento
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
