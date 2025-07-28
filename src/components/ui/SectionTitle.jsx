import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-light">
        {title}
      </h2>
      <p className="text-lg text-primary mt-2">{subtitle}</p>
      <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
};

export default SectionTitle;
