import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleDarkMode } from '../store/portfolioSlice';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const darkMode = useSelector((state) => state.portfolio.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-white hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lucas Ramos
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'experience', 'projects', 'skills', 'education'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white hover:text-primary-400 transition-colors font-medium relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => dispatch(toggleDarkMode())}
              className="p-2 rounded-lg bg-gray-200/20 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-gray-300/30 dark:hover:bg-gray-600/50 transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {darkMode ? '☀️' : '🌙'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-primary-400 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-white hover:text-primary-400 transition-colors font-medium py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-white hover:text-primary-400 transition-colors font-medium py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-white hover:text-primary-400 transition-colors font-medium py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-white hover:text-primary-400 transition-colors font-medium py-2"
            >
              Education
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

