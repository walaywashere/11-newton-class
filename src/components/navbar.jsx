import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Trophy, UserCheck, Sparkles } from 'lucide-react';
import { scrollToTopInstant } from '../utils/scrollToTop';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Students', path: '/students', icon: Users },
    { name: 'Leadership', path: '/leadership', icon: UserCheck },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
  ];

  // Smart color scheme based on current page
  const getPageTheme = () => {
    switch (location.pathname) {
      case '/students':
        return {
          gradient: 'from-purple-600 to-indigo-600',
          hoverColor: 'hover:text-purple-600',
          hoverBg: 'hover:bg-purple-50/50',
          mobileGradient: 'from-purple-600 to-indigo-600'
        };
      case '/leadership':
        return {
          gradient: 'from-indigo-600 to-purple-600',
          hoverColor: 'hover:text-indigo-600',
          hoverBg: 'hover:bg-indigo-50/50',
          mobileGradient: 'from-indigo-600 to-purple-600'
        };
      case '/achievements':
        return {
          gradient: 'from-orange-600 to-red-600',
          hoverColor: 'hover:text-orange-600',
          hoverBg: 'hover:bg-orange-50/50',
          mobileGradient: 'from-orange-600 to-red-600'
        };
      default: // Home
        return {
          gradient: 'from-purple-600 to-indigo-600',
          hoverColor: 'hover:text-purple-600',
          hoverBg: 'hover:bg-purple-50/50',
          mobileGradient: 'from-purple-600 to-indigo-600'
        };
    }
  };

  const theme = getPageTheme();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Island Bar Container */}
        <motion.div
          animate={{
            scale: scrolled ? 0.95 : 1,
            borderRadius: scrolled ? '24px' : '32px',
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`relative backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 ${
            scrolled 
              ? 'bg-white/80 shadow-xl' 
              : 'bg-white/70 shadow-2xl'
          }`}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: scrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 16px rgba(0, 0, 0, 0.08)' 
              : '0 16px 64px rgba(0, 0, 0, 0.15), 0 4px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Gradient Border Effect - Dynamic based on page */}
          <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-r ${theme.gradient} opacity-60 blur-sm`} style={{ opacity: 0.2 }} />
          
          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" onClick={scrollToTopInstant} className="flex items-center space-x-3 group">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-10 h-10 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                <div className="ml-2">
                  <div className={`text-base sm:text-xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent leading-tight`}>
                    Class 11-Newton
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Excellence in Motion</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={scrollToTopInstant}
                      className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isActive
                          ? 'text-white shadow-lg'
                          : `text-gray-700 ${theme.hoverColor} ${theme.hoverBg}`
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} rounded-xl`}
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                      <item.icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : ''}`} />
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-xl bg-gradient-to-r ${theme.mobileGradient} text-white shadow-lg hover:shadow-xl transition-all`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden mt-4"
            >
              <div 
                className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
              >
                <div className="py-2">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            scrollToTopInstant();
                          }}
                          className={`flex items-center space-x-3 px-6 py-4 transition-all duration-300 ${
                            isActive
                              ? `bg-gradient-to-r ${theme.mobileGradient} text-white`
                              : `text-gray-700 ${theme.hoverBg} ${theme.hoverColor}`
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;