import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- PLACEHOLDERS PARA PÁGINAS E COMPONENTES ---
// Vamos criar estes arquivos nos próximos passos. 
// Por enquanto, podemos criá-los como componentes simples para fazer o código funcionar.

// Exemplo de um componente placeholder que você pode criar temporariamente:
// const Home = () => <div className="h-screen text-center pt-40">Página Inicial</div>;
// const QuoteBuilder = () => <div className="h-screen text-center pt-40">Crie seu Site</div>;
// const About = () => <div className="h-screen text-center pt-40">Sobre Nós</div>;
// const Contact = () => <div className="h-screen text-center pt-40">Contato</div>;
// const Header = () => <header className="bg-bg-card h-20 fixed top-0 w-full z-50 flex items-center justify-center">Cabeçalho</header>;
// const Footer = () => <footer className="bg-bg-card h-40 flex items-center justify-center">Rodapé</footer>;

// Quando os arquivos reais forem criados, substitua os placeholders pelos imports corretos:
import Home from './pages/Home';
import QuoteBuilder from './pages/QuoteBuilder';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  // useLocation é um hook do react-router-dom que nos dá informações sobre a URL atual.
  // É essencial para o AnimatePresence saber quando a rota muda.
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/crie-seu-site" element={<QuoteBuilder />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/projetos" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
