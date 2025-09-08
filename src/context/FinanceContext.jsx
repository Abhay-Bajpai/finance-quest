import React, { createContext, useContext, useState } from 'react';
import { FaUtensils, FaPlane, FaFilm, FaShoppingCart, FaHome } from 'react-icons/fa';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

// Mock data
const initialKingdoms = [
  { id: 'food', name: 'Food Kingdom', icon: FaUtensils, budget: 500, spent: 350 },
  { id: 'travel', name: 'Travel Dominion', icon: FaPlane, budget: 1000, spent: 1100 },
  { id: 'entertainment', name: 'Entertainment Empire', icon: FaFilm, budget: 300, spent: 150 },
  { id: 'shopping', name: 'Shopping Citadel', icon: FaShoppingCart, budget: 600, spent: 250 },
  { id: 'housing', name: 'Housing Realm', icon: FaHome, budget: 1500, spent: 1450 },
];

const initialGoals = [
    { id: 1, name: 'Forge the Legendary PS5', target: 500, saved: 250 },
    { id: 2, name: 'The Quest for a New Chariot (Car)', target: 5000, saved: 1200 },
    { id: 3, name: 'Pilgrimage to the Eastern Isles (Vacation)', target: 2000, saved: 1800 },
];

export const FinanceProvider = ({ children }) => {
  const [kingdoms, setKingdoms] = useState(initialKingdoms);
  const [goals, setGoals] = useState(initialGoals);
  const [level, setLevel] = useState(5);
  const [xp, setXp] = useState(120);
  const [xpToNextLevel, setXpToNextLevel] = useState(200);

  const totalSpent = kingdoms.reduce((acc, k) => acc + k.spent, 0);
  const totalBudget = kingdoms.reduce((acc, k) => acc + k.budget, 0);
  const totalSavings = totalBudget - totalSpent > 0 ? totalBudget - totalSpent : 0;

  const value = {
    kingdoms,
    goals,
    level,
    xp,
    xpToNextLevel,
    totalSavings
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};