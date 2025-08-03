import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card border-t border-border-color/50 text-text-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Layout atualizado: colunas extras ocultas no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

          {/* Coluna 1: Sobre */}
          <div className="md:col-span-1">
            <Link to="/" className="flex justify-center mb-4">
              <img
                src="https://i.ibb.co/GvcKbmSb/Chat-GPT-Image-14-de-abr-de-2025-15-33-47-removebg-preview.png"
                alt="Ckistian Programando Soluções Logo"
                className="h-60 w-auto transition-transform duration-300 hover:scale-105 justify-self-center my-[-80px]"
              />
            </Link>
            <p className="text-sm max-w-xs mx-auto md:mx-0">Desenvolvendo soluções digitais inovadoras para impulsionar o seu negócio.</p>
          </div>

          {/* Coluna 2: Navegação (Oculta no mobile) */}
          <div className="hidden md:block">
            <h4 className="font-bold text-text-light mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
              <li><Link to="/crie-seu-site" className="hover:text-primary transition-colors font-bold">Orçamento</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato (Oculta no mobile) */}
          <div className="hidden md:block">
            <h4 className="font-bold text-text-light mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors cursor-pointer">crisgkist@gmail.com</li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=5545991068514&text=Olá%21+Tenho+interesse+no+seu+trabalho.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">
                  +55 (45) 99106-8514
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais (Oculta no mobile) */}
          <div className="hidden md:block">
            <h4 className="font-bold text-text-light mb-4">Siga-nos</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/cristiankist" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaLinkedin /></a>
              <a href="https://github.com/Ckistian-dev" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaGithub /></a>
              <a href="https://api.whatsapp.com/send/?phone=5545991068514&text=Olá%21+Tenho+interesse+no+seu+trabalho.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors"><FaWhatsapp /></a>
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
