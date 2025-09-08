import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Kingdom from './pages/Kingdom';
import Goals from './pages/Goals';
import { FinanceProvider } from './context/FinanceContext';

const App = () => {
    return (
        <FinanceProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/kingdom/:id" element={<Kingdom />} />
                            <Route path="/goals" element={<Goals />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </FinanceProvider>
    );
};

export default App;