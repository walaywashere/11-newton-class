import { students, classOfficers } from '../data/classData';

/**
 * Calculate dynamic statistics based on actual data
 * @returns {Object} Object with calculated values
 */
const calculateDynamicStats = () => {
  const studentCount = students.length;
  const officerCount = classOfficers.length;
  
  return {
    totalStudents: studentCount,
    totalProjects: Math.floor(studentCount * 1.5), // estimate 1.5 projects per student
    totalAchievements: Math.floor(studentCount * 0.8), // estimate 0.8 achievements per student
    classOfficers: officerCount,
    currentYear: new Date().getFullYear(),
    academicYear: '2025-2026'
  };
};

/**
 * Process configuration stats and replace dynamic values
 * @param {Array} stats - Array of stat objects from config
 * @returns {Array} Processed stats with dynamic values
 */
export const processDynamicStats = (stats) => {
  if (!Array.isArray(stats)) {
    console.warn('processDynamicStats: Expected array, got:', typeof stats);
    return [];
  }

  const dynamicData = calculateDynamicStats();
  
  return stats.map(stat => {
    if (stat.value === 'dynamic' && stat.calculation) {
      return {
        ...stat,
        value: dynamicData[stat.calculation] || stat.value
      };
    }
    return stat;
  });
};

export default processDynamicStats;