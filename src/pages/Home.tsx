import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';
import ServiceWindow from '../components/ServiceWindow';
import { HomeProps, ServiceDetail } from '../types';
import { services } from '../components/HomeDescriptions';

export default function Home({ setPage }: HomeProps) {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Hero Section */}
      <section className="mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Logo variant="stacked" size={280} className="mb-6 drop-shadow-[0_0_20px_rgba(255,179,71,0.2)]" />

          <h1 className="text-7xl md:text-9xl font-bold mb-12 leading-none">
            <span className="text-amber-mid text-glow font-mono uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(255,179,71,0.3)]">
              Craftsmanship.
            </span>
          </h1>
          <p className="text-2xl text-amber-mid/50 max-w-3xl mx-auto mb-14 leading-relaxed">
            Deep Phosphor Studios explores the depths of digital innovation.
            We bring light to the dark waters of technology for nonprofits
            and visionary small businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage('contact')}
              className="px-8 py-4 bg-amber-mid text-marine font-bold rounded-sm hover:bg-amber-bright transition-all border-glow"
            >
              Start a Project
            </button>
            <button
              onClick={() => setPage('projects')}
              className="px-8 py-4 border border-amber-mid/30 text-amber-mid font-bold rounded-sm hover:bg-amber-mid/10 transition-all"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-amber-bright">Our Expertise</h2>
            <p className="text-amber-mid/50">Comprehensive solutions for the modern era.</p>
          </div>
          <div className="hidden sm:block h-px flex-grow mx-8 bg-amber-mid/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveService(service)}
              className="glass-panel p-8 group hover:border-amber-mid/40 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={120} className="text-amber-mid" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-amber-mid/10 flex items-center justify-center rounded-sm mb-6 border border-amber-mid/20">
                  <service.icon className="text-amber-mid w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-mid">{service.title}</h3>
                <p className="text-amber-mid/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.slice(0, 4).map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-sans px-2 py-1 bg-amber-mid/5 border border-amber-mid/10 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveService(service)}
                  className="flex items-center space-x-2 text-amber-mid font-bold text-sm hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Drawer */}
      <ServiceWindow
        service={activeService}
        onClose={() => setActiveService(null)}
        onContact={() => setPage('contact')}
      />
    </div>
  );
}