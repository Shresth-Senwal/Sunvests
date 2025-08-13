import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  heroVariants, 
  heroStagger, 
  heroTitleVariants,
  scrollIndicator,
  buttonHover,
  buttonHoverPrimary,
  imageParallax 
} from '@/utils/animations';

interface HeroSectionProps {
  backgroundImage: string;
  backgroundAlt: string;
  gradientOverlay: string;
  theme?: 'default' | 'it' | 'solar' | 'finance';
  badge?: {
    icon: string;
    text: string;
  };
  title: {
    main: string;
    highlight?: string;
    subtitle?: string;
  };
  description: string;
  buttons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  trustIndicators: Array<{
    text: string;
    color: string;
  }>;
  scrollText?: string;
  height?: 'full' | 'large' | 'medium';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = '/images/chairman-chandrakant-mishra.png',
  backgroundAlt,
  gradientOverlay,
  theme = 'default',
  badge,
  title,
  description,
  buttons,
  trustIndicators,
  scrollText = 'Scroll to explore',
  height = 'full',
}) => {
  const getThemeColors = () => {
    switch (theme) {
      case 'it':
        return {
          primary: 'from-blue-500 via-blue-600 to-purple-600',
          secondary: 'from-blue-400 via-blue-500 to-purple-500',
          badge: 'bg-blue-500/20 border-blue-300/30',
          accent: 'text-blue-300'
        };
      case 'solar':
        return {
          primary: 'from-amber-500 via-orange-500 to-yellow-500',
          secondary: 'from-amber-400 via-orange-400 to-yellow-400',
          badge: 'bg-amber-500/20 border-amber-300/30',
          accent: 'text-amber-300'
        };
      case 'finance':
        return {
          primary: 'from-emerald-500 via-green-500 to-teal-500',
          secondary: 'from-emerald-400 via-green-400 to-teal-400',
          badge: 'bg-emerald-500/20 border-emerald-300/30',
          accent: 'text-emerald-300'
        };
      default:
        return {
          primary: 'from-blue-500 via-blue-600 to-purple-600',
          secondary: 'from-blue-400 via-blue-500 to-purple-500',
          badge: 'bg-white/10 border-white/20',
          accent: 'text-blue-300'
        };
    }
  };

  const themeColors = getThemeColors();
  const heightClass = height === 'full' ? 'min-h-screen' : height === 'large' ? 'min-h-[80vh]' : 'min-h-[60vh]';
  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Enhanced Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={imageParallax}
        initial="initial"
        animate="animate"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={backgroundImage}
          alt={backgroundAlt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
        />
      </motion.div>
      
      {/* Enhanced Multi-layered Background Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} z-10`}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-25"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-15">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-white/4 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="container-custom py-20 md:py-32 relative z-30">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial="initial"
          animate="animate"
          variants={heroStagger}
        >
          {/* Enhanced Service Badge */}
          {badge && (
            <motion.div 
              className={`inline-flex items-center px-6 py-3 backdrop-blur-md rounded-full border mb-8 shadow-lg ${themeColors.badge}`}
              variants={heroVariants}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg mr-2">{badge.icon}</span>
              <span className="text-sm font-semibold text-white/95 tracking-wide">{badge.text}</span>
            </motion.div>
          )}

          {/* Enhanced Main Title */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-[0.85] tracking-tight"
            variants={heroTitleVariants}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {title.main}
            </span>
            {title.highlight && (
              <motion.span 
                className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {title.highlight}
              </motion.span>
            )}
            {title.subtitle && (
              <motion.span 
                className="block text-white/95 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {title.subtitle}
              </motion.span>
            )}
          </motion.h1>
          
          {/* Enhanced Description */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 max-w-5xl mx-auto leading-relaxed font-light text-white/95 drop-shadow-lg"
            variants={heroVariants}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={heroVariants}
          >
            <motion.div {...buttonHoverPrimary}>
              <Link
                href={buttons.primary.href}
                className={`group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r ${themeColors.primary} rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 min-w-[320px] overflow-hidden`}
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${themeColors.secondary} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                <span className="relative z-10 flex items-center gap-3">
                  {buttons.primary.text}
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
            
            <motion.div {...buttonHover}>
              <Link
                href={buttons.secondary.href}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[320px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {buttons.secondary.text}
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90"
            variants={heroVariants}
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold tracking-wide">{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        {...scrollIndicator}
      >
        <motion.div 
          className="flex flex-col items-center gap-3 text-white/70 cursor-pointer"
          whileHover={{ scale: 1.1, color: 'rgba(255, 255, 255, 0.9)' }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm font-medium tracking-wide">{scrollText}</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
            <motion.div 
              className="w-1.5 h-4 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 