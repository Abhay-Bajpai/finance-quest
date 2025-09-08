import React from 'react';
import { motion } from 'framer-motion';
import { GiSprout } from 'react-icons/gi';

const Garden = ({ savings }) => {
  // Simple logic: growth is proportional to savings
  const growth = Math.min(Math.max(savings / 50, 1), 10); // Scale growth, cap at 10

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const leafVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  return (
    <motion.div 
      className="bg-bg-light/80 p-6 rounded-lg border border-primary/20 flex flex-col items-center justify-center min-h-[200px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-2xl font-cinzel text-center mb-4 text-accent-green">The Verdant Grove</h3>
      <motion.div 
        className="relative flex items-end justify-center h-24"
      >
        <motion.div
          className="bg-accent-green w-2 rounded-t-full absolute bottom-0"
          initial={{ height: 0 }}
          animate={{ height: `${growth * 10}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 shadow-glow-green rounded-full p-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <GiSprout style={{ fontSize: `${growth * 3 + 16}px` }} className="text-accent-green" />
          </motion.div>
        </motion.div>
      </motion.div>
      <p className="mt-4 font-orb-bit text-gray-300">
        Total Savings: <span className="text-accent-green font-bold">${savings.toFixed(2)}</span>
      </p>
      <p className="text-xs text-gray-400">Your savings nurture the grove's growth.</p>
    </motion.div>
  );
};

export default Garden;