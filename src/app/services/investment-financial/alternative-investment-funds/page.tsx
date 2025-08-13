'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import ContactInfoCard from '@/components/ContactInfoCard';
import { 
  fadeInUp
} from '@/utils/animations';
import { 
  CONTACT_CARDS
} from '@/utils/constants';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AlternativeInvestmentFundsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Alternative Investment Funds"
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
            className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-3xl"
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
              <span className="text-lg mr-2">🏗️</span>
              <span className="text-sm font-semibold text-white/95 tracking-wide">Sophisticated Investment Solutions</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.85] tracking-tight"
              variants={fadeInUp}
            >
              <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                Alternative Investment
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Funds
              </motion.span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light text-white/95 drop-shadow-lg"
              variants={fadeInUp}
            >
              Access <span className="text-emerald-300 font-semibold">exclusive investment opportunities</span> for sophisticated investors seeking <span className="text-green-300 font-semibold">higher returns</span> and <span className="text-teal-300 font-semibold">portfolio diversification</span>
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
                  Explore AIF Opportunities
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
              
              <Link
                href="#categories"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 min-w-[280px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Categories
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
                { text: 'Category I, II & III', icon: '✓' },
                { text: 'Professional Management', icon: '✓' },
                { text: 'High Returns Potential', icon: '✓' }
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
                Sophisticated Investment Solutions
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Alternative Investment Funds (AIFs) offer sophisticated investors access to unique investment opportunities beyond traditional asset classes. Our AIF solutions provide exposure to private equity, hedge funds, real estate, and other alternative investments designed to enhance portfolio returns and reduce correlation with traditional markets.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Access to exclusive investment opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Portfolio diversification beyond traditional assets</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Professional fund management and due diligence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Potential for higher risk-adjusted returns</span>
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
                alt="Alternative Investment Strategies"
                width={1000}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AIF Categories */}
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
              AIF Categories & Investment Options
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Comprehensive range of alternative investment funds across different categories and risk profiles
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              {
                title: "Category I AIFs",
                description: "Social venture funds, infrastructure funds, and SME funds",
                icon: "🏗️",
                features: [
                  "Infrastructure development funds",
                  "Social venture capital funds",
                  "SME focused investment funds",
                  "Angel investor networks",
                  "Government incentive eligible",
                  "Long-term value creation"
                ]
              },
              {
                title: "Category II AIFs",
                description: "Private equity, debt funds, and fund of funds",
                icon: "💼",
                features: [
                  "Private equity funds",
                  "Debt oriented funds",
                  "Fund of funds structures",
                  "Real estate investment funds",
                  "Distressed asset funds",
                  "Growth capital funds"
                ]
              },
              {
                title: "Category III AIFs",
                description: "Hedge funds and trading oriented strategies",
                icon: "📈",
                features: [
                  "Hedge fund strategies",
                  "Long-short equity funds",
                  "Market neutral strategies",
                  "Arbitrage opportunities",
                  "Derivatives based strategies",
                  "High frequency trading"
                ]
              }
            ].map((category) => (
              <motion.div
                key={category.title}
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{category.title}</h3>
                <p className="text-[var(--text-light)] mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-[var(--text-light)]">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
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
              AIF Investment Process
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Structured approach to alternative investment fund selection and portfolio construction
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
                title: "Investor Profiling",
                description: "Comprehensive assessment of investment objectives, risk tolerance, and liquidity needs"
              },
              {
                step: "02",
                title: "Fund Selection",
                description: "Due diligence and selection of appropriate AIF strategies based on investor profile"
              },
              {
                step: "03",
                title: "Portfolio Construction",
                description: "Strategic allocation across different AIF categories for optimal diversification"
              },
              {
                step: "04",
                title: "Ongoing Monitoring",
                description: "Continuous monitoring and periodic review of fund performance and strategy"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-[var(--secondary)] p-6 rounded-lg text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold text-[var(--primary)] mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{process.title}</h3>
                <p className="text-[var(--text-light)]">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Updated to match Portfolio Management structure */}
      <Section id="contact" background="white">
        <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Explore Alternative Investments?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Discover sophisticated investment opportunities with our expert AIF advisory services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {CONTACT_CARDS.map((info) => (
                <ContactInfoCard
                  key={info.title}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                  link={info.link}
                  external={info.external}
                />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+919412079608" 
                className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:bck@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};

export default AlternativeInvestmentFundsPage; 
