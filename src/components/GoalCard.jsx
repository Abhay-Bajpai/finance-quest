import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { GiScrollQuill } from 'react-icons/gi';

const GoalCard = ({ goal }) => {
  const { name, target, saved } = goal;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } }
  };
  
  return (
    <motion.div 
      className="bg-bg-light/80 p-6 rounded-lg border border-primary/20"
      variants={cardVariants}
    >
      <div className="flex items-center mb-4">
        <GiScrollQuill className="text-secondary text-2xl mr-3"/>
        <h3 className="text-xl font-cinzel text-secondary">{name}</h3>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between font-orb-bit text-gray-300">
          <span>Progress</span>
          <span>${saved} / ${target}</span>
        </div>
        <ProgressBar value={saved} max={target} colorClass="bg-secondary" glowClass="shadow-yellow-400/50" />
      </div>
    </motion.div>
  );
};

export default GoalCard;