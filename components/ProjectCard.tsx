import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden glass-panel hover:border-primary transition-colors duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-300 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};