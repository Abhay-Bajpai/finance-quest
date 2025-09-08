import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Kingdom from './pages/Kingdom';
import Goals from './pages/Goals';

const App = () => {
    return (
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
    );
};

export default App;
