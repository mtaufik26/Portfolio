import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { techStack, techCategories } from '../constants/aboutData';
import { transitions } from '../../../../utils/motion';
import { TechChip } from './TechChip';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.12,
      ease: transitions.smoothEase,
    },
  },
};

export const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTech = selectedCategory === 'All'
    ? techStack
    : techStack.filter((t) => t.category === selectedCategory);

  const counts = {
    All: techStack.length,
    Frontend: techStack.filter((t) => t.category === 'Frontend').length,
    Backend: techStack.filter((t) => t.category === 'Backend').length,
    Tools: techStack.filter((t) => t.category === 'Tools').length,
  };

  const handleCategoryChange = (category) => {
    if (selectedCategory !== category) {
      setSelectedCategory(category);
    }
  };

  return (
    <motion.div variants={itemVariants} className="space-y-6 pt-4 sm:pt-6">
      {/* Header & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-neutral-100 dark:border-white/[0.06]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
              Technical Stack & Tools
            </h3>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Technologies & Frameworks
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          role="tablist"
          aria-label="Filter technologies by category"
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-100/90 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.08]"
        >
          {techCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(cat)}
                className={`
                  relative px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5
                  transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                  ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/[0.04]'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span 
                  className={`
                    relative z-10 text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors duration-150
                    ${isActive ? 'bg-blue-700/80 text-white' : 'bg-neutral-200/80 dark:bg-white/[0.08] text-neutral-500 dark:text-neutral-400'}
                  `}
                >
                  {counts[cat]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tech Chips Container with smooth layout flow */}
      <motion.div 
        layout
        transition={{ duration: 0.28, ease: transitions.smoothEase }}
        className="relative"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div 
            key={selectedCategory}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-wrap gap-2.5 sm:gap-3"
          >
            {filteredTech.map((tech) => (
              <TechChip 
                key={tech.name} 
                tech={tech} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};