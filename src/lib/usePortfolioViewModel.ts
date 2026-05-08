import { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import { Project } from '@/lib/types';

export const usePortfolioViewModel = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(projects.map(p => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProjects,
    selectedProject,
    openProject,
    closeProject
  };
};
