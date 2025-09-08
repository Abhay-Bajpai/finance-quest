import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ value, max, colorClass, glowClass }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
  
  const barVariants = {
    hidden: { width: "0%" },
    visible: { width: `${percentage}%`, transition: { duration: 1, ease: "easeInOut" } }
  };

  return (
    <motion.div 
      className="w-full bg-black/50 rounded-full h-4 border-2 border-primary/30 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`h-full rounded-full ${colorClass} relative`}
        variants={barVariants}
      >
        <div className={`absolute top-0 left-0 h-full w-full ${glowClass} opacity-50 blur-sm`}></div>
      </motion.div>
    </motion.div>
  );
};

export default ProgressBar;