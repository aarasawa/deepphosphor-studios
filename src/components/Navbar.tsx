import { motion } from 'motion/react';
import { Menu, X, Briefcase, DollarSign, Terminal } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Services', icon: Terminal },
    { id: 'projects', label: 'Portfolio', icon: Briefcase },
    { id: 'pricing', label: 'Investment', icon: DollarSign },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-amber-phosphor/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <Logo variant="horizontal-compact" size={280} className="hidden sm:block" />
            <Logo variant="mark-c" size={40} className="sm:hidden" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id as Page)}
                className={`flex items-center space-x-2 text-lg font-mono uppercase transition-colors hover:text-amber-phosphor ${
                  currentPage === item.id ? 'text-amber-phosphor text-glow' : 'text-white/70'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-phosphor p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel border-t border-amber-phosphor/20 py-4"
        >
          <div className="px-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id as Page);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-4 w-full p-3 rounded-lg font-mono uppercase text-xl ${
                  currentPage === item.id ? 'bg-amber-phosphor/10 text-amber-phosphor' : 'text-white/70'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
