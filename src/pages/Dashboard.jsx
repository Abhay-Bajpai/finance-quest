import React from 'react';
import { motion } from 'framer-motion';
import { useFinance } from '../context/FinanceContext';
import ProgressBar from '../components/ProgressBar';
import KingdomCard from '../components/KingdomCard';
import Garden from '../components/Garden';
import AnimatedBackground from '../components/AnimatedBackground';
import { GiSwordman, GiTrophyCup, GiLightningBow } from 'react-icons/gi';
import { FaCrown, FaFire } from 'react-icons/fa';

const Dashboard = () => {
  const { kingdoms, level, xp, xpToNextLevel, totalSavings } = useFinance();
  
  const xpPercentage = (xp / xpToNextLevel) * 100;
  const totalBudget = kingdoms.reduce((acc, k) => acc + k.budget, 0);
  const totalSpent = kingdoms.reduce((acc, k) => acc + k.spent, 0);
  const efficiency = totalBudget > 0 ? ((totalBudget - totalSpent) / totalBudget * 100) : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      } 
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <motion.div 
        className="relative z-10 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        variants={containerVariants}
      >
        {/* Epic Player HUD */}
        <motion.div 
          className="
            relative overflow-hidden
            bg-gradient-to-r from-bg-card/95 via-bg-darkest/90 to-bg-card/95
            backdrop-blur-xl p-8 rounded-2xl 
            border-2 border-primary/60
            shadow-card-hover
          "
          variants={cardVariants}
          whileHover={{ scale: 1.02, rotateX: 1 }}
        >
          {/* HUD Corner Elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary animate-pulse" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-primary animate-pulse" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-primary animate-pulse" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary animate-pulse" />
          
          {/* Scanning line effect */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <motion.h2 
                className="text-4xl font-cinzel text-holographic mb-2 animate-pulse-neon"
                animate={{ textShadow: [
                  '0 0 10px #00ffff, 0 0 20px #00ffff',
                  '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
                  '0 0 10px #00ffff, 0 0 20px #00ffff'
                ]}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⟨ FINANCIAL OVERLORD ⟩
              </motion.h2>
              <div className="flex items-center justify-center space-x-2">
                <FaCrown className="text-primary animate-pulse" />
                <span className="text-sm font-cyber text-gray-400 tracking-widest">LEVEL {level} OPERATIVE</span>
                <FaCrown className="text-primary animate-pulse" />
              </div>
            </div>

            {/* Multi-column stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Level Display */}
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-3 rounded-full border-4 border-primary flex items-center justify-center bg-gradient-to-br from-primary/20 to-neon-purple/20"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(0, 255, 255, 0.5)',
                        '0 0 40px rgba(0, 255, 255, 0.8)',
                        '0 0 20px rgba(0, 255, 255, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GiSwordman className="text-3xl text-primary" />
                  </motion.div>
                  <span className="text-xs font-cyber text-gray-400 tracking-widest block">CURRENT LEVEL</span>
                  <span className="text-3xl text-primary font-bold font-cyber">{level}</span>
                </div>
              </motion.div>

              {/* XP Progress */}
              <motion.div 
                className="md:col-span-2"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-cyber text-gray-400 tracking-widest flex items-center">
                      <GiLightningBow className="mr-2" /> EXPERIENCE MATRIX
                    </span>
                    <span className="text-sm text-primary font-bold">{xp}/{xpToNextLevel}</span>
                  </div>
                  
                  {/* Enhanced XP Bar */}
                  <div className="relative h-4 bg-bg-darkest rounded-full overflow-hidden border-2 border-primary/30">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary via-neon-blue to-primary relative"
                      initial={{ width: 0 }}
                      animate={{ width: `${xpPercentage}%` }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    >
                      {/* Animated energy flow */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    
                    {/* Pulse effect */}
                    <motion.div 
                      className="absolute inset-0 bg-primary/20 rounded-full"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-400 font-cyber tracking-wide">
                      {Math.round(xpPercentage)}% TO NEXT ASCENSION
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Efficiency Metric */}
              <motion.div 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-3 rounded-full border-4 flex items-center justify-center ${
                      efficiency > 75 ? 'border-neon-green bg-gradient-to-br from-neon-green/20 to-neon-blue/20' :
                      efficiency > 50 ? 'border-neon-yellow bg-gradient-to-br from-neon-yellow/20 to-neon-orange/20' :
                      'border-neon-red bg-gradient-to-br from-neon-red/20 to-neon-pink/20'
                    }`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <GiTrophyCup className={`text-3xl ${
                      efficiency > 75 ? 'text-neon-green' :
                      efficiency > 50 ? 'text-neon-yellow' :
                      'text-neon-red'
                    }`} />
                  </motion.div>
                  <span className="text-xs font-cyber text-gray-400 tracking-widest block">EFFICIENCY</span>
                  <span className={`text-3xl font-bold font-cyber ${
                    efficiency > 75 ? 'text-neon-green' :
                    efficiency > 50 ? 'text-neon-yellow' :
                    'text-neon-red'
                  }`}>{Math.round(efficiency)}%</span>
                </div>
              </motion.div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-primary/20">
              <div className="text-center">
                <span className="text-xs font-cyber text-gray-400 tracking-widest block mb-1">TOTAL ALLOCATED</span>
                <span className="text-xl text-primary font-bold font-cyber">${totalBudget.toLocaleString()}</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-cyber text-gray-400 tracking-widest block mb-1">TOTAL CONSUMED</span>
                <span className="text-xl text-neon-orange font-bold font-cyber">${totalSpent.toLocaleString()}</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-cyber text-gray-400 tracking-widest block mb-1">NET RESERVES</span>
                <span className="text-xl text-neon-green font-bold font-cyber">${totalSavings.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Kingdoms Section - Takes up 3 columns */}
          <div className="xl:col-span-3 space-y-6">
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              variants={cardVariants}
            >
              <FaFire className="text-4xl text-neon-orange animate-pulse" />
              <h2 className="text-4xl font-cinzel text-holographic">⟨ RESOURCE SECTORS ⟩</h2>
              <FaFire className="text-4xl text-neon-orange animate-pulse" />
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {kingdoms.map((kingdom, index) => (
                <motion.div
                  key={kingdom.id}
                  variants={cardVariants}
                  custom={index}
                >
                  <KingdomCard kingdom={kingdom} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Garden Section - Takes up 1 column */}
          <motion.div 
            className="space-y-6"
            variants={cardVariants}
          >
            <Garden savings={totalSavings} />
          </motion.div>
        </div>

        {/* Power-up indicators */}
        <motion.div 
          className="fixed bottom-6 right-6 flex flex-col space-y-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {efficiency > 90 && (
            <motion.div 
              className="px-4 py-2 bg-neon-green/20 border border-neon-green rounded-lg backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-neon-green font-cyber text-sm tracking-wider">⚡ MASTER EFFICIENCY</span>
            </motion.div>
          )}
          {totalSavings > 1000 && (
            <motion.div 
              className="px-4 py-2 bg-primary/20 border border-primary rounded-lg backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-cyber text-sm tracking-wider">💎 WEALTH ARCHITECT</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
