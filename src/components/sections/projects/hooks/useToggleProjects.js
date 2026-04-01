import { useState, useRef } from 'react';
import { saveScrollPosition, restoreScrollPosition } from '../utils/scrollUtils';

/**
 * Custom hook untuk toggle showAll projects dengan save/restore scroll position
 * @param {number} initialCount - Jumlah project yang ditampilkan awal
 * @param {number} totalCount - Total jumlah project
 * @returns {Object} showAll, displayedProjects, hasMore, handleToggle
 */
export const useToggleProjects = (initialCount, totalCount) => {
  const [showAll, setShowAll] = useState(false);
  const expandScrollPosition = useRef(null);

  const handleToggle = () => {
    if (!showAll) {
      // 📥 Saat EXPAND: Simpan posisi scroll
      expandScrollPosition.current = saveScrollPosition();
    } else {
      // 📤 Saat COLLAPSE: Kembalikan ke posisi yang disimpan
      if (expandScrollPosition.current !== null) {
        restoreScrollPosition(expandScrollPosition.current, () => {
          expandScrollPosition.current = null;
        });
      }
    }
    setShowAll((prev) => !prev);
  };

  const displayedProjects = showAll 
    ? Array.from({ length: totalCount }, (_, i) => i) 
    : Array.from({ length: Math.min(initialCount, totalCount) }, (_, i) => i);
    
  const hasMore = totalCount > initialCount;

  return {
    showAll,
    displayedIndices: displayedProjects,
    hasMore,
    handleToggle,
  };
};