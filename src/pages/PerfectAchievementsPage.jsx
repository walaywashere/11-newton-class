import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Trophy, Medal, Star, Flame, Diamond, Crown, Users, Target, Award, ChevronRight, X, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTopInstant } from '../utils/scrollToTop';
import PerfectDropdown from '../components/PerfectDropdown';

// Enhanced achievements data with more details
const achievementsData = [
  {
    id: 1,
    title: "Academic Excellence Award",
    category: "academic",
    year: "2024",
    description: "Outstanding performance in Mathematics and Science subjects with consistent top rankings.",
    detailedDescription: "This prestigious award recognizes students who have demonstrated exceptional academic prowess across multiple subjects, particularly in STEM fields. Recipients have maintained a GPA above 95% and have shown remarkable problem-solving abilities.",
    impact: "High",
    icon: Trophy,
    gradient: "from-yellow-400 to-orange-500",
    students: ["Alice Johnson", "Bob Smith", "Carol Davis"],
    date: "March 15, 2024",
    criteria: ["GPA above 95%", "Consistent top 3 rankings", "Excellence in STEM subjects"]
  },
  {
    id: 2,
    title: "Leadership Excellence",
    category: "leadership",
    year: "2024",
    description: "Exceptional leadership skills demonstrated through class projects and student council participation.",
    detailedDescription: "This award celebrates students who have shown outstanding leadership qualities, including effective communication, team management, and the ability to inspire others. Recipients have led major initiatives and contributed significantly to school community.",
    impact: "Very High",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    students: ["David Wilson", "Emma Brown"],
    date: "April 20, 2024",
    criteria: ["Student council participation", "Led major projects", "Peer recognition", "Community impact"]
  },
  {
    id: 3,
    title: "Innovation Challenge Winner",
    category: "innovation",
    year: "2024",
    description: "First place in the annual innovation challenge with a groundbreaking project proposal.",
    detailedDescription: "The Innovation Challenge encourages students to think creatively and develop solutions to real-world problems. This year's winning project demonstrated exceptional creativity, feasibility, and potential for positive impact.",
    impact: "Very High",
    icon: Diamond,
    gradient: "from-blue-500 to-cyan-500",
    students: ["Frank Miller", "Grace Taylor"],
    date: "May 10, 2024",
    criteria: ["Original concept", "Technical feasibility", "Market potential", "Presentation quality"]
  },
  {
    id: 4,
    title: "Community Service Recognition",
    category: "service",
    year: "2024",
    description: "Outstanding community service with over 100 hours of volunteer work.",
    detailedDescription: "This recognition honors students who have dedicated significant time and effort to serving their community. Recipients have participated in various volunteer activities and have made a measurable positive impact.",
    impact: "High",
    icon: Star,
    gradient: "from-green-500 to-emerald-500",
    students: ["Helen Garcia", "Ivan Rodriguez", "Julia Martinez"],
    date: "June 5, 2024",
    criteria: ["100+ volunteer hours", "Multiple organizations", "Leadership in service", "Community impact"]
  },
  {
    id: 5,
    title: "Sports Excellence Award",
    category: "sports",
    year: "2024",
    description: "Outstanding performance in inter-school sports competitions.",
    detailedDescription: "This award recognizes students who have excelled in athletic competitions, demonstrating not only physical prowess but also sportsmanship, dedication, and team spirit.",
    impact: "Medium",
    icon: Medal,
    gradient: "from-red-500 to-pink-500",
    students: ["Kevin Lee", "Laura White"],
    date: "July 15, 2024",
    criteria: ["Competition victories", "Team leadership", "Sportsmanship", "Training dedication"]
  },
  {
    id: 6,
    title: "Artistic Achievement",
    category: "arts",
    year: "2024",
    description: "Exceptional creativity and skill in visual and performing arts.",
    detailedDescription: "This award celebrates students who have demonstrated exceptional talent and creativity in the arts, including visual arts, music, drama, and creative writing.",
    impact: "Medium",
    icon: Flame,
    gradient: "from-indigo-500 to-purple-500",
    students: ["Maria Lopez", "Nathan Clark"],
    date: "August 20, 2024",
    criteria: ["Portfolio excellence", "Public performances", "Creative innovation", "Artistic growth"]
  }
];

