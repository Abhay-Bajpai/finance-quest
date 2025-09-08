import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import KingdomCard from '../components/KingdomCard';
import ProgressBar from '../components/ProgressBar';
import { useFinance } from '../context/FinanceContext';

// Mock expense data for the chart
const mockExpenses = [
    { name: 'Week 1', amount: 100 },
    { name: 'Week 2', amount: 80 },
    { name: 'Week 3', amount: 120 },
    { name: 'Week 4', amount: 50 },
];

const Kingdom = () => {
    const { id } = useParams();
    const { kingdoms } = useFinance();
    const kingdom = kingdoms.find(k => k.id === id);

    if (!kingdom) {
        return <div className="text-center text-accent-red font-cinzel text-2xl">Kingdom not found!</div>;
    }

    const { name, icon: Icon, budget, spent } = kingdom;
    const percentage = (spent / budget) * 100;
    const remaining = budget - spent;
    
    let statusColor = 'text-accent-green';
    let statusText = 'Prospering';
    if (percentage > 75) {
        statusColor = 'text-yellow-500';
        statusText = 'Under Strain';
    }
    if (percentage > 100) {
        statusColor = 'text-accent-red';
        statusText = 'Under Siege';
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div className="flex items-center space-x-4">
                <Icon className="text-5xl text-primary"/>
                <h1 className="text-5xl font-cinzel text-white">{name}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-orb-bit">
                <div className="bg-bg-light p-4 rounded-lg border border-primary/20 text-center">
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className={`text-2xl font-bold ${statusColor}`}>{statusText}</p>
                </div>
                <div className="bg-bg-light p-4 rounded-lg border border-primary/20 text-center">
                    <p className="text-gray-400 text-sm">Spent</p>
                    <p className="text-2xl font-bold text-white">${spent} / <span className="text-base text-gray-300">${budget}</span></p>
                </div>
                <div className="bg-bg-light p-4 rounded-lg border border-primary/20 text-center">
                    <p className="text-gray-400 text-sm">Remaining</p>
                    <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-accent-green' : 'text-accent-red'}`}>${remaining.toFixed(2)}</p>
                </div>
            </div>
            
            <div className="bg-bg-light p-6 rounded-lg border border-primary/20">
                <h2 className="text-2xl font-cinzel text-primary mb-4">Weekly Spending Analysis</h2>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={mockExpenses} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <XAxis dataKey="name" stroke="#9ca3af" tick={{ fontFamily: 'Orbitron' }} />
                            <YAxis stroke="#9ca3af" tick={{ fontFamily: 'Orbitron' }} />
                            <Tooltip 
                                cursor={{fill: 'rgba(159, 122, 234, 0.1)'}}
                                contentStyle={{ 
                                    backgroundColor: '#2c1c4d', 
                                    border: '1px solid #9f7aea', 
                                    borderRadius: '0.5rem',
                                    fontFamily: 'Orbitron'
                                }} 
                            />
                            <Bar dataKey="amount" fill="#9f7aea" barSize={30} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="text-center">
                <button className="bg-primary text-white font-bold py-2 px-6 rounded-lg font-orb-bit hover:bg-glow-purple hover:shadow-glow-purple transition-all duration-300">
                    Add New Expense
                </button>
            </div>

        </motion.div>
    );
};

export default Kingdom;