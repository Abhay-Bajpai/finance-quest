import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { GiSwordman, GiCastle, GiTreasureMap } from 'react-icons/gi';
import { FaUser, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  const glitchVariants = {
    animate: {
      textShadow: [
        '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
        '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080',
        '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff'
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      className="
        relative overflow-hidden
        bg-gradient-to-r from-bg-darkest/95 via-bg-card/90 to-bg-darkest/95
        backdrop-blur-xl 
        border-b-2 border-primary/40
        sticky top-0 z-50
        shadow-card-glow
      "
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse" />
      
      {/* Scanning line */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Corner tech elements */}
      <div className="absolute top-2 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/60 animate-pulse" />
      <div className="absolute top-2 right-4 w-4 h-4 border-r-2 border-t-2 border-primary/60 animate-pulse" />
      
      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Epic Logo */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 rounded-full border-2 border-primary bg-gradient-to-br from-primary/20 to-neon-purple/20 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(0, 255, 255, 0.3)',
                      '0 0 30px rgba(0, 255, 255, 0.6)',
                      '0 0 20px rgba(0, 255, 255, 0.3)'
                    ],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <GiSwordman className="text-2xl text-primary" />
                </motion.div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              </div>
              
              <div className="flex flex-col">
                <motion.span 
                  className="text-2xl font-cinzel text-holographic leading-tight"
                  variants={glitchVariants}
                  animate="animate"
                >
                  FINANCE QUEST
                </motion.span>
                <span className="text-xs font-cyber text-gray-400 tracking-widest">
                  ⟨ FINANCIAL WARFARE SYSTEM ⟩
                </span>
              </div>
            </NavLink>
          </motion.div>

          {/* Cyberpunk Navigation */}
          <motion.div 
            className="flex space-x-2"
            variants={itemVariants}
          >
            {/* Dashboard Link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/"
                className={({ isActive }) =>
                  `relative group
                  flex items-center space-x-3 px-6 py-3
                  font-cyber text-sm tracking-wider
                  border-2 rounded-lg
                  transition-all duration-300
                  ${
                    isActive
                      ? 'border-primary bg-primary/20 text-primary shadow-neon-blue' 
                      : 'border-primary/30 text-gray-300 hover:border-primary hover:text-primary hover:bg-primary/10'
                  }`
                }
              >
                <GiCastle className="text-xl" />
                <span>COMMAND CENTER</span>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-neon-blue"
                  initial={{ scaleX: location.pathname === '/' ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.div>
            
            {/* Goals Link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/goals"
                className={({ isActive }) =>
                  `relative group
                  flex items-center space-x-3 px-6 py-3
                  font-cyber text-sm tracking-wider
                  border-2 rounded-lg
                  transition-all duration-300
                  ${
                    isActive
                      ? 'border-neon-green bg-neon-green/20 text-neon-green shadow-neon-green' 
                      : 'border-neon-green/30 text-gray-300 hover:border-neon-green hover:text-neon-green hover:bg-neon-green/10'
                  }`
                }
              >
                <GiTreasureMap className="text-xl" />
                <span>OBJECTIVES</span>
                
                {/* Animated underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-green to-neon-blue"
                  initial={{ scaleX: location.pathname === '/goals' ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.div>

            {/* User Profile Icon */}
            <motion.div
              className="flex items-center ml-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-neon-purple bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center group cursor-pointer">
                  <FaUser className="text-neon-purple text-sm" />
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full border border-neon-yellow bg-neon-yellow/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaBolt className="text-neon-yellow text-xs" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm" />
    </motion.nav>
  );
};

export default Navbar;
