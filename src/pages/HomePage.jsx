import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Users, Trophy, BookOpen, ArrowRight, Crown, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToTopInstant } from '../utils/scrollToTop';

const HomePage = () => {

  // Error boundary for this component
  if (typeof window === 'undefined') {
    return null; // SSR safety
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile First */}
      <section id="home" className="relative flex items-center justify-center overflow-hidden pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 lg:pb-28">
        {/* Dynamic Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
            `
          }}
        />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px sm:100px sm:100px',
            animation: 'gridSlide 30s linear infinite'
          }}
        />

        {/* Floating Elements - Mobile Optimized */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/5 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full opacity-20"
            style={{ 
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
              filter: 'blur(10px sm:blur-15px)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full opacity-15"
            style={{ 
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
              filter: 'blur(8px sm:blur-12px)'
            }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Geometric Shapes - Mobile Responsive */}
          <motion.div 
            className="absolute top-16 left-8 sm:top-20 sm:left-12 lg:top-20 lg:left-20 text-blue-400/30"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          >
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 right-8 sm:bottom-24 sm:right-12 lg:bottom-32 lg:right-16 text-purple-400/25"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -15, 0],
              opacity: [0.25, 0.5, 0.25]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          >
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" />
          </motion.div>
        </div>

        {/* Main Content - Mobile First */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Badge - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8"
          >
            <div 
              className="px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full border backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-300" />
                </motion.div>
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-base tracking-wide">
                  Class of 2025-2026
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main Title - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <motion.span 
                className="block text-white mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Welcome to
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite'
                }}
              >
                Class 11-Newton
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle - Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Where{' '}
              <motion.span 
                className="text-blue-300 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                brilliant minds
              </motion.span>
              {' '}come together to create extraordinary futures. We are a community of passionate learners, dedicated to{' '}
              <motion.span 
                className="text-purple-300 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Innovation
              </motion.span>
              {', '}
              <motion.span 
                className="text-emerald-300 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                Excellence
              </motion.span>
              {', and '}
              <motion.span 
                className="text-amber-300 font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                Dreams
              </motion.span>
              .
            </p>
          </motion.div>

          {/* Interactive Stats Cards - Mobile Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: 'Brilliant Minds', value: '40+', color: 'blue' },
              { icon: Trophy, label: 'Achievements', value: '15+', color: 'purple' },
              { icon: BookOpen, label: 'Projects', value: '25+', color: 'emerald' },
              { icon: Heart, label: 'Excellence', value: '100%', color: 'amber' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
              >
                <div 
                  className="p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md border transition-all duration-300 group-hover:shadow-2xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="mb-2 sm:mb-3"
                  >
                    <stat.icon className={`w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto text-${stat.color}-400 group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <div className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-${stat.color}-300 mb-1 sm:mb-2 group-hover:text-${stat.color}-200 transition-colors`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - No Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-24 sm:mb-32 lg:mb-40"
          >
            <Link
              to="/students"
              onClick={scrollToTopInstant}
              className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)';
                e.target.style.boxShadow = '0 0 50px rgba(59, 130, 246, 0.5), 0 15px 50px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)';
                e.target.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.3)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white relative z-10" />
              <span className="text-white relative z-10">Meet Our Students</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
            </Link>

            <Link
              to="/leadership"
              onClick={scrollToTopInstant}
              className="group inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              <span className="text-white">Our Leadership</span>
            </Link>
          </motion.div>

          {/* Integrated Discover More - INSIDE Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="mt-16 sm:mt-20 lg:mt-24 space-y-6 sm:space-y-8"
          >
            {/* Call to Action Text */}
            <div className="space-y-4">
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.7 }}
              >
                Ready to
                <motion.span 
                  className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Explore?
                </motion.span>
              </motion.h2>
            </div>

            {/* Integrated Discover Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={() => {
                  const nextSection = document.querySelector('.explore-section');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl font-bold text-base sm:text-lg lg:text-xl text-white transition-all duration-500"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                    }}
                  />
                  
                  <span className="relative flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    Discover More
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Explore Our Class Section - Mobile Responsive */}
      <section className="explore-section py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold text-sm sm:text-base">Discover Class 11-Newton</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
              Explore Our Class
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover what makes Class 11-Newton extraordinary through our leadership, students, and achievements.
            </p>
          </motion.div>

          {/* Cards Grid - Professional Layout: Leadership Left, Students/Achievements Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
            
            {/* Leadership Card - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => window.location.href = '/leadership'}
            >
              <div 
                className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl"
                                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
                    minHeight: '520px',
                    height: 'auto'
                  }}
              >
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Leadership</h3>
                      <p className="text-white/80 text-sm sm:text-base">Meet Our Leaders</p>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg flex-1">
                    Discover the visionaries and innovators who guide our class towards excellence and success.
                  </p>
                  
                  {/* Stats Grid - Mobile Responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {[
                      { label: 'Class Adviser', value: '1' },
                      { label: 'Student Officers', value: '8+' },
                      { label: 'Leadership Excellence', value: '100%' }
                    ].map((stat, _index) => (
                      <div key={stat.label} className="text-center p-3 sm:p-4 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm sm:text-base font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Students Above Achievements */}
            <div className="flex flex-col gap-6 sm:gap-8 h-full">
              
              {/* Students Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1 group cursor-pointer"
                onClick={() => window.location.href = '/students'}
              >
                                 <div 
                   className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl"
                   style={{
                     background: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
                     minHeight: '250px',
                     height: '100%'
                   }}
                 >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">Students</h3>
                        <p className="text-white/80 text-sm sm:text-base">Our Amazing Students</p>
                      </div>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base flex-1">
                      Meet the brilliant minds, unique personalities, and future leaders that make our class extraordinary.
                    </p>
                    
                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm sm:text-base font-medium">Meet Them</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Achievements Card - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 group cursor-pointer"
                onClick={() => window.location.href = '/achievements'}
              >
                                 <div 
                   className="h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl"
                   style={{
                     background: 'linear-gradient(135deg, #10B981 0%, #F59E0B 100%)',
                     minHeight: '250px',
                     height: '100%'
                   }}
                 >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(30deg, rgba(255,255,255,0.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.1) 87.5%, rgba(255,255,255,0.1)),
                        linear-gradient(150deg, rgba(255,255,255,0.1) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.1) 87.5%, rgba(255,255,255,0.1))
                      `,
                      backgroundSize: '20px 35px'
                    }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">Achievements</h3>
                        <p className="text-white/80 text-sm sm:text-base">Our Success Stories</p>
                      </div>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base flex-1">
                      Celebrate the remarkable milestones and collective successes that define our journey.
                    </p>
                    
                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm sm:text-base font-medium">View All</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Made with Love - Mobile Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <p className="text-sm sm:text-base text-gray-600 flex items-center justify-center gap-2">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              by Class 11-Newton
            </p>
          </motion.div>
        </div>
      </section>

      {/* Extra Content to Force Scrollbars */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Class Achievements & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Achievement {item}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <span>🏆</span>
                  <span>Outstanding Performance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Student Testimonials</h2>
          <div className="space-y-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Student {item}</h3>
                    <p className="text-gray-600 mb-4">
                      "This class has been an incredible journey of learning and growth. The supportive environment and dedicated teachers have helped me achieve things I never thought possible."
                    </p>
                    <div className="text-sm text-purple-600 font-medium">Class 11-Newton Student</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Class 11-Newton</h3>
            <p className="text-gray-400 mb-6">Excellence in Motion</p>
            <div className="flex justify-center space-x-6">
              <span className="text-gray-400">© 2024 Class 11-Newton. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Temporary Scrollbar Test Section */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Scrollbar Test</h4>
          
          {/* Standard Scrollbar Test */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-1">Standard (6px):</p>
            <div className="w-48 h-24 bg-gray-50 border border-gray-200 rounded p-2 overflow-y-auto">
              <div className="h-64 bg-gradient-to-b from-purple-100 to-blue-100 rounded p-2">
                <p className="text-xs">Scroll to see the standard 6px scrollbar with rgba(0,0,0,0.15) background.</p>
                <div className="mt-4 space-y-2">
                  <div className="h-8 bg-purple-200 rounded"></div>
                  <div className="h-8 bg-blue-200 rounded"></div>
                  <div className="h-8 bg-indigo-200 rounded"></div>
                  <div className="h-8 bg-pink-200 rounded"></div>
                  <div className="h-8 bg-green-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Scrollbar Test */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-1">Custom (4px):</p>
            <div className="w-48 h-24 bg-gray-50 border border-gray-200 rounded p-2 overflow-y-auto custom-scrollbar">
              <div className="h-64 bg-gradient-to-b from-green-100 to-teal-100 rounded p-2">
                <p className="text-xs">Scroll to see the custom 4px scrollbar with rgba(0,0,0,0.12) background.</p>
                <div className="mt-4 space-y-2">
                  <div className="h-8 bg-green-200 rounded"></div>
                  <div className="h-8 bg-teal-200 rounded"></div>
                  <div className="h-8 bg-emerald-200 rounded"></div>
                  <div className="h-8 bg-cyan-200 rounded"></div>
                  <div className="h-8 bg-blue-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Scrollbar Test */}
          <div className="mb-4">
            <p className="text-xs text-gray-600 mb-1">Premium (5px):</p>
            <div className="w-48 h-24 bg-gray-50 border border-gray-200 rounded p-2 overflow-y-auto premium-scrollbar">
              <div className="h-64 bg-gradient-to-b from-purple-100 to-pink-100 rounded p-2">
                <p className="text-xs">Scroll to see the premium 5px scrollbar with rgba(139,92,246,0.08) background.</p>
                <div className="mt-4 space-y-2">
                  <div className="h-8 bg-purple-200 rounded"></div>
                  <div className="h-8 bg-pink-200 rounded"></div>
                  <div className="h-8 bg-rose-200 rounded"></div>
                  <div className="h-8 bg-red-200 rounded"></div>
                  <div className="h-8 bg-orange-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Invisible Scrollbar Test */}
          <div>
            <p className="text-xs text-gray-600 mb-1">Invisible (2px):</p>
            <div className="w-48 h-24 bg-gray-50 border border-gray-200 rounded p-2 overflow-y-auto invisible-scrollbar">
              <div className="h-64 bg-gradient-to-b from-gray-100 to-slate-100 rounded p-2">
                <p className="text-xs">Scroll to see the invisible 2px scrollbar with rgba(0,0,0,0.08) background.</p>
                <div className="mt-4 space-y-2">
                  <div className="h-8 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-slate-200 rounded"></div>
                  <div className="h-8 bg-zinc-200 rounded"></div>
                  <div className="h-8 bg-neutral-200 rounded"></div>
                  <div className="h-8 bg-stone-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;