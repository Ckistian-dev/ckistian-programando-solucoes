import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ação de envio do formulário (ex: API, EmailJS)
    // Por enquanto, vamos apenas mostrar os dados no console
    console.log('Formulário enviado:', formData);
    alert('Obrigado pelo seu contato! (Simulação de envio)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-bg-dark py-20"
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Vamos Conversar"
          subtitle="Estou pronto para ouvir sobre seu próximo projeto"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-16 bg-bg-card p-8 md:p-12 rounded-lg">
          {/* Informações de Contato */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-text-light mb-6">Informações de Contato</h3>
            <ul className="space-y-6 text-text-muted">
              <li className="flex items-center space-x-4">
                <FaEnvelope className="w-6 h-6 text-primary" />
                <span>seu.email@exemplo.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaPhone className="w-6 h-6 text-primary" />
                <span>+55 (45) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                <span>Toledo, Paraná - Atendimento Remoto</span>
              </li>
            </ul>
          </motion.div>

          {/* Formulário */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-muted mb-2">Seu nome</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-text-muted mb-2">Seu e-mail</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-text-muted mb-2">Sua mensagem</label>
                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
              </div>
              <div>
                {/* Note que o componente Button aqui não tem o 'to' prop, então ele funciona como um botão de submit */}
                <Button variant="primary" className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
