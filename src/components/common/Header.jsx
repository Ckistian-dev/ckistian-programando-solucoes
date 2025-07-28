import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones para o menu mobile
import { motion, AnimatePresence } from 'framer-motion';

// Lista de links para facilitar a manutenção
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estilo para o link ativo, usando uma função para o className do NavLink
  const activeLinkStyle = ({ isActive }) => 
    isActive ? 'text-primary' : 'text-text-light';

  return (
    <header className="bg-bg-dark/80 backdrop-blur-sm fixed top-0 left-0 w-full z-50 border-b border-border-color/50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo da Empresa */}
        <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
          Ckistian Programando Soluções
        </Link>

        {/* Navegação para Desktop */}
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

        {/* Botão de Orçamento para Desktop */}
        <div className="hidden md:block">
            <Link 
              to="/crie-seu-site"
              className="bg-accent text-bg-dark font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105"
            >
              Faça um Orçamento
            </Link>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl text-text-light">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-bg-card absolute w-full left-0 shadow-xl"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  className={`${activeLinkStyle} hover:text-primary transition-colors text-lg`}
                  onClick={() => setMobileMenuOpen(false)} // Fecha o menu ao clicar
                >
                  {link.title}
                </NavLink>
              ))}
              <Link 
                to="/crie-seu-site"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-bg-dark font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all mt-4"
              >
                Faça um Orçamento
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
