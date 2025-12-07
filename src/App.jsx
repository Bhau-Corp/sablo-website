import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SustainabilitySection from './sections/SustainabilitySection';
import ClientsSection from './sections/ClientsSection';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <HeroSection />
      </Layout>
      <SustainabilitySection />
      <ClientsSection />
      <AboutSection />
      <ProductsSection />
    </>
  );
}

export default App;
