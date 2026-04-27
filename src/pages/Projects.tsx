import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { HomeProps } from '../types';
import { projects } from '../components/ProjectDescriptions';

export default function Projects({ setPage }: HomeProps) {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 font-mono text-amber-mid text-glow uppercase tracking-tighter">PROJECTS.</h1>
        <p className="text-amber-mid/60 max-w-2xl text-lg">
          Offering affordable technical services to businesses and organizations who need it most.
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
    </div>
  );
}
