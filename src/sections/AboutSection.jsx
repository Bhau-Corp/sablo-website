import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/6 1.png';
import cardImage from '../assets/7 1.png';
import { fadeInUp, fadeInRight, viewportOnce } from '../utils/animations';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';

const AboutSection = () => {
  return (
    <div className="pt-12 md:pt-16 lg:pt-20">
      <Container>
        <Section>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column */}
            <div className="flex flex-col">
              {/* About Sablo label */}
              <motion.p
                className="text-gray-500 text-sm sm:text-base mb-2"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={fadeInUp.transition}
              >
                // About Sablo
              </motion.p>

              {/* Main Heading */}
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-teal mb-6 sm:mb-8 leading-tight"
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={viewportOnce}
                transition={{ ...fadeInUp.transition, delay: 0.1 }}
              >
                <span className="xl:inline">Our Main Goal is to</span>
                <br className="hidden xl:inline" />
                <span className="xl:inline"> Grow the Green Journey</span>
                <br className="hidden xl:inline" />
                <span className="xl:inline"> of Wood</span>
              </motion.h2>

              {/* Card and Paragraph in same row */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start mb-6 sm:mb-8">
                {/* Card with image and text */}
                <motion.div
                  className="relative max-w-[133px] sm:max-w-[160px] md:max-w-[187px] lg:max-w-[200px] xl:max-w-[213px]"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={viewportOnce}
                  transition={{ ...fadeInUp.transition, delay: 0.2 }}
                >
                  <div className="relative">
                    <img
                      src={cardImage}
                      alt="Trusted Dealer Network"
                      className="w-full rounded-lg"
                    />
                    {/* Text overlay on white part of card */}
                    <div className="absolute top-[55%] md:top-[58%] lg:top-[55%] left-0 right-0 px-2 py-2 sm:px-3 sm:py-2.5 md:px-3 md:py-3">
                      <p className="text-gray-800 text-[10px] sm:text-xs md:text-sm mb-1 sm:mb-1.5 leading-tight">
                        A Trusted Dealer Network Across
                      </p>
                      <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">
                        35+ Cities
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Paragraph and Button */}
                <motion.div
                  className="flex flex-col"
                  initial={fadeInRight.initial}
                  whileInView={fadeInRight.animate}
                  viewport={viewportOnce}
                  transition={{ ...fadeInRight.transition, delay: 0.3 }}
                >
                  <p className="text-gray-700 text-sm sm:text-base md:text-base md:max-w-md lg:text-base lg:max-w-sm xl:text-lg xl:max-w-md leading-[1.7] md:leading-[1.8] lg:leading-[1.9] mb-6 sm:mb-8">
                    We believe that craftsmanship, like gardening, is more than just creating products — it's about nurturing life, fostering connections, and shaping spaces that inspire. From compact urban interiors to large architectural projects, our mission is to empower every builder, craftsman, and designer with the finest plywood solutions that bring nature's strength into every home.
                  </p>

                  {/* More About Us Button */}
                  <motion.div
                    initial={fadeInUp.initial}
                    whileInView={fadeInUp.animate}
                    viewport={viewportOnce}
                    transition={{ ...fadeInUp.transition, delay: 0.4 }}
                  >
                    <Button variant="gradient" size="md">
                      More About Us
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              className="md:sticky md:top-8"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={viewportOnce}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <img
                src={aboutImage}
                alt="About Sablo"
                className=" md:h-2/100 lg:w-2/3 rounded-lg object-contain"
                style={{ 
                  aspectRatio: '730 / 888',
                  maxHeight: 'calc(100% - 150px)',
                  height: 'auto'
                }}
              />
            </motion.div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default AboutSection;

