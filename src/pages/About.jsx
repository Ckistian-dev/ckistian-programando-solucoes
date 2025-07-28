import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHeart, FaUserSecret } from 'react-icons/fa';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

// Dados de Missão, Visão e Valores
const coreValues = [
  {
    icon: <FaBullseye className="w-8 h-8 text-primary" />,
    title: 'Missão',
    text: 'Criar soluções digitais personalizadas que não apenas atendam, mas superem as expectativas, impulsionando o sucesso e o crescimento dos nossos clientes.',
  },
  {
    icon: <FaEye className="w-8 h-8 text-primary" />,
    title: 'Visão',
    text: 'Ser referência em desenvolvimento de software sob medida, reconhecidos pela inovação, qualidade técnica e por construir parcerias de longo prazo.',
  },
  {
    icon: <FaHeart className="w-8 h-8 text-primary" />,
    title: 'Valores',
    text: 'Compromisso com a qualidade, transparência total no processo, paixão por tecnologia e foco incansável na satisfação do cliente.',
  },
];

// Dados do Processo de Trabalho
const workProcess = [
  { step: '01', title: 'Imersão e Descoberta', description: 'Entendemos profundamente seus objetivos e desafios para definir o escopo ideal do projeto.' },
  { step: '02', title: 'Design e UI/UX', description: 'Criamos interfaces intuitivas e atraentes, focadas na melhor experiência para o usuário final.' },
  { step: '03', title: 'Desenvolvimento', description: 'Codificamos a solução com as melhores tecnologias, garantindo performance e escalabilidade.' },
  { step: '04', title: 'Lançamento e Suporte', description: 'Realizamos a implantação e oferecemos suporte contínuo para garantir o sucesso do seu projeto.' },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-dark"
    >
      {/* Seção Principal */}
      <div className="pt-24 pb-12 bg-bg-card">
        <SectionTitle
          title="Nossa História, Sua Solução"
          subtitle="Mais que código, criamos parcerias de sucesso"
        />
      </div>

      {/* Seção Fundador */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-text-light">Quem está por trás do código?</h2>
            <p className="text-text-muted mb-4">Olá! Eu sou Ckistian, um desenvolvedor apaixonado por transformar ideias em realidade digital. Com anos de experiência no mercado, fundei a "Ckistian Programando Soluções" com um objetivo claro: oferecer um serviço de desenvolvimento que une excelência técnica com um atendimento próximo e transparente.</p>
            <p className="text-text-muted">Acredito que cada projeto é uma oportunidade única de resolver um problema real e fazer a diferença para um negócio.</p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-64 h-64 bg-bg-card rounded-full flex items-center justify-center">
              {/* Substitua por sua foto real */}
              <FaUserSecret className="w-32 h-32 text-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <section className="py-20 bg-bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-light mb-2">{value.title}</h3>
                <p className="text-text-muted">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Nosso Processo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nosso Processo de Trabalho" subtitle="Etapas claras para um resultado incrível" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 relative">
             <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-border-color hidden md:block"></div>
              {workProcess.map((item, index) => (
                 <motion.div 
                    key={index}
                    className="text-center relative bg-bg-dark px-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="w-20 h-20 rounded-full bg-primary text-bg-dark flex items-center justify-center font-bold text-2xl mx-auto mb-4 border-4 border-bg-card z-10 relative">{item.step}</div>
                    <h4 className="font-bold text-lg text-text-light mb-2">{item.title}</h4>
                    <p className="text-text-muted text-sm">{item.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      
       {/* Seção CTA */}
      <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-bg-dark mb-4">Tem uma ideia? Vamos transformá-la em realidade.</h2>
              <p className="text-bg-dark/80 mb-8 max-w-2xl mx-auto">Estou pronto para ouvir sobre seu projeto e criar uma solução digital que atenda perfeitamente às suas necessidades.</p>
              <Button to="/crie-seu-site" variant="accent">
                  Começar meu Orçamento
              </Button>
          </div>
      </section>
    </motion.div>
  );
};

export default About;
