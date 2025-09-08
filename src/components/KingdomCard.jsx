import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const KingdomCard = ({ kingdom }) => {
  const { id, name, icon: Icon, budget, spent } = kingdom;
  const healthPercentage = (spent / budget) * 100;
  const remaining = budget - spent;
  
  let barColor, glowColor, borderColor, statusText, statusColor;
  if (healthPercentage <= 50) {
    barColor = 'from-neon-green via-neon-blue to-neon-green';
    glowColor = 'shadow-neon-green';
    borderColor = 'border-neon-green';
    statusText = 'OPTIMAL';
    statusColor = 'text-neon-green';
  } else if (healthPercentage <= 75) {
    barColor = 'from-neon-blue via-primary to-neon-blue';
    glowColor = 'shadow-neon-blue';
    borderColor = 'border-neon-blue';
    statusText = 'STABLE';
    statusColor = 'text-neon-blue';
  } else if (healthPercentage <= 100) {
    barColor = 'from-neon-yellow via-neon-orange to-neon-yellow';
    glowColor = 'shadow-neon-yellow';
    borderColor = 'border-neon-yellow';
    statusText = 'CAUTION';
    statusColor = 'text-neon-yellow';
  } else {
    barColor = 'from-neon-red via-neon-pink to-neon-red';
    glowColor = 'shadow-neon-red';
    borderColor = 'border-neon-red';
    statusText = 'CRITICAL';
    statusColor = 'text-neon-red';
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      } 
    }
  };

  return (
    <motion.div variants={cardVariants} className="perspective-1000">
      <Link to={`/kingdom/${id}`} className="block">
        <motion.div 
          className={`
            relative overflow-hidden
            bg-gradient-card backdrop-blur-lg 
            p-6 rounded-xl 
            border-2 ${borderColor}
            ${glowColor}
            transition-all duration-500 
            transform-gpu
            group
            hover:scale-105
            hover:rotate-1
          `}
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            z: 50
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: `linear-gradient(145deg, 
              rgba(22, 33, 62, 0.9), 
              rgba(29, 27, 105, 0.4), 
              rgba(22, 33, 62, 0.9)
            )`
          }}
        >
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-1000 ease-out" />
          
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary animate-pulse" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary animate-pulse" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary animate-pulse" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary animate-pulse" />
          
          {/* Status indicator */}
          <div className="absolute top-4 right-4">
            <motion.div 
              className={`px-3 py-1 rounded-full border ${borderColor} ${statusColor} text-xs font-cyber tracking-wider`}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {statusText}
            </motion.div>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-cinzel text-holographic group-hover:animate-pulse-neon mb-1">
                  {name}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${statusColor.replace('text-', 'bg-')} animate-pulse`} />
                  <span className="text-xs font-cyber text-gray-400 tracking-widest">SECTOR {id.toUpperCase()}</span>
                </div>
              </div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className={`text-5xl ${statusColor} filter drop-shadow-lg`} />
                <div className={`absolute inset-0 ${statusColor.replace('text-', 'bg-')} opacity-20 rounded-full blur-xl animate-pulse`} />
              </motion.div>
            </div>

            {/* Stats display */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-cyber text-gray-400 tracking-widest">ALLOCATED</span>
                  <span className="text-lg font-bold text-primary">${budget.toLocaleString()}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs font-cyber text-gray-400 tracking-widest">CONSUMED</span>
                  <span className={`text-lg font-bold ${statusColor}`}>${spent.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-cyber text-gray-400 tracking-widest">RESOURCE LEVEL</span>
                  <span className={`text-sm font-bold ${statusColor}`}>{Math.round(healthPercentage)}%</span>
                </div>
                
                {/* Enhanced progress bar */}
                <div className="relative h-3 bg-bg-darkest rounded-full overflow-hidden border border-primary/30">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${barColor} relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(healthPercentage, 100)}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {/* Animated shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  {/* Overflow indicator */}
                  {healthPercentage > 100 && (
                    <motion.div 
                      className="absolute right-0 top-0 h-full w-2 bg-neon-red animate-pulse"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  )}
                </div>
              </div>

              {/* Remaining budget display */}
              <div className="flex justify-center pt-2">
                <div className="px-4 py-2 bg-bg-darkest/60 rounded-lg border border-primary/20">
                  <span className="text-xs font-cyber text-gray-400 tracking-widest">AVAILABLE: </span>
                  <span className={`font-bold ${remaining >= 0 ? 'text-neon-green' : 'text-neon-red'}`}>
                    ${Math.abs(remaining).toLocaleString()}
                    {remaining < 0 && ' OVERDRAWN'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scan lines effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div 
              className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ y: [0, 200, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default KingdomCard;
