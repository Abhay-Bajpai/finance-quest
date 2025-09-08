import React from 'react';
import { motion } from 'framer-motion';
import { GiTreeBeehive, GiMagicSwirl, GiSparkles, GiCrystalGrowth } from 'react-icons/gi';
import { FaLeaf } from 'react-icons/fa';

const Garden = ({ savings }) => {
  // Enhanced growth calculation with multiple stages
  const growth = Math.min(Math.max(savings / 100, 0.1), 10);
  const treeHeight = Math.min(growth * 15, 120); // Max height 120px
  const particleCount = Math.min(Math.floor(growth * 3), 20);
  const glowIntensity = Math.min(growth / 2, 5);
  
  // Growth stages for different visual effects
  const getGrowthStage = () => {
    if (savings < 200) return { stage: 'seedling', color: 'neon-green', icon: FaLeaf };
    if (savings < 500) return { stage: 'sprout', color: 'neon-blue', icon: GiCrystalGrowth };
    if (savings < 1000) return { stage: 'young', color: 'primary', icon: GiTreeBeehive };
    if (savings < 2000) return { stage: 'mature', color: 'neon-purple', icon: GiMagicSwirl };
    return { stage: 'ancient', color: 'neon-pink', icon: GiSparkles };
  };

  const { stage, color, icon: StageIcon } = getGrowthStage();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 1, 0.7, 1],
      scale: [0, 1.2, 0.8, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Generate magical particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 200 - 100,
    y: Math.random() * 150 - 75,
    delay: Math.random() * 2,
    size: Math.random() * 8 + 4,
    color: ['neon-blue', 'neon-green', 'neon-purple', 'neon-pink', 'primary'][Math.floor(Math.random() * 5)]
  }));

  return (
    <motion.div 
      className="
        relative overflow-hidden
        bg-gradient-to-b from-bg-card/90 to-bg-darkest/95
        backdrop-blur-lg p-8 rounded-2xl 
        border-2 border-neon-green/50
        shadow-card-glow
        min-h-[300px]
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, rotateY: 2 }}
    >
      {/* Background energy field */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-green/10 via-transparent to-neon-purple/10 animate-pulse" />
      
      {/* Corner tech decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-neon-green animate-pulse" />
      <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-neon-green animate-pulse" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-neon-green animate-pulse" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-neon-green animate-pulse" />
      
      {/* Title with holographic effect */}
      <motion.div 
        className="text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-3xl font-cinzel text-holographic mb-2 animate-pulse-neon">
          ⟨ CYBER GROVE ⟩
        </h3>
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-2 h-2 rounded-full bg-${color} animate-pulse`} />
          <span className={`text-xs font-cyber tracking-widest text-${color} uppercase`}>
            {stage} PHASE ACTIVE
          </span>
          <div className={`w-2 h-2 rounded-full bg-${color} animate-pulse`} />
        </div>
      </motion.div>

      {/* Main tree visualization */}
      <div className="relative flex items-end justify-center h-32 mb-6">
        {/* Tree trunk with energy core */}
        <motion.div
          className="relative"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: `${treeHeight}px`, 
            opacity: 1,
          }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        >
          {/* Energy core */}
          <div className={`
            absolute bottom-0 left-1/2 transform -translate-x-1/2
            w-3 h-full
            bg-gradient-to-t from-${color} via-neon-blue to-${color}
            rounded-full
            shadow-neon-green
            animate-pulse
          `} />
          
          {/* Pulsing energy rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                border-2 border-${color} rounded-full opacity-30
              `}
              style={{
                width: `${(i + 1) * 20}px`,
                height: `${(i + 1) * 20}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* Main tree icon */}
          <motion.div 
            className={`
              absolute -top-4 left-1/2 -translate-x-1/2 
              text-${color} filter drop-shadow-lg
            `}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <StageIcon size={40 + growth * 2} />
          </motion.div>
        </motion.div>
        
        {/* Floating magical particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`
              absolute w-2 h-2 rounded-full
              bg-${particle.color}
              shadow-glow-soft-blue
            `}
            style={{
              left: `calc(50% + ${particle.x}px)`,
              bottom: `${Math.abs(particle.y)}px`,
            }}
            variants={particleVariants}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.x > 0 ? 20 : -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Stats display with cyberpunk styling */}
      <motion.div 
        className="space-y-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {/* Main savings display */}
        <div className="text-center">
          <div className={`
            px-6 py-3 
            bg-gradient-to-r from-bg-darkest via-bg-card to-bg-darkest
            border border-${color}/50 rounded-lg
            shadow-glow-soft-green
          `}>
            <span className="text-xs font-cyber text-gray-400 tracking-widest block mb-1">
              ⟨ ENERGY RESERVES ⟩
            </span>
            <span className={`text-2xl font-bold text-${color} font-cyber tracking-wider`}>
              ${savings.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Growth metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-xs font-cyber text-gray-400 tracking-widest mb-1">
              GROWTH RATE
            </div>
            <div className={`text-lg font-bold text-${color}`}>
              {(growth * 10).toFixed(1)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs font-cyber text-gray-400 tracking-widest mb-1">
              PARTICLE COUNT
            </div>
            <div className={`text-lg font-bold text-${color}`}>
              {particleCount}
            </div>
          </div>
        </div>

        {/* Mystical flavor text */}
        <div className="text-center pt-2">
          <p className="text-xs text-gray-400 font-cyber tracking-wide">
            ⟨ Your financial energy feeds the digital forest ⟩
          </p>
          <motion.p 
            className={`text-xs text-${color} font-cyber tracking-widest mt-1`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {savings > 1000 ? 
              ">>> ANCIENT WISDOM ACHIEVED <<<" :
              savings > 500 ?
                ">> DIGITAL HARMONY GROWING <<" :
                "> CYBER SEED AWAKENING <"
            }
          </motion.p>
        </div>
      </motion.div>

      {/* Scanning effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)'
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear",
          repeatDelay: 2
        }}
      />
    </motion.div>
  );
};

export default Garden;
