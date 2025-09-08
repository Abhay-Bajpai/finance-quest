import React from 'react';
import { motion } from 'framer-motion';
import { useFinance } from '../context/FinanceContext';
import ProgressBar from '../components/ProgressBar';
import KingdomCard from '../components/KingdomCard';
import Garden from '../components/Garden';

const Dashboard = () => {
  const { kingdoms, level, xp, xpToNextLevel, totalSavings } = useFinance();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      {/* Player Stats Section */}
      <motion.div 
        className="bg-bg-light/80 p-6 rounded-lg border border-primary/20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-cinzel text-primary mb-4">Adventurer's Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-orb-bit">
          <div className="text-center">
            <p className="text-gray-400 text-sm">Level</p>
            <p className="text-3xl text-white font-bold">{level}</p>
          </div>
          <div className="md:col-span-2">
             <p className="text-gray-400 text-sm mb-2">XP</p>
             <ProgressBar value={xp} max={xpToNextLevel} colorClass="bg-primary" glowClass="shadow-glow-purple" />
             <p className="text-right text-xs mt-1 text-gray-300">{xp} / {xpToNextLevel} XP</p>
          </div>
        </div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kingdoms Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-cinzel text-white">The Kingdoms</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {kingdoms.map(kingdom => (
              <KingdomCard key={kingdom.id} kingdom={kingdom} />
            ))}
          </motion.div>
        </div>

        {/* Garden/Savings Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-cinzel text-white">Growth</h2>
          <Garden savings={totalSavings} />
        </div>

      </div>
    </motion.div>
  );
};

export default Dashboard;
