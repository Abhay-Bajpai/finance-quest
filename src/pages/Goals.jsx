import React from 'react';
import { useFinance } from '../context/FinanceContext';
import GoalCard from '../components/GoalCard';
import { motion } from 'framer-motion';

const Goals = () => {
  const { goals } = useFinance();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-5xl font-cinzel text-center text-secondary">Savings Quests</h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </motion.div>
       <div className="text-center pt-4">
        <button className="bg-secondary text-bg-dark font-bold py-2 px-6 rounded-lg font-orb-bit hover:bg-yellow-400 hover:shadow-yellow-400/50 transition-all duration-300">
          Embark on a New Quest
        </button>
      </div>
    </motion.div>
  );
};

export default Goals;