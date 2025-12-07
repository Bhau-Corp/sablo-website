import React from 'react';
import Container from './Container';

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <Container className="bg-gray-50 rounded-xl shadow-sm">
        {children}
      </Container>
    </div>
  );
};

export default Layout;

