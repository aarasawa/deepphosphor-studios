/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const particles = useMemo(() => {
    return [...Array(80)].map((_, i) => {
      const size = Math.random() * 4 + 2;
      const isFlake = Math.random() > 0.5;
      return {
        id: i,
        size,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 25 + 35,
        delay: Math.random() * -70,
        xStart: Math.random() * 100,
        xEnd: Math.random() * 100 + (Math.random() * 30 - 15),
        rotationStart: Math.random() * 360,
        rotationEnd: Math.random() * 360 + 720, // Multiple tumbles
        blur: Math.random() > 0.8 ? 'blur(2px)' : 'blur(0px)', // Some very sharp
        borderRadius: isFlake ? `${Math.random() * 50}% ${Math.random() * 50}%` : '50%',
        aspectRatio: isFlake ? `${Math.random() * 0.5 + 0.5}` : '1',
      };
    });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage}/>;
      case 'projects':
        return <Projects setPage={setCurrentPage}/>;
      case 'pricing':
        return <Pricing setPage={setCurrentPage}/>;
      case 'contact':
        return <Contact setPage={setCurrentPage}/>;
      default:
        return <Home setPage={setCurrentPage}/>;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 crt-overlay pointer-events-none"></div>
      
      {/* Elliptical Vignette */}
      <div className="fixed inset-0 vignette pointer-events-none"></div>

      <Navbar currentPage={currentPage} setPage={setCurrentPage} />

      <main className="relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