const PerfectAchievementsPage = () => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // Filter achievements
  const filteredAchievements = useMemo(() => {
    if (filterCategory === 'all') return achievementsData;
    return achievementsData.filter(achievement => achievement.category === filterCategory);
  }, [filterCategory]);

  // Filter options for dropdown
  const filterOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'service', label: 'Community Service' },
    { value: 'sports', label: 'Sports' },
    { value: 'arts', label: 'Arts' }
  ];

  // Hero stats with new styling
  const heroStats = [
    { icon: Trophy, label: 'Total Awards', value: achievementsData.length, gradient: 'from-yellow-500 to-orange-600' },
    { icon: Users, label: 'Students Recognized', value: '15+', gradient: 'from-blue-500 to-indigo-600' },
    { icon: Star, label: 'Excellence Rate', value: '98%', gradient: 'from-purple-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Floating Achievement Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 60, 120, 180, 240, 300, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 300, 240, 180, 120, 60, 0],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300/10 to-orange-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          onClick={scrollToTopInstant}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-orange-600 group border border-white/50"
        >
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft size={20} />
          </motion.div>
          <span className="font-medium">Home</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Animated Title */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Trophy className="w-8 h-8 text-yellow-600" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Achievements
              </h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Medal className="w-8 h-8 text-orange-600" />
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Celebrating excellence, innovation, and dedication in Class 11-Newton
            </motion.p>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 mx-auto`}
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Controls Section */}
      <section className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/50 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3 relative z-50"
            >
              <div className="relative z-[60]">
                <PerfectDropdown
                  trigger={<Filter className="w-4 h-4" />}
                  options={filterOptions}
                  value={filterCategory}
                  onChange={setFilterCategory}
                  placeholder="Filter"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex bg-gray-100 rounded-lg p-1 shadow-inner"
            >
              {[
                { mode: 'grid', icon: Grid },
                { mode: 'list', icon: List }
              ].map(({ mode, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-3 rounded-md transition-all duration-300 ${
                    viewMode === mode
                      ? 'bg-white shadow-md text-orange-600 scale-105'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-center text-gray-600"
          >
            Showing <span className="font-semibold text-orange-600">{filteredAchievements.length}</span> achievements
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Grid/List */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-orange-200">
                    {/* Achievement Header */}
                    <div className={`bg-gradient-to-r ${achievement.gradient} p-6 relative overflow-hidden`}>
                      <motion.div
                        className="absolute top-0 right-0 w-32 h-32 opacity-10"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <achievement.icon className="w-full h-full" />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm"
                        >
                          <achievement.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
                          {achievement.title}
                        </h3>
                        <p className="text-white/90 text-sm">{achievement.year}</p>
                      </div>

                      {/* Floating Sparkles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${20 + i * 15}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </div>

                    {/* Achievement Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{achievement.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${achievement.gradient} text-white`}>
                          {achievement.impact} Impact
                        </span>
                        <span className="text-sm text-gray-500">{achievement.students.length} Students</span>
                      </div>

                      <motion.div
                        className="flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm">View Details</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                      </motion.div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-orange-400/0 to-red-400/0 group-hover:from-yellow-400/5 group-hover:via-orange-400/5 group-hover:to-red-400/5 transition-all duration-500 rounded-xl" />
                  </div>
                ) : (
                  // List View
                  <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-orange-200">
                    <div className="flex gap-6 p-6">
                      <motion.div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-gray-500 ml-4">{achievement.year}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{achievement.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${achievement.gradient} text-white`}>
                              {achievement.impact} Impact
                            </span>
                            <span className="text-sm text-gray-500">{achievement.students.length} Students</span>
                          </div>
                          
                          <motion.div
                            className="flex items-center text-orange-600 font-medium cursor-pointer"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-sm">View Details</span>
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedAchievement.gradient} p-8 text-white relative overflow-hidden`}>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 opacity-10"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <selectedAchievement.icon className="w-full h-full" />
                </motion.div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm"
                  >
                    <selectedAchievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold mb-2"
                  >
                    {selectedAchievement.title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-white/90">{selectedAchievement.year}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-lg text-sm font-medium backdrop-blur-sm">
                      {selectedAchievement.impact} Impact
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedAchievement.detailedDescription}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Award Criteria</h3>
                  <ul className="space-y-2">
                    {selectedAchievement.criteria.map((criterion, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                        <span className="text-gray-600">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Award Recipients</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedAchievement.students.map((student, index) => (
                      <motion.div
                        key={student}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-3 text-center"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{student}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-gray-800">Award Date & Impact</h3>
                  </div>
                  <p className="text-gray-600">
                    <strong>Awarded on:</strong> {selectedAchievement.date}<br />
                    <strong>Impact Level:</strong> {selectedAchievement.impact} - This achievement demonstrates exceptional dedication and has positively influenced our class community.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerfectAchievementsPage;