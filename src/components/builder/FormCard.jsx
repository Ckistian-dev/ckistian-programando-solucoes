import { motion } from 'framer-motion';

const FormCard = ({ data, onDataChange }) => {
  const handleChange = (e) => {
    onDataChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-bg-card p-8 rounded-xl shadow-lg space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-text-muted mb-2 font-semibold">Nome Completo (ou Empresa)</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={data.name || ''} 
          onChange={handleChange}
          placeholder="Ex: João da Silva ou Silva & Filhos Ltda"
          className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light" 
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-text-muted mb-2 font-semibold">E-mail ou Telefone para Contato</label>
        <input 
          type="text" 
          name="contact" 
          id="contact" 
          value={data.contact || ''} 
          onChange={handleChange}
          placeholder="Ex: (45) 99999-9999"
          className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light" 
        />
      </div>
      <div>
        <label htmlFor="segment" className="block text-text-muted mb-2 font-semibold">Segmento de Atuação</label>
        <input 
          type="text" 
          name="segment" 
          id="segment" 
          value={data.segment || ''} 
          onChange={handleChange}
          placeholder="Ex: Advocacia, Restaurante, Loja de Roupas"
          className="w-full bg-bg-dark border border-border-color rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none text-text-light" 
        />
      </div>
    </motion.div>
  );
};

export default FormCard;
