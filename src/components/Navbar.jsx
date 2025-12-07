import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import logoImage from '../assets/1 1.png';
import { navLinks, getNavLinkHref } from '../constants/navigation';
import Button from './ui/Button';
import { fadeIn, scaleIn, slideInRight } from '../utils/animations';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-8 xl:px-12 py-3 md:py-4 lg:py-6 min-w-0">
      {/* Left: Logo */}
      <motion.div 
        className="flex items-center flex-shrink-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={logoImage} 
          alt="SABLO Logo" 
          className="h-10 sm:h-12 md:h-12 lg:h-14 xl:h-16"
        />
      </motion.div>

      {/* Center: Navigation Links - Desktop Only */}
      <div className="hidden md:flex items-center gap-1.5 md:gap-2 lg:gap-3 xl:gap-6 flex-1 justify-center px-1 md:px-2 min-w-0">
        {navLinks.map((link, index) => (
          <motion.div 
            key={link.name} 
            className="flex items-center gap-0.5 flex-shrink-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            <a
              href={getNavLinkHref(link.name)}
              className="text-gray-800 font-medium text-[10px] md:text-[11px] lg:text-sm xl:text-base hover:text-dark-teal transition-colors whitespace-nowrap"
            >
              {/* Shorten long labels on tablets */}
              {link.name === 'Warranty Certificate' ? (
                <>
                  <span className="md:hidden lg:inline">{link.name}</span>
                  <span className="hidden md:inline lg:hidden">Warranty</span>
                </>
              ) : (
                link.name
              )}
            </a>
            {link.hasDropdown && (
              <ChevronDown className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-gray-800 flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Right: Get A Quote Button + Mobile Menu Button */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Get A Quote Button - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:block">
          <motion.div
            initial={scaleIn.initial}
            animate={scaleIn.animate}
            transition={{ ...scaleIn.transition, delay: 0.3 }}
          >
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              Get A Quote
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 hover:text-dark-teal transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            
            {/* Menu Panel */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
              initial={slideInRight.initial}
              animate={slideInRight.animate}
              exit={slideInRight.exit}
              transition={slideInRight.transition}
            >
              <div className="flex flex-col h-full p-6">
                {/* Header with Logo and Close */}
                <div className="flex justify-between items-center mb-8">
                  <img
                    src={logoImage}
                    alt="SABLO Logo"
                    className="h-12"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-800 hover:text-dark-teal transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={getNavLinkHref(link.name)}
                      className="flex items-center justify-between font-semibold text-lg text-gray-800 hover:text-dark-teal transition-colors py-2 border-b border-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Get A Quote Button */}
                <motion.div 
                  className="mt-auto pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button variant="primary" size="lg" className="w-full">
                    Get A Quote
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

