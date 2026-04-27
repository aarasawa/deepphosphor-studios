import { motion } from 'motion/react';
import { Menu, X, FolderKanban, Terminal, Info, Mail } from 'lucide-react';
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
    { id: 'home', label: 'HOME', icon: Terminal },
    { id: 'projects', label: 'PROJECTS', icon: FolderKanban },
    { id: 'pricing', label: 'PRICING', icon: Info },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(4, 10, 20, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,179,71,0.08)',
      }}
    >
      {/* Main bar */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — constrained so it doesn't push hamburger off screen */}
        <div
          onClick={() => setPage('home')}
          style={{ cursor: 'pointer', flexShrink: 0, maxWidth: '220px' }}
        >
          {/* Mobile: just the fish */}
          <div className="lg:hidden">
            <Logo variant="mark-a" size={48} />
          </div>
          {/* Desktop: full lockup */}
          <div className="hidden lg:block">
            <Logo variant="horizontal-compact" size={280} />
          </div>
        </div>

        {/* Desktop nav — only on lg+ */}
        <div className="hidden lg:flex items-center" style={{ gap: '2rem' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id as Page)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: currentPage === item.id ? '#FFB347' : 'rgba(255,255,255,0.6)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
            >
              <item.icon size={14} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Hamburger — always visible below lg */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: '#FFB347',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexShrink: 0,
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          style={{
            background: 'rgba(4, 10, 20, 0.98)',
            borderTop: '1px solid rgba(255,179,71,0.1)',
            padding: '0.75rem 1rem 1rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setPage(item.id as Page);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.75rem 1rem',
                marginBottom: '0.25rem',
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: currentPage === item.id ? '#FFB347' : 'rgba(255,255,255,0.65)',
                background: currentPage === item.id ? 'rgba(255,179,71,0.08)' : 'none',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}