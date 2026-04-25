import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { ServiceDetail } from '../types';

interface ServiceWindowProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onContact: () => void;
}

export default function ServiceWindow({ service, onClose, onContact }: ServiceWindowProps) {
  useEffect(() => {
    if (service) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [service]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); else if (e.key === 'Enter') { onContact(); onClose(); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(2, 6, 14, 0.75)' }}
          />

          {/* DOS Window */}
          <motion.div
            key="window"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 30, stiffness: 320, duration: 0.2 }}
            className="fixed z-50 inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[860px] lg:w-[1000px] sm:max-h-[80vh] flex flex-col font-mono"
            style={{
              // Outer double border — DOS window chrome
              border: '2px solid #FFB347',
              background: '#060d18',
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center justify-between px-0 shrink-0"
              style={{
                background: '#FFB347',
                borderBottom: '2px solid #b87d2a',
              }}
            >
              {/* Left spacer matches close button width */}
              <div className="w-8" />

              {/* Centered title */}
              <span
                className="text-md uppercase tracking-widest py-1 flex-1 text-center"
                style={{ color: '#060d18', fontFamily: 'monospace', letterSpacing: '0.15em' }}
              >
                ══  {service.title.toUpperCase()}  ══
              </span>

              {/* Close button — DOS style [ X ] */}
              <button
                onClick={onClose}
                className="w-8 h-full flex items-center justify-center text-md font-bold transition-colors shrink-0"
                style={{
                  color: '#060d18',
                  borderLeft: '2px solid #b87d2a',
                  background: 'transparent',
                  fontFamily: 'monospace',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#b87d2a';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                }}
              >
                ✕
              </button>
            </div>

            {/* Window body — scrollable */}
            <div
              className="flex-1 overflow-y-auto p-6 space-y-6"
            >
              {/* Prompt line */}
              <div className="flex items-center space-x-2 mb-2">
                <span style={{ color: '#FFB347', opacity: 0.4 }}>C:\DPS\SERVICES&gt;</span>
                <span style={{ color: '#FFB347', opacity: 0.7 }} className="text-md uppercase tracking-widest">
                  {service.title.toLowerCase().replace(/ /g, '_')}.exe
                </span>
                <span
                  className="inline-block w-2 h-4 ml-1"
                  style={{
                    background: '#FFB347',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </div>

              <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

              {/* Description */}
              <div
                className="p-4 text-lg leading-relaxed"
                style={{
                  border: '1px solid rgba(255,179,71,0.2)',
                  color: 'rgba(255,179,71,0.75)',
                  background: 'rgba(255,179,71,0.03)',
                }}
              >
                {service.longDescription}
              </div>

              {/* What's Included */}
              <div>
                <div
                  className="text-lg uppercase tracking-widest px-3 py-1 mb-3 inline-block"
                  style={{ background: '#FFB347', color: '#060d18' }}
                >
                  ▸ INCLUDED
                </div>
                <div className="space-y-2 pl-2">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 text-lg" style={{ color: 'rgba(255,179,71,0.7)' }}>
                      <span style={{ color: 'rgba(255,179,71,0.35)' }} >
                        {String(i + 1).padStart(2, '0')}.
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Good Fit */}
              <div>
                <div
                  className="text-lg uppercase tracking-widest px-3 py-1 mb-3 inline-block"
                  style={{ background: '#FFB347', color: '#060d18' }}
                >
                  ▸ GOOD FIT IF YOU...
                </div>
                <div className="space-y-2 pl-2">
                  {service.goodFit.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 text-lg" style={{ color: 'rgba(255,179,71,0.7)' }}>
                      <span style={{ color: '#FFB347' }} >[✓]</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <div
                  className="text-lg uppercase tracking-widest px-3 py-1 mb-3 inline-block"
                  style={{ background: '#FFB347', color: '#060d18' }}
                >
                  ▸ TECHNOLOGIES
                </div>
                <div className="flex flex-wrap gap-2 pl-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[16px] uppercase tracking-widest px-2 py-1"
                      style={{
                        border: '1px solid rgba(255,179,71,0.25)',
                        color: 'rgba(255,179,71,0.5)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / CTA bar */}
            <div
              className="flex items-center justify-between px-4 py-2 shrink-0"
              style={{
                borderTop: '2px solid #FFB347',
                background: 'rgba(255,179,71,0.04)',
              }}
            >
              <span className="text-lg" style={{ color: 'rgba(255,179,71,0.3)' }}>
                [ESC] CLOSE &nbsp;·&nbsp; [ENTER] CONTACT
              </span>
              <button
                onClick={() => { onClose(); onContact(); }}
                className="text-lg uppercase tracking-widest px-4 py-1 font-bold transition-all"
                style={{
                  border: '1px solid #FFB347',
                  color: '#060d18',
                  background: '#FFB347',
                  fontFamily: 'monospace',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#FFD580';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#FFB347';
                }}
              >
                ▸ START PROJECT
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}