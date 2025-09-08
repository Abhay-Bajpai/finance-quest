import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiCrystalWand } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const activeLink = 'text-white shadow-glow-purple';
  const normalLink = 'text-gray-400 hover:text-white transition-all duration-300';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-bg-light/50 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2 text-2xl font-cinzel text-white hover:text-glow-purple transition-colors">
            <GiCrystalWand className="text-primary"/>
            <span>Finance Quest</span>
          </NavLink>
          <div className="flex items-center space-x-4 md:space-x-6 font-orb-bit text-sm md:text-base">
            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Dashboard</NavLink>
            <NavLink to="/goals" className={({isActive}) => isActive ? activeLink : normalLink}>Quests</NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;