import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  // ✅ **IMPORTANTE:** Use o mesmo número de telefone da sua página de contato.
  const phoneNumber = '5545991068514';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-40 cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Animação de pulso para chamar atenção */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FaWhatsapp className="text-white text-4xl z-10" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
