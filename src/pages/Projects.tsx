import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Los Angeles Koyasan Website Redesign",
    category: "Web Development",
    description: "A comprehensive digital platform for a local nonprofit supporting emerging artists. Features include a member directory and event management system.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["SquareSpace", "Aplos", "Workflow Optimization"]
  },
  {
    title: "EcoStream Systems",
    category: "IT Consulting",
    description: "Infrastructure overhaul for a sustainable energy startup. Implemented secure cloud storage and automated backup protocols.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    tags: ["AWS", "Security", "DevOps"]
  }
];

export default function Projects() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 font-mono text-amber-mid text-glow uppercase tracking-tighter">Selected Works.</h1>
        <p className="text-amber-mid/60 max-w-2xl text-lg">
          Building for clients in 
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6 border border-amber-mid/10 group-hover:border-amber-mid/40 transition-all">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-marine/40 group-hover:bg-transparent transition-all"></div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-amber-mid text-marine rounded-full shadow-lg">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex items-start justify-between">
              <div>
                <span className="text-amber-dim font-sans text-xs tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-bright transition-colors">
                  {project.title}
                </h3>
                <p className="text-amber-mid/50 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-sans px-2 py-0.5 border border-amber-mid/10 rounded-full text-amber-mid/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="mt-32 glass-panel p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-bright">Have a vision in mind?</h2>
        <p className="text-amber-mid/60 mb-8 max-w-xl mx-auto">
          We are always looking for new challenges and chances to look for opportunities to make meaningful collaborations. 
        </p>
        <button className="px-10 py-4 bg-amber-mid text-marine font-bold rounded-sm border-glow hover:bg-amber-bright transition-all">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
