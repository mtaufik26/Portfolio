import { motion } from 'framer-motion';
import { containerVariants } from './constants/projectVariants';
import { projects, INITIAL_DISPLAY_COUNT } from './constants/projectsData';
import { useProjectsAnimation } from './hooks/useProjectsAnimation';
import { useToggleProjects } from './hooks/useToggleProjects';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ProjectsHeader } from './components/ProjectsHeader';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ToggleButton } from './components/ToggleButton';

const Projects = () => {
  const { ref, inView } = useProjectsAnimation();
  const { showAll, displayedIndices, hasMore, handleToggle } = useToggleProjects(
    INITIAL_DISPLAY_COUNT, 
    projects.length
  );

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <BackgroundEffects />

      <div className="max-w-6xl mx-auto w-full py-16 sm:py-24">
        <ProjectsHeader />
        
        <ProjectsGrid 
          displayedIndices={displayedIndices}
          inView={inView}
          onHoverChange={() => {}} // Bisa dikembangkan jika butuh state hoveredCard global
        />
        
        <ToggleButton 
          showAll={showAll} 
          hasMore={hasMore} 
          onToggle={handleToggle} 
        />
      </div>
    </motion.section>
  );
};

export default Projects;