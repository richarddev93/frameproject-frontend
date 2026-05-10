"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePortfolioViewModel } from '../viewmodels/usePortfolioViewModel';
import { AnalyticsService } from '../services/analytics';

export const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
    selectedProject,
    openProject,
    closeProject
  } = usePortfolioViewModel();

  const handleProjectClick = (project: typeof filteredProjects[0]) => {
    openProject(project);
    AnalyticsService.trackProjectView(project.id, project.title);
  };

  return (
    <section ref={ref} id="portfolio" className="py-32 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Portfólio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xs px-3 py-1 bg-white/20 rounded-full text-white">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-zinc-900 rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video bg-black">
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={selectedProject.title}
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Categoria:</span>
                    <span className="text-white ml-2">{selectedProject.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Ano:</span>
                    <span className="text-white ml-2">{selectedProject.year}</span>
                  </div>
                  {selectedProject.client && (
                    <div>
                      <span className="text-gray-500">Cliente:</span>
                      <span className="text-white ml-2">{selectedProject.client}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
