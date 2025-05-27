'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BondsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Bond Investment Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Enhanced Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-green-900/90 to-teal-900/95 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-15">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl"
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
        
        <div className="container-custom py-20 relative z-30">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            {/* Service Badge */}
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-300/30 mb-8 shadow-lg"
              variants={fadeInUp}
            >
              <span className="text-lg mr-2">🏦</span>
              <span className="text-sm font-semibold text-white/95 tracking-wide">Secure Investment Solutions</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-[0.85] tracking-tight"
              variants={fadeInUp}
            >
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Bond Investment
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Solutions
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light text-white/95 drop-shadow-lg"
              variants={fadeInUp}
            >
              Secure your financial future with our <span className="text-emerald-300 font-semibold">comprehensive bond portfolio</span> offering <span className="text-green-300 font-semibold">stable returns</span> and <span className="text-teal-300 font-semibold">capital preservation</span>
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 min-w-[280px] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Explore Bond Options
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
              
              <Link
                href="#benefits"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[280px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Benefits
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90"
              variants={fadeInUp}
            >
              {[
                { text: 'AAA-Rated Bonds', icon: '✓' },
                { text: 'Tax-Free Options', icon: '✓' },
                { text: 'Competitive Returns', icon: '✓' }
              ].map((indicator, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center">
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
      </section>

      {/* Service Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Professional Bond Investment Services
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Bonds are essential components of a well-diversified investment portfolio, offering predictable income streams and capital preservation. Our expert team helps you navigate the bond market to find investments that align with your risk tolerance and financial objectives.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Government and corporate bonds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tax-free municipal bonds</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>High-yield and investment-grade options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Portfolio diversification strategies</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bond Investment"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bond Types */}
      <section className="section bg-[var(--secondary)]">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Types of Bonds We Offer
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Diversify your portfolio with our comprehensive range of bond investment options
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              {
                title: "Government Bonds",
                description: "Secure investments backed by government guarantee with stable returns",
                icon: "🏛️",
                features: [
                  "Treasury Bills (T-Bills)",
                  "Government Securities (G-Secs)",
                  "State Development Loans",
                  "Sovereign Gold Bonds",
                  "Inflation-Indexed Bonds"
                ],
                riskLevel: "Low Risk"
              },
              {
                title: "Corporate Bonds",
                description: "Higher yield opportunities from creditworthy corporate issuers",
                icon: "🏢",
                features: [
                  "AAA-rated Corporate Bonds",
                  "Banking Sector Bonds",
                  "Infrastructure Bonds",
                  "Convertible Bonds",
                  "Zero Coupon Bonds"
                ],
                riskLevel: "Medium Risk"
              },
              {
                title: "Tax-Free Bonds",
                description: "Maximize after-tax returns with tax-efficient bond investments",
                icon: "💰",
                features: [
                  "Municipal Corporation Bonds",
                  "Infrastructure Finance Bonds",
                  "Public Sector Undertaking Bonds",
                  "Housing Finance Bonds",
                  "Power Sector Bonds"
                ],
                riskLevel: "Low-Medium Risk"
              }
            ].map((bond) => (
              <motion.div
                key={bond.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-5xl mb-6 text-center">{bond.icon}</div>
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-4 text-center">{bond.title}</h3>
                <p className="text-[var(--text-light)] mb-6 text-center">{bond.description}</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[var(--text)]">Risk Level:</span>
                    <span className="text-sm text-[var(--primary)] font-semibold">{bond.riskLevel}</span>
                  </div>

                </div>

                <ul className="space-y-3">
                  {bond.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg className="w-5 h-5 text-[var(--primary)] mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Our Bond Investment Process
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              A systematic approach to building your bond portfolio
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              {
                step: "01",
                title: "Risk Assessment",
                description: "Evaluate your risk tolerance and investment objectives"
              },
              {
                step: "02",
                title: "Portfolio Analysis",
                description: "Analyze your current portfolio and identify bond allocation needs"
              },
              {
                step: "03",
                title: "Bond Selection",
                description: "Select appropriate bonds based on duration, credit quality, and yield"
              },
              {
                step: "04",
                title: "Monitoring & Review",
                description: "Continuous monitoring and periodic review of bond performance"
              }
            ].map((step) => (
              <motion.div
                key={step.step}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{step.title}</h3>
                <p className="text-[var(--text-light)]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Bond Investment Benefits"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Why Invest in Bonds?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Stable Income",
                    description: "Regular interest payments provide predictable income streams"
                  },
                  {
                    title: "Capital Preservation",
                    description: "Lower volatility compared to equities helps preserve capital"
                  },
                  {
                    title: "Portfolio Diversification",
                    description: "Reduces overall portfolio risk through asset class diversification"
                  },
                  {
                    title: "Tax Benefits",
                    description: "Tax-free bonds offer attractive after-tax returns"
                  },
                  {
                    title: "Inflation Protection",
                    description: "Inflation-indexed bonds protect against rising prices"
                  }
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start">
                    <div className="w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{benefit.title}</h3>
                      <p className="text-[var(--text-light)]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build a Stable Bond Portfolio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our bond investment experts help you create a diversified portfolio that meets your income and capital preservation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+919412079608" className="btn-secondary bg-white text-[var(--primary)] hover:bg-gray-100">
                Call +91 94120 79608
              </Link>
              <Link href="mailto:info@sunvests.com" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary)]">
                Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BondsPage; 