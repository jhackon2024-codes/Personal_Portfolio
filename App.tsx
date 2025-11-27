import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ChevronDown, 
  Briefcase, 
  Award, 
  Code,
  Quote,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ChatWidget } from './components/ChatWidget';
import { ProjectCard } from './components/ProjectCard';
import { PORTFOLIO_DATA, PROJECTS, EXPERIENCE, SKILLS, TESTIMONIALS, BLOG_POSTS, NAV_LINKS } from './constants';
import { SectionId } from './types';

function App() {
  return (
    <div className="min-h-screen bg-dark text-slate-200 selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
          </div>

          <div className="container mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                Available for hire
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{PORTFOLIO_DATA.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                {PORTFOLIO_DATA.tagline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button 
                  onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full bg-white text-dark font-semibold hover:bg-slate-200 transition-colors w-full sm:w-auto"
                >
                  View Work
                </button>
                <button 
                  onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex justify-center gap-6 text-slate-400">
                <a href={PORTFOLIO_DATA.github} className="hover:text-white hover:scale-110 transition-all"><Github size={24} /></a>
                <a href={PORTFOLIO_DATA.linkedin} className="hover:text-white hover:scale-110 transition-all"><Linkedin size={24} /></a>
                <a href={PORTFOLIO_DATA.twitter} className="hover:text-white hover:scale-110 transition-all"><Twitter size={24} /></a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* ABOUT & SKILLS */}
        <section id={SectionId.ABOUT} className="py-24 bg-dark-lighter/50 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                  About Me
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {PORTFOLIO_DATA.bio}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-3xl font-bold text-white mb-1">6+</h4>
                    <span className="text-sm text-slate-500">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                    <span className="text-sm text-slate-500">Projects Completed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-dark border border-white/5 hover:border-primary/50 transition-colors flex items-center gap-3 group">
                    <div className="p-2 rounded-lg bg-white/5 text-slate-300 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Code size={20} />
                    </div>
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id={SectionId.PROJECTS} className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A selection of projects that showcase my technical depth and attention to design.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id={SectionId.EXPERIENCE} className="py-24 bg-dark-lighter/30">
          <div className="container mx-auto px-6 max-w-4xl">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            </motion.div>

            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-dark" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-400 mb-4 font-medium">{exp.company}</h4>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id={SectionId.TESTIMONIALS} className="py-24 bg-dark relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Don't just take my word for it. Here's what colleagues and clients have to say about working with me.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors relative group"
                >
                  {/* Quote Icon decorative */}
                  <div className="absolute top-6 right-6 text-white/5 group-hover:text-primary/20 transition-colors">
                    <Quote size={48} />
                  </div>

                  <p className="text-slate-300 mb-8 relative z-10 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</p>
                      <p className="text-xs text-primary/80">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id={SectionId.BLOG} className="py-24 bg-dark-lighter/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Thoughts, tutorials, and insights on frontend development, design, and AI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl overflow-hidden bg-dark border border-white/5 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                >
                  <div className="h-48 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60" />
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-white shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <a href={post.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id={SectionId.CONTACT} className="py-24 relative overflow-hidden">
           {/* Background glow */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start a project?</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                I'm currently available for freelance projects and open to full-time opportunities.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-dark font-bold hover:bg-slate-200 transition-colors"
                >
                  <Mail size={20} />
                  Say Hello
                </a>
                <a 
                  href={PORTFOLIO_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 border-t border-white/5 bg-dark">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </main>

      {/* AI Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;