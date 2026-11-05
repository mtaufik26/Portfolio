import { ProjectCard } from './ProjectCard';
import { ProjectNavigationArrows } from './ProjectNavigationArrows';
import { ProjectNavigationControl } from './ProjectNavigationControl';
import { useProjectSlider } from '../hooks/useProjectSlider';

/**
 * Projects Showcase Slider.
 * Provides intuitive horizontal sliding navigation (geser kanan & kiri) on the main page.
 */
export const ProjectsGrid = ({ projectsList, inView }) => {
  const {
    sliderRef,
    currentIndex,
    scrollToIndex,
    handlePrev,
    handleNext,
    showLeft,
    showRight,
    dragHandlers,
  } = useProjectSlider(projectsList.length);

  return (
    <div className="w-full space-y-5">
      {/* Top Navigation Control Bar */}
      <ProjectNavigationControl
        currentIndex={currentIndex}
        totalProjects={projectsList.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={scrollToIndex}
      />

      {/* Horizontal Slider Viewport Container */}
      <div className="relative group/slider w-full overflow-hidden">
        {/* Floating Side Arrows */}
        <ProjectNavigationArrows
          showLeft={showLeft}
          showRight={showRight}
          onPrev={handlePrev}
          onNext={handleNext}
        />

        {/* Sliding Track with Native Snap Physics */}
        <div
          ref={sliderRef}
          className="flex items-stretch overflow-x-auto snap-x snap-mandatory hide-scrollbar w-full gap-6 sm:gap-8 pb-2 pt-1 cursor-grab active:cursor-grabbing"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
          {...dragHandlers}
        >
          {projectsList.map((project, index) => (
            <div
              key={project.id}
              data-project-index={index}
              className="w-full min-w-full shrink-0 snap-center flex"
            >
              <ProjectCard
                project={project}
                index={index}
                inView={inView}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
