import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-[calc(100vw-32px)] md:max-w-[calc(100vw-108px)] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

