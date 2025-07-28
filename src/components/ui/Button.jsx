import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '' }) => {
  // Define os estilos base e os estilos por variante (primário vs secundário)
  const baseStyles = "font-bold py-3 px-8 rounded-lg transition-all transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-dark";
  
  const styles = {
    primary: `bg-primary text-white hover:bg-opacity-90 focus:ring-primary ${baseStyles}`,
    secondary: `bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary ${baseStyles}`,
    accent: `bg-accent text-bg-dark hover:bg-opacity-90 focus:ring-accent ${baseStyles}`
  };

  const selectedStyle = styles[variant] || styles.primary;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  // Se o botão tiver um 'to' prop, ele se comporta como um link de navegação
  if (to) {
    return (
      <Link to={to}>
        <motion.button {...motionProps} className={`${selectedStyle} ${className}`}>
          {children}
        </motion.button>
      </Link>
    );
  }

  // Caso contrário, é um botão padrão
  return (
    <motion.button {...motionProps} className={`${selectedStyle} ${className}`}>
      {children}
    </motion.button>
  );
};

export default Button;
