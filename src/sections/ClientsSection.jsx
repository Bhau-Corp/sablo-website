import React from 'react';
import { motion } from 'framer-motion';
import clientsImage from '../assets/5 1.png';
import { fadeInUp, viewportOnce } from '../utils/animations';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';

const ClientsSection = () => {
  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <Container>
        <Section>
          <div className="flex flex-col items-center text-center">
            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal mb-4 sm:mb-6"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={fadeInUp.transition}
            >
              Our Clients
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl md:max-w-3xl mb-6 sm:mb-8 md:mb-10"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              Behind every elegant space, there's trust. We're proud to partner with creators who share our passion for quality and sustainable design.
            </motion.p>

            {/* Image */}
            <motion.div
              className="w-full max-w-4xl"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
            >
              <img
                src={clientsImage}
                alt="Our Clients"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default ClientsSection;

