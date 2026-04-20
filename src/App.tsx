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
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Stabilize particles to prevent re-generation on every render
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
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'pricing':
        return <Pricing />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 crt-overlay pointer-events-none"></div>
      
      {/* Elliptical Vignette */}
      <div className="fixed inset-0 vignette pointer-events-none"></div>
      
      {/* Pelagic Light Rays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] right-[-20%] bottom-0 ocean-rays opacity-40"></div>
        <div className="absolute top-[-10%] left-[10%] right-[-10%] bottom-0 ocean-rays opacity-20" style={{ animationDelay: '-5s', filter: 'blur(60px)' }}></div>
      </div>

      {/* Floating Particles/Dust (Marine Snow) */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ 
                y: '-10vh', 
                x: `${p.xStart}%`,
                rotate: p.rotationStart,
                opacity: 0
              }}
              animate={{ 
                y: '110vh',
                x: [`${p.xStart}%`, `${p.xEnd}%`, `${p.xStart}%`],
                rotate: p.rotationEnd,
                opacity: [0, p.opacity, p.opacity, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "linear",
                delay: p.delay,
                x: {
                  duration: p.duration / 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: p.duration / 3,
                  repeat: Infinity,
                  ease: "linear"
                },
                opacity: {
                  times: [0, 0.1, 0.9, 1]
                }
              }}
              style={{ 
                width: p.size, 
                height: p.size, 
                filter: p.blur,
                borderRadius: p.borderRadius,
                aspectRatio: p.aspectRatio
              }}
              className="absolute bg-amber-phosphor/80 shadow-[0_0_5px_rgba(255,176,0,0.4)]"
            />
          ))}
        </div>
      </div>
      
      {/* Background Deep Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/5 blur-[150px] rounded-full pointer-events-none"></div>

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
