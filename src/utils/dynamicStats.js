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
 * Process configuration stats and replace dynamic values
 */
export const processDynamicStats = (stats) => {
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