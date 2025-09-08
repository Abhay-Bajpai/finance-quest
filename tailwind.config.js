/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep space backgrounds
        'bg-darkest': '#0a0015',
        'bg-dark': '#1a0b2e',
        'bg-light': '#2d1b69',
        'bg-card': '#16213e',
        
        // Neon primaries
        'primary': '#00ffff',
        'primary-dark': '#0099cc',
        'secondary': '#ff00ff',
        'tertiary': '#ffff00',
        
        // Neon accents
        'neon-blue': '#00d4ff',
        'neon-purple': '#b537f7',
        'neon-pink': '#ff0080',
        'neon-green': '#00ff41',
        'neon-orange': '#ff9500',
        'neon-red': '#ff3030',
        'neon-yellow': '#ffff00',
        
        // Legacy colors for compatibility
        'accent-green': '#00ff41',
        'accent-red': '#ff3030',
        'glow-purple': '#b537f7',
      },
      fontFamily: {
        'cinzel': ['"Cinzel Decorative"', 'cursive'],
        'orb-bit': ['"Orbitron"', 'sans-serif'],
        'cyber': ['"Share Tech Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-neon': 'linear-gradient(45deg, #ff00ff, #00ffff)',
        'gradient-dark': 'linear-gradient(180deg, #0a0015 0%, #1a0b2e 50%, #2d1b69 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(22, 33, 62, 0.8), rgba(29, 27, 105, 0.3))',
      },
      boxShadow: {
        // Intense neon glows
        'neon-blue': '0 0 5px #00d4ff, 0 0 20px #00d4ff, 0 0 35px #00d4ff, 0 0 50px #00d4ff',
        'neon-purple': '0 0 5px #b537f7, 0 0 20px #b537f7, 0 0 35px #b537f7, 0 0 50px #b537f7',
        'neon-pink': '0 0 5px #ff0080, 0 0 20px #ff0080, 0 0 35px #ff0080, 0 0 50px #ff0080',
        'neon-green': '0 0 5px #00ff41, 0 0 20px #00ff41, 0 0 35px #00ff41, 0 0 50px #00ff41',
        'neon-yellow': '0 0 5px #ffff00, 0 0 20px #ffff00, 0 0 35px #ffff00, 0 0 50px #ffff00',
        'neon-red': '0 0 5px #ff3030, 0 0 20px #ff3030, 0 0 35px #ff3030, 0 0 50px #ff3030',
        
        // Subtle glows
        'glow-soft-blue': '0 0 15px rgba(0, 212, 255, 0.3)',
        'glow-soft-purple': '0 0 15px rgba(181, 55, 247, 0.3)',
        'glow-soft-green': '0 0 15px rgba(0, 255, 65, 0.3)',
        
        // Legacy shadows
        'glow-green': '0 0 5px #00ff41, 0 0 15px #00ff41, 0 0 25px #00ff41',
        'glow-purple': '0 0 5px #b537f7, 0 0 15px #b537f7, 0 0 25px #b537f7',
        'glow-red': '0 0 5px #ff3030, 0 0 15px #ff3030, 0 0 25px #ff3030',
        
        // Card effects
        'card-glow': '0 8px 32px 0 rgba(181, 55, 247, 0.37)',
        'card-hover': '0 20px 60px 0 rgba(0, 212, 255, 0.5)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'neon-flicker': 'neon-flicker 3s linear infinite',
        'particle-float': 'particle-float 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%': { textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' }
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(120deg)' },
          '66%': { transform: 'translateY(-60px) rotate(240deg)' }
        }
      }
    },
  },
  plugins: [],
};
