import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border-color/50 text-text-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          
          {/* Coluna 1: Sobre */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Ckistian Programando Soluções</h3>
            <p className="text-sm">Desenvolvendo soluções digitais inovadoras para impulsionar o seu negócio. Qualidade, performance e design sob medida.</p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/crie-seu-site" className="hover:text-primary transition-colors font-bold">Orçamento</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors cursor-pointer">seu.email@exemplo.com</li>
              <li className="hover:text-primary transition-colors cursor-pointer">+55 (45) 99999-9999</li>
            </ul>
          </div>
          
          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="font-bold text-text-light mb-4">Siga-nos</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaGithub /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaWhatsapp /></a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Barra de Copyright */}
      <div className="bg-bg-dark py-4 border-t border-border-color/50">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {currentYear} Ckistian Programando Soluções. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
