/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'projects':
        return <Projects setPage={setCurrentPage} />;
      case 'pricing':
        return <Pricing setPage={setCurrentPage} />;
      case 'contact':
        return <Contact setPage={setCurrentPage} />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Navbar lives at root — no parent stacking context, no backdrop-filter ancestor */}
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />

      <div className="min-h-screen relative overflow-x-hidden">
        {/* CRT Scanline Overlay */}
        <div className="fixed inset-0 crt-overlay pointer-events-none" style={{ zIndex: 9 }} />

        {/* Elliptical Vignette */}
        <div className="fixed inset-0 vignette pointer-events-none" style={{ zIndex: 9 }} />

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}