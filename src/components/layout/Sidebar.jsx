// src/components/layout/Sidebar.jsx
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaHistory,
  FaEnvelope,
  FaAward,
} from "react-icons/fa";

const Sidebar = ({ currentSection, isOpen, onClose }) => {
const getLinkClass = (sectionId) => {
  const isActive = currentSection === sectionId;

  return `
    p-3 transition-colors duration-300
    ${
      isActive
        ? 'text-blue-600 dark:text-blue-600'
        : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500'
    }
  `;
};

  if (!isOpen) return null;

  const itemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.92 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.aside
      className="fixed top-0 left-0 h-full z-30 flex flex-col items-center justify-center
        bg-transparent dark:bg-transparent
        border-r border-gray-700/30
        backdrop-blur-sm
        shadow-xl"
      style={{ width: '80px', minWidth: '80px' }}
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 22,
        mass: 0.6,
        duration: 0.6,
      }}
    >
      <nav className="flex flex-col items-center space-y-8 mt-16">
        {[
          { id: 'home', icon: <FaHome className="text-2xl" /> },
          { id: 'about', icon: <FaUser className="text-2xl" /> },
          { id: 'services', icon: <FaBriefcase className="text-2xl" /> },
          { id: 'projects', icon: <FaHistory className="text-2xl" /> },
          // { id: 'certificate', icon: <FaAward className="text-2xl" /> },
          { id: 'contact', icon: <FaEnvelope className="text-2xl" /> },
        ].map((item, i) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className={getLinkClass(item.id)}
            onClick={onClose}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.06,
              y: -1,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.15 },
            }}
          >
            {item.icon}
          </motion.a>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;