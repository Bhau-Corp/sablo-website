import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-lg border border-gray-200';
  
  const motionProps = hover ? {
    whileHover: { scale: 1.02, y: -2 },
    transition: { type: "spring", stiffness: 300 }
  } : {};

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

