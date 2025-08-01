import studentsConfig from '../data/students.config.json';
import { availableSkills } from '../data/classData';

/**
 * Get skills for a specific student from their individual data
 * @param {Object} student - Student object containing skills array
 * @param {Object} options - Options for skill selection
 * @returns {Array} Array of skills to display for this student
 */
export const getStudentSkills = (student, options = {}) => {
  const skillsConfig = studentsConfig.modal.skillsInterests;
  const { display } = skillsConfig;
  
  const {
    maxSkills = display.maxSkills,
    // studentName for future student-specific skills implementation
  } = options;

  // If student has individual skills, use those
  if (student && student.skills && student.skills.length > 0) {
    return student.skills.slice(0, maxSkills).map(skillName => {
      // Find the skill details from availableSkills
      const skillDetails = availableSkills.find(skill => skill.name === skillName);
      return skillDetails || { name: skillName, category: 'general', color: 'gray' };
    });
  }

  // Fallback to configuration skills if student has no individual skills
  const { skills } = skillsConfig;
  let fallbackSkills = [...skills];

  // If randomize is enabled, shuffle the skills
  if (display.randomize) {
    fallbackSkills = shuffleArray(fallbackSkills);
  }

  // Return the specified number of skills
  return fallbackSkills.slice(0, maxSkills);
};

/**
 * Get skills configuration for styling and display
 * @returns {Object} Skills configuration object
 */
export const getSkillsConfig = () => {
  return studentsConfig.modal.skillsInterests;
};

/**
 * Get skill styling classes based on configuration
 * @param {string} color - Color theme for the skill
 * @returns {Object} CSS classes for the skill tag
 */
export const getSkillStyling = (color = 'green') => {
  return {
    colorClasses: getColorClasses(color)
  };
};

/**
 * Get color-specific classes for skill tags
 * @param {string} color - Color name
 * @returns {string} Color-specific CSS classes
 */
const getColorClasses = (color) => {
  const colorMap = {
    green: 'border-green-200 bg-green-50 text-green-700',
    purple: 'border-purple-200 bg-purple-50 text-purple-700',
    blue: 'border-blue-200 bg-blue-50 text-blue-700',
    indigo: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    pink: 'border-pink-200 bg-pink-50 text-pink-700',
    amber: 'border-amber-200 bg-amber-50 text-amber-700',
    violet: 'border-violet-200 bg-violet-50 text-violet-700',
    orange: 'border-orange-200 bg-orange-50 text-orange-700',
    cyan: 'border-cyan-200 bg-cyan-50 text-cyan-700',
    teal: 'border-teal-200 bg-teal-50 text-teal-700',
    slate: 'border-slate-200 bg-slate-50 text-slate-700'
  };
  
  return colorMap[color] || colorMap.green;
};

/**
 * Shuffle array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get all available skill categories
 * @returns {Array} Array of unique categories
 */
export const getSkillCategories = () => {
  const skillsConfig = getSkillsConfig();
  const categories = [...new Set(skillsConfig.skills.map(skill => skill.category))];
  return categories.sort();
};

/**
 * Get skills by specific category
 * @param {string} category - Category name
 * @returns {Array} Skills in the specified category
 */
export const getSkillsByCategory = (category) => {
  const skillsConfig = getSkillsConfig();
  return skillsConfig.skills.filter(skill => skill.category === category);
};