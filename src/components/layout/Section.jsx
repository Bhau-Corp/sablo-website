import React from 'react';

const Section = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12',
    compact: 'px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 md:pb-12',
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;

