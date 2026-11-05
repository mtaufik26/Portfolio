import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants } from './constants/projectVariants';
import { projects } from './constants/projectsData';
import { useProjectsAnimation } from './hooks/useProjectsAnimation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ProjectsHeader } from './components/ProjectsHeader';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ToggleButton } from './components/ToggleButton';
import { AllProjectsModal } from './components/AllProjectsModal';

const Projects = () => {
  const { ref, inView } = useProjectsAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        ref={ref}
        className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
      >
        <BackgroundEffects />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="space-y-8 sm:space-y-10"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            {/* Section Header */}
            <ProjectsHeader />

            {/* Featured Projects Slider Track */}
            <ProjectsGrid
              projectsList={projects}
              inView={inView}
            />

            {/* Trigger Button to Open All Projects Modal */}
            <ToggleButton
              totalCount={projects.length}
              onOpenAll={() => setIsModalOpen(true)}
            />
          </motion.div>
        </div>
      </div>

      {/* Controlled Full Directory Archive Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <AllProjectsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            projects={projects}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Projects);


