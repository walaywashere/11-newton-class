import React, { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Users, Star, Heart, Sparkles, Search, Filter, Grid, List, ChevronLeft, ChevronRight, Crown, Instagram, Mail, Trophy, BookOpen, Target, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { students } from '../data/classData';
import PerfectDropdown from '../components/PerfectDropdown';
import { getStudentSkills, getSkillsConfig } from '../utils/skillsManager';

// Optimized StudentCard component with memo to prevent unnecessary re-renders
const StudentGridCard = memo(function StudentGridCard({ student, onImageLoad, onStudentClick, imageLoaded }) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onStudentClick(student)}
    >
      <div className="bg-gradient-to-br from-white via-gray-50/80 to-slate-50/60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-white/60 hover:border-purple-200/80 h-[420px] flex flex-col relative will-change-transform">
        {/* Simplified Card Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Profile Picture Area - Optimized */}
        <div className="relative p-6 pb-3 flex justify-center">
          <div className="relative w-24 h-24">
            <div 
              className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/80 group-hover:ring-purple-200/60 transition-all duration-200 bg-gradient-to-br from-slate-100 to-gray-200 relative transform -rotate-2"
            >
              {!imageLoaded[student.name] ? (
                <div className="w-full h-full bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl mx-auto mb-1 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[10px] text-gray-600 font-bold tracking-wider mb-0.5">PHOTO</p>
                    <p className="text-[9px] text-gray-500 font-medium">COMING SOON</p>
                  </div>
                </div>
              ) : (
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full h-full object-cover"
                  onLoad={() => onImageLoad(student.name)}
                  loading="lazy"
                />
              )}
            </div>

            {/* Leadership Badge */}
            {student.position && student.position !== 'Student' && (
              <div className="absolute -top-2 -right-2 z-10">
                <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-white rounded-full p-2 shadow-lg border-2 border-white">
                  <Crown className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Simplified */}
        <div className="px-6 py-4 flex-1 flex flex-col">
          {/* Name and Role */}
          <div className="text-center mb-3">
            <h3 className="font-bold text-lg text-gray-800 leading-tight mb-2 group-hover:text-purple-700 transition-colors duration-200">
              {student.name}
            </h3>
            
            {student.position && student.position !== 'Student' ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full border border-purple-200/60">
                <Crown className="w-3 h-3 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">{student.position}</span>
              </div>
            ) : (
              <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                Student
              </span>
            )}
          </div>

          {/* Key Facts - Simplified */}
          <div className="flex-1 mb-4 min-h-[120px] flex flex-col justify-start">
            <div className="space-y-2">
              {student.dreamJob && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2.5 border border-blue-100/50">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="w-2.5 h-2.5 text-white" />
                    </div>
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">{student.dreamJob}</p>
                  </div>
                </div>
              )}
              
              {student.funFact && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-2.5 border border-purple-100/50">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-2.5 h-2.5 text-white" />
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">{student.funFact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-auto pt-2">
            {student.socials?.instagram ? (
              <div className="flex gap-2">
                <a
                  href={`https://instagram.com/${student.socials.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-shadow duration-200"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-3 h-3" />
                  <span>Connect</span>
                </a>
                <button 
                  className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg text-red-500 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 hover:border-red-300 hover:text-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                  title="Add to favorites"
                >
                  <Heart className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 font-medium">
                <Mail className="w-3 h-3" />
                <span>Contact via school</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

// Optimized ListCard component
const StudentListCard = memo(function StudentListCard({ student, onImageLoad, onStudentClick, imageLoaded }) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onStudentClick(student)}
    >
      <div className="bg-gradient-to-br from-white via-gray-50/80 to-slate-50/60 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-white/60 hover:border-purple-200/80 relative will-change-transform">
        {/* Simplified Card Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        <div className="p-6">
          <div className="flex gap-6 items-start">
            {/* Profile Picture - Simplified */}
            <div className="relative flex-shrink-0">
              <div className="relative w-20 h-20">
                <div 
                  className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/80 group-hover:ring-purple-200/60 transition-all duration-200 bg-gradient-to-br from-slate-100 to-gray-200 relative transform -rotate-2"
                >
                  {!imageLoaded[student.name] ? (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 via-gray-200 to-slate-300 flex flex-col items-center justify-center">
                      <div className="text-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg mx-auto mb-1 flex items-center justify-center">
                          <Users className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-[8px] text-gray-600 font-bold tracking-wider">PHOTO</p>
                        <p className="text-[7px] text-gray-500 font-medium">SOON</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      onLoad={() => onImageLoad(student.name)}
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Leadership Badge */}
                {student.position && student.position !== 'Student' && (
                  <div className="absolute -top-1 -right-1 z-10">
                    <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-white rounded-full p-1.5 shadow-lg border-2 border-white">
                      <Crown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-0">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                {/* Name and Role */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-xl text-gray-800 leading-tight mb-2 group-hover:text-purple-700 transition-colors duration-200">
                    {student.name}
                  </h3>
                  
                  {student.position && student.position !== 'Student' ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full border border-purple-200/60">
                      <Crown className="w-3 h-3 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">{student.position}</span>
                    </div>
                  ) : (
                    <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                      Student
                    </span>
                  )}
                </div>

                {/* Action Buttons - Enhanced */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {student.socials?.instagram ? (
                    <>
                      <a
                        href={`https://instagram.com/${student.socials.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-shadow duration-200 h-8"
                        title="Follow on Instagram"
                      >
                        <Instagram className="w-3 h-3" />
                        <span className="hidden sm:inline">Connect</span>
                      </a>
                      <button 
                        className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg text-red-500 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 hover:border-red-300 hover:text-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                        title="Add to favorites"
                      >
                        <Heart className="w-3 h-3" />
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-600 font-medium h-8">
                      <Mail className="w-3 h-3" />
                      <span className="hidden sm:inline">Contact via school</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Facts - Horizontal Layout */}
              <div className="flex flex-col sm:flex-row gap-3">
                {student.dreamJob && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2.5 border border-blue-100/50 flex-1">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Target className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-700 font-medium leading-relaxed">{student.dreamJob}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {student.funFact && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-2.5 border border-purple-100/50 flex-1">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-2.5 h-2.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-700 leading-relaxed">{student.funFact}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

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

  const handleImageLoad = useCallback((studentName) => {
    setImageLoaded(prev => ({ ...prev, [studentName]: true }));
  }, []);

  // Get skills configuration and generate skills for modal
  const skillsConfig = useMemo(() => getSkillsConfig(), []);
  const modalSkills = useMemo(() => {
    return selectedStudent ? getStudentSkills(selectedStudent) : [];
  }, [selectedStudent]);

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
    const filtered = students.filter(student => {
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
        case 'position': {
          const aPos = a.position || 'Student';
          const bPos = b.position || 'Student';
          if (aPos === 'Student' && bPos !== 'Student') return 1;
          if (aPos !== 'Student' && bPos === 'Student') return -1;
          return aPos.localeCompare(bPos);
        }
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
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-300/5 to-blue-300/5 rounded-full blur-3xl" />
      </div>



      {/* Hero Section - Increased top padding for island navbar */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-40 pb-16 overflow-hidden"
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
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="w-8 h-8 text-indigo-600" />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Amazing Class
              </h1>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
                  <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto`}
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

      {/* Search and Controls */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 md:p-8"
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
                className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm text-gray-700 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3 relative z-40"
            >
              <div className="relative z-50">
                <PerfectDropdown
                  trigger={<Filter className="w-4 h-4" />}
                  options={filterOptions}
                  value={filterBy}
                  onChange={setFilterBy}
                  placeholder="Filter"
                />
              </div>
              <div className="relative z-40">
                <PerfectDropdown
                  trigger={<Users className="w-4 h-4" />}
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                  placeholder="Sort"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex bg-gray-100 rounded-xl p-1 shadow-inner"
            >
              {[
                { mode: 'grid', icon: Grid },
                { mode: 'list', icon: List }
              ].map(({ mode, icon: Icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`p-3 rounded-lg transition-all duration-300 ${
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
        <div className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
        }>
                      {currentStudents.map((student) => (
            viewMode === 'grid' ? (
              <StudentGridCard
                key={student.name}
                student={student}
                onImageLoad={handleImageLoad}
                onStudentClick={setSelectedStudent}
                imageLoaded={imageLoaded}
              />
            ) : (
              <StudentListCard
                key={student.name}
                student={student}
                onImageLoad={handleImageLoad}
                onStudentClick={setSelectedStudent}
                imageLoaded={imageLoaded}
              />
            )
                     ))}
         </div>

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
              className="p-3 rounded-lg bg-white/80 backdrop-blur-md border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-purple-200 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 rounded-lg font-bold transition-all ${
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
              className="p-3 rounded-lg bg-white/80 backdrop-blur-md border border-white/50 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-purple-200 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </section>

      {/* Student Detail Modal - Modern Redesign */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Better Positioned */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 z-50 shadow-lg hover:shadow-xl border border-gray-200"
              >
                <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
              </button>

              {/* Header with Subtle Pattern - More spacing for close button */}
              <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 p-8 pr-16 pb-6 rounded-t-3xl">
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0),
                      radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.3) 1px, transparent 0)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                <div className="relative flex items-start gap-6">
                  {/* Profile Picture */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-gray-200 to-gray-300">
                      <img
                        src={selectedStudent.photo}
                        alt={selectedStudent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Position Badge */}
                    {selectedStudent.position && selectedStudent.position !== 'Student' && (
                      <div className="absolute -bottom-2 -right-2">
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-2 py-1 text-xs font-bold shadow-lg flex items-center gap-1">
                          <Crown className="w-3 h-3" />
                          <span className="hidden sm:inline">{selectedStudent.position}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Name and Role */}
                  <div className="flex-1 min-w-0">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-2xl font-bold text-gray-900 mb-1 leading-tight"
                    >
                      {selectedStudent.name}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-center gap-2 mb-3"
                    >
                      <span className="text-gray-600 font-medium">
                        {selectedStudent.position && selectedStudent.position !== 'Student' ? selectedStudent.position : 'Student'}
                      </span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span className="text-gray-500 text-sm">Class 11-Newton</span>
                    </motion.div>
                    
                    {/* Quick Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex gap-4"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">2024</div>
                        <div className="text-xs text-gray-500">Class Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">11-N</div>
                        <div className="text-xs text-gray-500">Section</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-8 space-y-8">
                {/* Personal Quote */}
                {selectedStudent.quote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Quote</h4>
                        <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                          "{selectedStudent.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Dream Job & Fun Fact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedStudent.dreamJob && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-blue-50 rounded-2xl p-6 border border-blue-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Dream Career</h4>
                      </div>
                      <p className="text-gray-700 font-medium">{selectedStudent.dreamJob}</p>
                    </motion.div>
                  )}

                  {selectedStudent.funFact && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="bg-amber-50 rounded-2xl p-6 border border-amber-100"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800">Fun Fact</h4>
                      </div>
                      <p className="text-gray-700">{selectedStudent.funFact}</p>
                    </motion.div>
                  )}
                </div>

                {/* Skills & Interests - Dynamic from Configuration */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className={`${skillsConfig.backgroundColor} rounded-2xl p-6 border ${skillsConfig.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 ${skillsConfig.iconBackground} rounded-lg flex items-center justify-center`}>
                      <Star className={`w-4 h-4 ${skillsConfig.iconColor}`} />
                    </div>
                    <h4 className="font-semibold text-gray-800">{skillsConfig.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {modalSkills.map((skill, _index) => (
                      <span
                        key={skill.name}
                        className={`${skillsConfig.display.tagStyling.baseClasses} border-${skill.color}-200 bg-${skill.color}-50 text-${skill.color}-700`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Information */}
                {selectedStudent.socials && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800">Connect</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedStudent.socials.instagram && (
                        <a
                          href={`https://instagram.com/${selectedStudent.socials.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                        >
                          <Instagram className="w-4 h-4" />
                          <span>Follow on Instagram</span>
                        </a>
                      )}
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>Email available on request</span>
                      </div>
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

export default memo(PerfectStudentsPage);