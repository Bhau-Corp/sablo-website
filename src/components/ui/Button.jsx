import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'rounded-full font-semibold transition-all whitespace-nowrap';
  
  const variants = {
    primary: 'bg-dark-teal text-white hover:bg-opacity-90',
    gradient: 'bg-gradient-to-r from-sablo-green to-yellow-400 text-black hover:opacity-90',
  };
  
  const sizes = {
    sm: 'px-2 sm:px-2.5 md:px-2.5 lg:px-4.5 py-1.5 sm:py-1.5 md:py-1.5 lg:py-2.5 text-[9px] sm:text-[10px] md:text-[10px] lg:text-[12px]',
    md: 'px-3.5 sm:px-4.5 md:px-6 py-2 sm:py-2.5 md:py-3 text-[11px] sm:text-[12px]',
    lg: 'px-6 py-3 text-sm',
  };

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

