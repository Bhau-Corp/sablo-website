import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/2 1.png';
import plantingImage from '../assets/3 1.png';
import { fadeInRight, viewportOnce } from '../utils/animations';
import Container from '../components/layout/Container';

const SustainabilitySection = () => {
  return (
    <div className="pt-5">
      <Container>
        <div 
          className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] max-h-[602px] rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Transparent grey box in lower left corner */}
          <motion.div
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 flex items-center gap-4 sm:gap-5 md:gap-6 max-w-[90%] sm:max-w-md md:max-w-lg"
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            viewport={viewportOnce}
            transition={fadeInRight.transition}
          >
            {/* Planting image */}
            <div className="flex-shrink-0">
              <img
                src={plantingImage}
                alt="Planting a seedling"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
              For Every Sheet We Craft, A Greener World Grows.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default SustainabilitySection;

