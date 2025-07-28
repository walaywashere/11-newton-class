import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Users, Star, Heart, Sparkles, Search, Filter, Grid, List, ChevronLeft, ChevronRight, Crown, Instagram, Mail, Trophy, BookOpen, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTopInstant } from '../utils/scrollToTop';
import { students } from '../data/classData';
import PerfectDropdown from '../components/PerfectDropdown';

const PerfectStudentsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLoaded, setImageLoaded] = useState({});
  const studentsPerPage = 12;

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const handleImageLoad = (studentName) => {
    setImageLoaded(prev => ({ ...prev, [studentName]: true }));
  };

  // Filter and sort options
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'position', label: 'Position First' },
    { value: 'dreamJob', label: 'Dream Job' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Students' },
    { value: 'officers', label: 'Class Officers' },
    { value: 'students', label: 'Regular Students' }
  ];

  // Process students data
  const processedStudents = useMemo(() => {
    let filtered = students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.dreamJob?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.funFact?.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesFilter = true;
      if (filterBy === 'officers') {
        matchesFilter = student.position && student.position !== 'Student';
      } else if (filterBy === 'students') {
        matchesFilter = !student.position || student.position === 'Student';
      }

      return matchesSearch && matchesFilter;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'position':
          const aPos = a.position || 'Student';
          const bPos = b.position || 'Student';
          if (aPos === 'Student' && bPos !== 'Student') return 1;
          if (aPos !== 'Student' && bPos === 'Student') return -1;
          return aPos.localeCompare(bPos);
        case 'dreamJob':
          return (a.dreamJob || '').localeCompare(b.dreamJob || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterBy]);

  // Pagination
  const totalPages = Math.ceil(processedStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = processedStudents.slice(startIndex, startIndex + studentsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, filterBy]);

  const officersCount = students.filter(s => s.position && s.position !== 'Student').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse" />
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
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-indigo-600 group border border-white/50"
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
        className="relative pt-24 pb-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Users className="w-8 h-8 text-indigo-600" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Amazing Class
              </h1>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-purple-600" />
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Meet the incredible individuals who make Class 11-Newton extraordinary
            </motion.p>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Users, label: 'Total Students', value: students.length, color: 'from-blue-500 to-indigo-600' },
                { icon: Crown, label: 'Class Officers', value: officersCount, color: 'from-purple-500 to-pink-600' },
                { icon: Star, label: 'Dream Achievers', value: '100%', color: 'from-indigo-500 to-purple-600' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
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

      {/* Search and Controls */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 md:p-8"
        >
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative mb-6"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search students by name, position, or dream job..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3"
            >
              <PerfectDropdown
                trigger={<Filter className="w-4 h-4" />}
                options={filterOptions}
                value={filterBy}
                onChange={setFilterBy}
                placeholder="Filter"
              />
              <PerfectDropdown
                trigger={<Users className="w-4 h-4" />}
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
                placeholder="Sort"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                      ? 'bg-white shadow-md text-purple-600 scale-105'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </motion.div>
          </div>

          {/* Results Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 text-center text-gray-600"
          >
            Showing <span className="font-semibold text-purple-600">{currentStudents.length}</span> of{' '}
            <span className="font-semibold text-purple-600">{processedStudents.length}</span> students
          </motion.div>
        </motion.div>
      </section>

      {/* Students Grid/List */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }
          >
            {currentStudents.map((student, index) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group cursor-pointer ${
                  viewMode === 'list' ? 'flex gap-6' : ''
                }`}
                onClick={() => setSelectedStudent(student)}
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 group-hover:border-purple-200">
                  {/* Student Photo */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-24 h-24 rounded-xl m-4' : 'w-full h-48'
                  }`}>
                    {!imageLoaded[student.name] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                    )}
                    <motion.img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onLoad={() => handleImageLoad(student.name)}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Position Badge */}
                    {student.position && student.position !== 'Student' && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="absolute top-3 left-3"
                      >
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-xs font-bold shadow-lg border-2 border-white/20 backdrop-blur-sm flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          {student.position}
                        </span>
                      </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center pb-4"
                    >
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view profile
                      </span>
                    </motion.div>
                  </div>

                  {/* Student Info */}
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="mb-3">
                      <h3 className="font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors">
                        {student.name}
                      </h3>
                      {student.position && student.position !== 'Student' ? (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                          className="flex items-center gap-1 text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                          <Crown className="w-4 h-4 text-purple-500" />
                          {student.position}
                        </motion.div>
                      ) : (
                        <p className="text-gray-600 text-sm">Student</p>
                      )}
                    </div>

                    {student.dreamJob && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                        className="flex items-center gap-2 text-xs text-gray-500 mb-2"
                      >
                        <Target className="w-3 h-3" />
                        <span className="truncate">{student.dreamJob}</span>
                      </motion.div>
                    )}

                    {student.funFact && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        className="flex items-center gap-2 text-xs text-gray-500 mb-3"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span className="truncate">{student.funFact}</span>
                      </motion.div>
                    )}

                    {/* Social Links */}
                    {student.socials && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        className="flex gap-2"
                      >
                        {student.socials.instagram && (
                          <a
                            href={`https://instagram.com/${student.socials.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:scale-110 transition-transform shadow-md"
                          >
                            <Instagram className="w-3 h-3" />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-purple-200 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 rounded-xl font-bold transition-all ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-md border border-white/50 text-gray-700 hover:bg-purple-50'
                }`}
              >
                {page}
              </motion.button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white/80 backdrop-blur-md border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-purple-200 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </section>

      {/* Student Detail Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
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
              <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-8 text-white">
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                
                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                  >
                    <img
                      src={selectedStudent.photo}
                      alt={selectedStudent.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-3xl font-bold mb-2"
                    >
                      {selectedStudent.name}
                    </motion.h2>
                    {selectedStudent.position && selectedStudent.position !== 'Student' ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-2"
                      >
                        <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm flex items-center gap-2">
                          <Crown className="w-4 h-4" />
                          {selectedStudent.position}
                        </span>
                      </motion.div>
                    ) : (
                      <p className="text-white/80 font-medium">Student</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {selectedStudent.quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      Personal Quote
                    </h4>
                    <p className="text-gray-600 italic text-lg">"{selectedStudent.quote}"</p>
                  </motion.div>
                )}

                {selectedStudent.dreamJob && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      Dream Job
                    </h4>
                    <p className="text-gray-600">{selectedStudent.dreamJob}</p>
                  </motion.div>
                )}

                {selectedStudent.funFact && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      Fun Fact
                    </h4>
                    <p className="text-gray-600">{selectedStudent.funFact}</p>
                  </motion.div>
                )}

                {selectedStudent.socials && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Connect</h4>
                    <div className="flex gap-3">
                      {selectedStudent.socials.instagram && (
                        <a
                          href={`https://instagram.com/${selectedStudent.socials.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          <Instagram className="w-5 h-5" />
                          <span>Instagram</span>
                        </a>
                      )}
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

export default PerfectStudentsPage;