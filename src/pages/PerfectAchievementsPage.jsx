import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Trophy, Star, Award, Zap, Target, Medal, Crown, Users, Calendar, MapPin, ExternalLink, Filter, Grid, List, Sparkles, Flame, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTopInstant } from '../utils/scrollToTop';
import PerfectDropdown from '../components/PerfectDropdown';

// Enhanced achievements data with more visual flair
const achievementsData = [
  {
    id: 1,
    title: "Academic Excellence Award",
    category: "academic",
    description: "Outstanding performance in Mathematics and Science competitions, showcasing exceptional analytical skills and dedication to learning.",
    date: "2024-03-15",
    location: "Regional Science Fair",
    participants: ["Alexandra Santos", "Marcus Johnson", "Elena Rodriguez"],
    icon: Trophy,
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    stats: { participation: "85%", improvement: "+25%" },
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    type: "Competition",
    level: "Regional",
    impact: "High"
  },
  {
    id: 2,
    title: "Leadership Summit Recognition",
    category: "leadership",
    description: "Class officers led successful student council initiatives, demonstrating exceptional leadership and organizational skills.",
    date: "2024-02-20",
    location: "City Hall Auditorium",
    participants: ["Carlos Mendez", "Sophia Chen", "David Kim"],
    icon: Crown,
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    stats: { participation: "100%", impact: "School-wide" },
    images: ["/api/placeholder/400/300"],
    type: "Leadership",
    level: "Municipal",
    impact: "Very High"
  },
  {
    id: 3,
    title: "Community Service Excellence",
    category: "service",
    description: "Organized charity drive that helped 200+ families, showing remarkable compassion and community spirit.",
    date: "2024-01-10",
    location: "Community Center",
    participants: ["All Class Members"],
    icon: Users,
    color: "green",
    gradient: "from-green-500 to-emerald-600",
    stats: { beneficiaries: "200+", hours: "150+" },
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    type: "Service",
    level: "Community",
    impact: "Very High"
  },
  {
    id: 4,
    title: "Innovation Challenge Winner",
    category: "innovation",
    description: "Developed sustainable technology solution for local environmental issue, demonstrating creativity and problem-solving.",
    date: "2024-04-05",
    location: "Tech Innovation Hub",
    participants: ["Tech Team Members"],
    icon: Zap,
    color: "yellow",
    gradient: "from-yellow-500 to-orange-600",
    stats: { innovation: "High", sustainability: "100%" },
    images: ["/api/placeholder/400/300"],
    type: "Innovation",
    level: "Regional",
    impact: "High"
  },
  {
    id: 5,
    title: "Sports Championship Victory",
    category: "sports",
    description: "Won first place in inter-school basketball tournament, showcasing teamwork, dedication, and athletic excellence.",
    date: "2024-05-12",
    location: "Central Sports Complex",
    participants: ["Basketball Team"],
    icon: Medal,
    color: "orange",
    gradient: "from-orange-500 to-red-600",
    stats: { wins: "12/15", teamwork: "Excellent" },
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"],
    type: "Sports",
    level: "Regional",
    impact: "High"
  }
];

const PerfectAchievementsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Filter options
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic Excellence' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'service', label: 'Community Service' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'sports', label: 'Sports & Athletics' }
  ];

  // Filtered achievements
  const filteredAchievements = useMemo(() => {
    if (filterCategory === 'all') return achievementsData;
    return achievementsData.filter(achievement => achievement.category === filterCategory);
  }, [filterCategory]);

  // Stats for hero section
  const heroStats = [
    { icon: Trophy, label: 'Total Achievements', value: achievementsData.length, color: 'from-amber-500 to-orange-600' },
    { icon: Star, label: 'Excellence Awards', value: '12+', color: 'from-blue-500 to-purple-600' },
    { icon: Flame, label: 'Impact Level', value: 'High', color: 'from-red-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Floating Achievement Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20, -20],
              x: [null, 10, -10, 10],
              rotate: [0, 360],
              scale: [1, 1.2, 1, 1.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
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
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-orange-600 group border border-white/50"
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
        style={{ y: heroY, scale: heroScale }}
        className="relative pt-24 pb-16 overflow-hidden"
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
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Trophy className="w-10 h-10 text-amber-600" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Achievements
              </h1>
              <motion.div
                animate={{ 
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Medal className="w-10 h-10 text-red-600" />
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8"
            >
              Celebrating our remarkable victories, groundbreaking innovations, and positive impact on our community
            </motion.p>

            {/* Floating Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotate: Math.random() * 4 - 2
                  }}
                  className="relative group"
                >
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group-hover:border-orange-200">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
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
                    
                    {/* Hover sparkle effect */}
                    <motion.div
                      className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Controls Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3"
            >
              <PerfectDropdown
                trigger={<Filter className="w-4 h-4" />}
                options={categoryOptions}
                value={filterCategory}
                onChange={setFilterCategory}
                placeholder="Filter"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex bg-gray-100 rounded-2xl p-1 shadow-inner"
            >
              {[
                { mode: 'grid', icon: Grid },
                { mode: 'list', icon: List }
              ].map(({ mode, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-3 rounded-xl transition-all duration-300 ${
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
            Showing <span className="font-semibold text-orange-600">{filteredAchievements.length}</span> amazing achievements
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${filterCategory}`}
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
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-orange-200 relative">
                  {/* Achievement Icon Header */}
                  <div className={`relative bg-gradient-to-r ${achievement.gradient} p-6 text-white`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative flex items-center justify-between">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.div
                        className="text-right"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        <div className="text-sm opacity-90">{achievement.type}</div>
                        <div className="text-lg font-bold">{achievement.level}</div>
                      </motion.div>
                    </div>
                    
                    {/* Floating sparkles */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Diamond className="w-6 h-6 text-white/80" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600 mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      {achievement.description}
                    </motion.p>

                    {/* Achievement Details */}
                    <motion.div
                      className="space-y-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(achievement.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{achievement.location}</span>
                      </div>
                    </motion.div>

                    {/* Impact Badge */}
                    <motion.div
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.gradient} text-white shadow-md`}>
                        {achievement.impact} Impact
                      </span>
                      <motion.div
                        className="text-orange-600 group-hover:text-orange-700 transition-colors font-medium text-sm flex items-center gap-1"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-yellow-400/0 to-red-400/0 group-hover:from-orange-400/5 group-hover:via-yellow-400/5 group-hover:to-red-400/5 transition-all duration-500 rounded-3xl"></div>
                </div>
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
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-r ${selectedAchievement.gradient} p-8 text-white`}>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                
                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                  >
                    <selectedAchievement.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div>
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
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                        {selectedAchievement.type}
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                        {selectedAchievement.level}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedAchievement.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      Date
                    </h4>
                    <p className="text-gray-600">{new Date(selectedAchievement.date).toLocaleDateString()}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-500" />
                      Location
                    </h4>
                    <p className="text-gray-600">{selectedAchievement.location}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    Participants
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.participants.map((participant, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {participant}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {selectedAchievement.stats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Statistics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(selectedAchievement.stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                          <div className="text-lg font-bold text-gray-800">{value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerfectAchievementsPage;