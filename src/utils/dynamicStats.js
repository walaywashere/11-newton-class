import { students, classOfficers } from '../data/classData';
import achievementsConfig from '../data/achievements.config.json';

/**
 * Calculate dynamic statistics based on actual data
 */
export const calculateDynamicStats = () => {
  // Student statistics
  const totalStudents = students.length;
  const totalOfficers = classOfficers.length;
  
  // Achievement statistics
  const achievements = achievementsConfig.achievements || [];
  const totalAchievements = achievements.length;
  
  // Calculate recognition count (based on achievement levels)
  const totalRecognitions = achievements.reduce((count, achievement) => {
    if (achievement.level === 'National') return count + 3;
    if (achievement.level === 'Regional') return count + 2;
    return count + 1;
  }, 0);
  
  // Calculate championships (Sports category achievements)
  const totalChampionships = achievements.filter(
    achievement => achievement.category === 'Sports' || achievement.title.toLowerCase().includes('championship')
  ).length;
  
  // Calculate projects (estimate based on achievements and student count)
  const totalProjects = Math.max(
    achievements.filter(achievement => 
      achievement.category === 'Science' || 
      achievement.category === 'Academic' ||
      achievement.title.toLowerCase().includes('project')
    ).length,
    Math.floor(totalStudents * 0.6) // Assuming 60% of students have projects
  );

  return {
    totalStudents: `${totalStudents}`,
    totalOfficers: `${totalOfficers}`,
    totalAchievements: `${totalAchievements}`,
    totalRecognitions: `${totalRecognitions}`,
    totalChampionships: `${totalChampionships}`,
    totalProjects: `${totalProjects}`,
    
    // Raw numbers for calculations
    raw: {
      totalStudents,
      totalOfficers,
      totalAchievements,
      totalRecognitions,
      totalChampionships,
      totalProjects
    }
  };
};

/**
 * Processes dynamic stats from configuration objects
 * @param {Array} stats - Array of stat objects from config
 * @returns {Array} Processed stats with dynamic values
 */
export const processDynamicStats = (stats) => {
  if (!Array.isArray(stats)) {
    console.warn('processDynamicStats: Expected array, got:', typeof stats);
    return [];
  }

  return stats.map(stat => {
    // Handle dynamic value computation based on stat type
    let computedValue = stat.value;
    
    if (stat.dynamic) {
      switch (stat.key) {
        case 'current_year':
          computedValue = new Date().getFullYear();
          break;
        case 'established_year':
          computedValue = stat.baseYear || 2024;
          break;
        case 'days_since_start': {
          const startDate = new Date(stat.startDate || '2024-09-01');
          const now = new Date();
          computedValue = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
          break;
        }
        case 'student_count':
          // This would typically come from actual data
          computedValue = stat.value || 40;
          break;
        default:
          computedValue = stat.value;
      }
    }

    return {
      ...stat,
      value: computedValue,
      displayValue: formatValue(computedValue, stat.format)
    };
  });
};

/**
 * Formats a value based on the specified format
 * @param {number|string} value - The value to format
 * @param {string} format - The format type
 * @returns {string} Formatted value
 */
const formatValue = (value, format) => {
  if (!format) return String(value);

  switch (format) {
    case 'number':
      return value.toLocaleString();
    case 'percentage':
      return `${value}%`;
    case 'year':
      return String(value);
    case 'days':
      return `${value}+`;
    default:
      return String(value);
  }
};

export default processDynamicStats;