import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- Imports das Páginas ---
import Home from './pages/Home';
import QuoteBuilder from './pages/QuoteBuilder';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectsPage from './pages/ProjectsPage';

// --- Imports dos Componentes Comuns ---
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingWhatsAppButton from './components/common/FloatingWhatsAppButton';

function App() {
  const location = useLocation();

  // ✅ Efeito que rola a página para o topo sempre que a rota muda.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      
      {/* O botão flutuante agora só aparece se não estiver na página do orçamentador */}
      {location.pathname !== '/crie-seu-site' && <FloatingWhatsAppButton />}
      
      <Footer />
    </>
  );
}

export default App;
