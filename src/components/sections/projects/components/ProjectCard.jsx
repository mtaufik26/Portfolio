// src/components/sections/projects/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { firstItemVariants, additionalItemVariants, cardHoverVariants } from '../constants/projectVariants';
import { ProjectImage } from './ProjectImage';
import { ProjectTechTags } from './ProjectTechTags';
import { ProjectActions } from './ProjectActions'; // ✅ Pastikan ini named import

export const ProjectCard = ({ project, index, inView, onHoverChange }) => {
  const isInitialItem = index < 4;

  const baseVariants = isInitialItem
    ? firstItemVariants
    : additionalItemVariants;

  const mergedVariants = {
    ...baseVariants,
    ...cardHoverVariants,
  };

  return (
    <motion.div
      className="group bg-white/95 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden relative"
      initial="hidden"
      animate={isInitialItem ? (inView ? 'visible' : 'hidden') : 'visible'}
      variants={mergedVariants}
      whileHover="hover"
      whileTap="tap"
      onMouseEnter={() => onHoverChange(index)}
      onMouseLeave={() => onHoverChange(null)}
    >
      {/* Overlay & Border Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-xl" />
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-blue-500/30 rounded-xl transition-all duration-500 pointer-events-none" />

      {/* Gambar Container */}
      <ProjectImage
        src={project.image}
        alt={project.title}
        title={project.title}
      />

      {/* Content Area */}
      <div className="p-6 relative">
        {/* Accent Line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <ProjectTechTags techStack={project.tech} />

        {/* Action Buttons */}
        <ProjectActions
          hasDemo={project.demo}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      </div>
    </motion.div>
  );
};