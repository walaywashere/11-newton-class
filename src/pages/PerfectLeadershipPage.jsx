import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Crown, Users, Star, Award, Heart, MapPin, Calendar, Mail, Phone, BookOpen, Trophy, Sparkles, ChevronRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTopInstant } from '../utils/scrollToTop';
import { adviser, classOfficers } from '../data/classData';

const PerfectLeadershipPage = () => {
  const [selectedOfficer, setSelectedOfficer] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          to="/"
          onClick={scrollToTopInstant}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-indigo-600 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-yellow-300" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Our Leadership
              </h1>
              <Crown className="w-8 h-8 text-yellow-300" />
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who guide and lead our class towards excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Class Adviser Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-6 h-6 text-indigo-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Class Adviser</h2>
              <Star className="w-6 h-6 text-indigo-500" />
            </div>
            <p className="text-lg text-gray-600">Our guiding light and mentor</p>
          </motion.div>

          {/* Adviser Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 md:p-12">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
                
                <div className="relative flex flex-col lg:flex-row items-center gap-8">
                  {/* Photo */}
                  <div className="relative group">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                      {!imageLoaded.adviser && (
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      )}
                      <img
                        src={adviser.photo}
                        alt={adviser.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onLoad={() => handleImageLoad('adviser')}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <Crown className="w-6 h-6 text-yellow-800" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center lg:text-left text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{adviser.name}</h3>
                    <p className="text-xl md:text-2xl text-white/90 mb-4">{adviser.role}</p>
                    <p className="text-lg text-white/80 mb-6 italic">"{adviser.quote}"</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-5 h-5 text-white/90" />
                          <span className="font-semibold text-white/90">Department</span>
                        </div>
                        <p className="text-white">{adviser.department}</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-5 h-5 text-white/90" />
                          <span className="font-semibold text-white/90">Experience</span>
                        </div>
                        <p className="text-white">{adviser.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="p-6 md:p-8 bg-gray-50">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Achievements & Recognition
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {adviser.achievements.map((achievement, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                      <p className="text-sm text-gray-700 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Class Officers Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Class Officers</h2>
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-lg text-gray-600">The student leaders who make things happen</p>
          </motion.div>

          {/* Officers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classOfficers.map((officer, index) => (
              <motion.div
                key={officer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedOfficer(officer)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:-translate-y-2">
                  {/* Header with gradient */}
                  <div className="relative h-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        {!imageLoaded[officer.name] && (
                          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
                        )}
                        <img
                          src={officer.photo}
                          alt={officer.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onLoad={() => handleImageLoad(officer.name)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-16 pb-6 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{officer.name}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{officer.position}</p>
                    <p className="text-sm text-gray-600 mb-4 italic">"{officer.quote}"</p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span>{officer.funFact}</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-purple-600 group-hover:text-purple-700 transition-colors">
                      <span className="text-sm font-medium">View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Officer Detail Modal */}
      <AnimatePresence>
        {selectedOfficer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedOfficer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
                <button
                  onClick={() => setSelectedOfficer(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
                
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-xl mb-4">
                    <img
                      src={selectedOfficer.photo}
                      alt={selectedOfficer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{selectedOfficer.name}</h3>
                  <p className="text-xl text-white/90">{selectedOfficer.position}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Quote</h4>
                    <p className="text-gray-600 italic">"{selectedOfficer.quote}"</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Dream Job</h4>
                    <p className="text-gray-600">{selectedOfficer.dreamJob}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Fun Fact</h4>
                    <p className="text-gray-600">{selectedOfficer.funFact}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h4>
                    <div className="space-y-2">
                      {selectedOfficer.responsibilities.map((responsibility, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedOfficer.socials && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Connect</h4>
                      <div className="flex gap-3">
                        {selectedOfficer.socials.instagram && (
                          <a
                            href={`https://instagram.com/${selectedOfficer.socials.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                          >
                            <Instagram className="w-4 h-4" />
                            <span>Instagram</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PerfectLeadershipPage;