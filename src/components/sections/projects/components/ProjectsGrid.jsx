import { projects } from '../constants/projectsData';
import { ProjectCard } from './ProjectCard';

export const ProjectsGrid = ({ displayedIndices, inView, onHoverChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayedIndices.map((index) => {
        const project = projects[index];
        return (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
            inView={inView}
            onHoverChange={onHoverChange}
          />
        );
      })}
    </div>
  );
};