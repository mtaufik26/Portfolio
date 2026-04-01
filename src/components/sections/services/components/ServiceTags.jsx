export const ServiceTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, tagIndex) => (
        <span
          key={tagIndex}
          className="text-xs px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-300/60 dark:hover:border-blue-700/60 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10 cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};