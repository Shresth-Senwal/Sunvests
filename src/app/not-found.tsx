'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl"
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
        </div>

        <div className="container-custom py-20 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <motion.div
              className="text-8xl sm:text-9xl md:text-[12rem] font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            >
              404
            </motion.div>

            {/* Error Message */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Oops! Page Not Found
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
                             The page you&apos;re looking for doesn&apos;t exist or has been moved. 
               Let&apos;s get you back on track with our services.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link
                href="/"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 min-w-[280px] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  Back to Home
                </span>
              </Link>

              <Link
                href="#services"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[280px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Services
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                {
                  title: 'IT Services',
                  description: 'AI, Software Engineering, Cloud Solutions',
                  href: '/services/it-services',
                  icon: '💻',
                  gradient: 'from-blue-500 to-purple-500'
                },
                {
                  title: 'Solar Power',
                  description: 'Solar Installation, Maintenance, Consultation',
                  href: '/services/solar-power',
                  icon: '☀️',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  title: 'Investment & Financial',
                  description: 'Portfolio Management, Financial Planning',
                  href: '/services/investment-financial',
                  icon: '💰',
                  gradient: 'from-green-500 to-emerald-500'
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={service.href}
                    className="group block p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
                             <p className="text-white/60 mb-4">Need help finding what you&apos;re looking for?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="tel:+919412079608"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  +91 94120 79608
                </Link>
                <span className="hidden sm:block text-white/40">|</span>
                <Link
                  href="mailto:info@sunvests.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  info@sunvests.com
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 