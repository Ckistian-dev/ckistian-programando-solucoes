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


function App() {
  // useLocation é um hook do react-router-dom que nos dá informações sobre a URL atual.
  // É essencial para o AnimatePresence saber quando a rota muda.
  const location = useLocation();

  return (
    // Fragmento raiz da nossa aplicação
    <>
      {/* O Header e o Footer ficam fora do Routes para aparecerem em todas as páginas */}
      <Header />

      {/* O 'pt-20' no main serve como um espaçamento para não ficar atrás do cabeçalho fixo */}
      <main className="pt-20">
        {/* AnimatePresence é o componente mágico do Framer Motion 
            que permite animar componentes quando eles são montados ou desmontados. */}
        <AnimatePresence mode="wait">
          {/* O 'key={location.pathname}' é crucial. Ele diz ao AnimatePresence para 
              tratar componentes em rotas diferentes como componentes distintos, 
              o que dispara as animações de entrada e saída. */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/crie-seu-site" element={<QuoteBuilder />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
