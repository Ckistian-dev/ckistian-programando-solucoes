import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ **IMPORTANTE:** Substitua este número pelo seu número de WhatsApp com o código do país.
    const phoneNumber = '5545999861237'; 
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre o link do WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
    
    setMessage(''); // Limpa o campo de mensagem após o envio
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
          title="Vamos Conversar?"
          subtitle="Envie uma mensagem direta no WhatsApp"
        />

        <div className="mt-16 max-w-2xl mx-auto bg-bg-card p-8 md:p-12 rounded-lg shadow-xl">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-text-muted mb-2">Sua mensagem</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="6" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                  placeholder="Olá! Gostaria de fazer um orçamento para um projeto..."
                  className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                ></textarea>
              </div>
              <div>
                <Button variant="primary" className="w-full flex items-center justify-center gap-3">
                  <FaWhatsapp className="w-6 h-6" />
                  Enviar via WhatsApp
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
