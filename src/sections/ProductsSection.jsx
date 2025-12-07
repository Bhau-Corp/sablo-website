import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../utils/animations';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';

const ProductsSection = () => {
  const [hoveredButton, setHoveredButton] = useState(0); // Default to first button

  const products = [
    {
      title: 'Landscape of Innovation',
      description: 'Starting a design journey may feel challenging, but with the right approach, anyone can build strength and beauty into their spaces.',
      leftImage: `https://picsum.photos/seed/innovation-left/416/465`,
      rightImage: `https://picsum.photos/seed/innovation-right/416/465`,
    },
    {
      title: 'Maintenance of Quality',
      description: 'We believe that great manufacturing is more than just production - it\'s about continuous improvement, care, and commitment.',
      leftImage: `https://picsum.photos/seed/quality-left/416/465`,
      rightImage: `https://picsum.photos/seed/quality-right/416/465`,
    },
    {
      title: 'Seasonal Excellence',
      description: 'We incorporate a diverse range of techniques & timbers that adapt beautifully to different environments, ensuring quality that lasts year-round.',
      leftImage: `https://picsum.photos/seed/seasonal-left/416/465`,
      rightImage: `https://picsum.photos/seed/seasonal-right/416/465`,
    },
    {
      title: 'Structural Craftsmanship',
      description: 'Like nurturing a garden, building with plywood requires attention and expertise - offering numerous advantages such as enhanced stability, moisture resistance, and dimensional balance.',
      leftImage: `https://picsum.photos/seed/craftsmanship-left/416/465`,
      rightImage: `https://picsum.photos/seed/craftsmanship-right/416/465`,
    },
  ];

  const currentProduct = products[hoveredButton];

  return (
    <div className="pt-8 md:pt-12 lg:pt-16 lg:pl-12">
      <Container>
        <Section>
          {/* Top Section: Header */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start pb-12 md:pb-16 lg:pb-20 mb-12 md:mb-16 lg:mb-20 border-b border-gray-300 md:pl-4 lg:pl-8">
            {/* Left Column: Label and Heading */}
            <div>
              <motion.p
                className="text-gray-500 text-sm sm:text-base mb-3 md:mb-4"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={fadeInUp.transition}
              >
                // Products
              </motion.p>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal mb-4 md:mb-6 leading-tight"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={{ ...fadeInUp.transition, delay: 0.1 }}
              >
                <span className="block">From Core to Finish</span>
                <span className="block">We've Got You</span>
                <span className="block">Covered.</span>
              </motion.h2>
            </div>

            {/* Right Column: Paragraph and Button */}
            <div className="flex flex-col gap-6 md:gap-8 pt-4 md:pt-6 lg:pt-8">
              <motion.p
                className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
              >
                <span className="lg:block">We believe craftsmanship is more than production</span>
                <span className="lg:block">it's about nurturing form and function.</span>
                <span className="lg:hidden">We believe craftsmanship is more than production it's about nurturing form and function.</span>
              </motion.p>
              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={{ ...fadeInUp.transition, delay: 0.3 }}
              >
                <Button variant="gradient" size="md">
                  Explore Products
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section: Images and Buttons */}
          {/* Desktop: Three-column layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Left Image - Top Left Corner */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${hoveredButton}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="relative flex items-start justify-start"
                style={{ height: '100%', minHeight: '500px' }}
              >
                <img
                  src={currentProduct.leftImage}
                  alt={currentProduct.title}
                  className="rounded-lg object-cover"
                  style={{ 
                    width: '60%',
                    aspectRatio: '416 / 465',
                    maxHeight: '400px'
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Center: Buttons */}
            <div className="flex flex-col gap-4">
              {products.map((product, index) => (
                <motion.button
                  key={index}
                  onMouseEnter={() => setHoveredButton(index)}
                  className={`text-left p-4 rounded-lg group ${
                    hoveredButton === index
                      ? 'bg-dark-teal'
                      : 'bg-transparent'
                  }`}
                  style={{
                    transition: 'background-color 0.4s ease-in-out'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 
                    className={`font-bold text-lg mb-2 text-center ${
                      hoveredButton === index 
                        ? 'text-sablo-green' 
                        : 'text-dark-teal group-hover:text-sablo-green'
                    }`}
                    style={{
                      transition: 'color 0.4s ease-in-out'
                    }}
                  >
                    {product.title}
                  </h3>
                  <p 
                    className={`text-sm leading-relaxed ${
                      hoveredButton === index ? 'text-white' : 'text-gray-700'
                    }`}
                    style={{
                      transition: 'color 0.4s ease-in-out'
                    }}
                  >
                    {product.description}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Right Image - Bottom Right Corner */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${hoveredButton}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="relative flex items-end justify-end"
                style={{ height: '100%', minHeight: '500px' }}
              >
                <img
                  src={currentProduct.rightImage}
                  alt={currentProduct.title}
                  className="rounded-lg object-cover"
                  style={{ 
                    width: '60%',
                    aspectRatio: '416 / 465',
                    maxHeight: '400px'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="md:hidden space-y-8">
            {products.map((product, index) => (
              <div key={index} className="space-y-4">
                {/* Button - Fixed teal background and white text in mobile */}
                <div className="w-full text-left p-4 rounded-lg bg-dark-teal">
                  <h3 className="font-bold text-lg mb-2 text-center text-white">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white">
                    {product.description}
                  </p>
                </div>

                {/* Images - Always visible in mobile */}
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={product.leftImage}
                    alt={product.title}
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ aspectRatio: '416 / 465' }}
                  />
                  <img
                    src={product.rightImage}
                    alt={product.title}
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ aspectRatio: '416 / 465' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ProductsSection;

