import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import craftingStrength from '../assets/Crafting Strength, Shaping Dreams.png';
import { features } from '../constants/features';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { fadeInUp, fadeInRight, scaleIn, viewportOnce } from '../utils/animations';

const HeroSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <Section>
        {/* Two-column grid layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={fadeInUp.transition}
          >
            <img
              src={craftingStrength}
              alt="Crafting Strength, Shaping Dreams"
              className="w-full max-w-lg"
            />
          </motion.div>

          {/* Right Column: Paragraphs and Button */}
          <div className="flex flex-col gap-4 md:gap-6" style={{ justifySelf: 'start', alignItems: 'flex-start' }}>
            {/* Text paragraphs - right aligned on desktop */}
            <div className="flex flex-col gap-4 md:gap-6 md:items-end w-full">
              <motion.p 
                className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-[1.4] md:leading-[1.5] max-w-md md:max-w-lg opacity-80 text-left"
                initial={fadeInRight.initial}
                whileInView={{ ...fadeInRight.animate, opacity: 0.8 }}
                viewport={viewportOnce}
                transition={{ ...fadeInRight.transition, delay: 0.2 }}
              >
                Experience the art of precision and mastery with Sablo Plywood, where innovation meets endurance to create spaces that stand the test of time.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-[1.4] md:leading-[1.5] max-w-md md:max-w-lg opacity-80 text-left"
                initial={fadeInRight.initial}
                whileInView={{ ...fadeInRight.animate, opacity: 0.8 }}
                viewport={viewportOnce}
                transition={{ ...fadeInRight.transition, delay: 0.35 }}
              >
                Every sheet we produce embodies the perfect blend of engineering excellence and artistic craftsmanship, reflecting our legacy of trust and commitment to quality.
              </motion.p>
            </div>

            {/* Explore More Button - left aligned below paragraphs */}
            <motion.div 
              className="mt-2"
              style={{ alignSelf: 'flex-start', width: 'fit-content' }}
              initial={scaleIn.initial}
              whileInView={scaleIn.animate}
              viewport={viewportOnce}
              transition={{ ...scaleIn.transition, delay: 0.5 }}
            >
              <Button variant="gradient" size="md">
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore More</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Feature Icons Bar */}
      <Section variant="compact">
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 relative">
          {/* Icons and Labels Container */}
          <div className="relative grid grid-cols-4 md:grid-cols-4 gap-2 sm:gap-3 md:gap-8">
            {/* Connecting Line - starts from right edge of first icon, passes through centers */}
            {/* Mobile line - single row */}
            <motion.div 
              className="absolute md:hidden h-0.5 bg-gray-300 z-0"
              style={{
                top: '2rem',
                left: 'calc(12.5% + 1.5rem)',
                right: 'calc(12.5% + 1.5rem)',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            ></motion.div>
            {/* Desktop line */}
            <motion.div 
              className="hidden md:block absolute h-0.5 bg-gray-300 z-0 feature-line-desktop"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            ></motion.div>

            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col items-center relative"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              >
                {/* Circular Icon Container - Centered on line */}
                <motion.div 
                  className="relative z-10 bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 border-2 border-gray-300 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Placeholder icon image */}
                  <img
                    src={`https://picsum.photos/seed/${feature.name}${index}/200/200`}
                    alt={feature.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback to a working placeholder image
                      e.target.src = `https://via.placeholder.com/200/cccccc/666666?text=${feature.name.charAt(0)}`;
                    }}
                  />
                </motion.div>

                {/* Text Label with Dropdown Indicator */}
                <motion.div 
                  className="flex items-center gap-0.5 sm:gap-1 cursor-pointer" 
                  onClick={() => toggleDropdown(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-800 font-medium text-[10px] sm:text-xs md:text-base">
                    {feature.name}
                  </span>
                  <motion.div
                    animate={{ rotate: openDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800" />
                  </motion.div>
                </motion.div>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div 
                      className="mt-3 w-full max-w-xs bg-white rounded-lg p-4 shadow-lg border border-gray-200"
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default HeroSection;

