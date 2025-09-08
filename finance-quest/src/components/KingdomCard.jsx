import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const KingdomCard = ({ kingdom }) => {
  const { id, name, icon: Icon, budget, spent } = kingdom;
  const healthPercentage = (spent / budget) * 100;
  
  let barColor, glowColor;
  if (healthPercentage <= 75) {
    barColor = 'bg-accent-green';
    glowColor = 'shadow-glow-green';
  } else if (healthPercentage <= 100) {
    barColor = 'bg-yellow-500';
    glowColor = 'shadow-yellow-500/50';
  } else {
    barColor = 'bg-accent-red';
    glowColor = 'shadow-glow-red';
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/kingdom/${id}`} className="block">
        <div className="bg-bg-light/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 hover:border-primary/60 hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-1 group">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-cinzel text-white group-hover:text-glow-purple transition-colors">{name}</h3>
            <Icon className="text-3xl text-primary group-hover:scale-110 transition-transform" />
          </div>
          <div className='space-y-2'>
            <div className="flex justify-between text-sm font-orb-bit text-gray-300">
              <span>Spent: ${spent}</span>
              <span>Budget: ${budget}</span>
            </div>
            <ProgressBar value={budget - spent} max={budget} colorClass={barColor} glowClass={glowColor} />
            <p className='text-xs text-center text-gray-400 pt-1'>Kingdom Health</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default KingdomCard;