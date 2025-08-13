'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import ContactInfoCard from '@/components/ContactInfoCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  fadeInUp, 
  fadeInLeft,
  fadeInRight,
  staggerContainer, 
  cardHover,
  cardHoverSubtle,
  imageHover
} from '@/utils/animations';
import { 
  SERVICE_CATEGORIES, 
  CONTACT_CARDS
} from '@/utils/constants';

const mldTypes = [
  {
    title: 'Equity-Linked Debentures',
    description: 'Market-linked debentures with returns tied to equity market performance.',
    features: ['Equity index linked', 'Capital protection options', 'Tax efficient', 'Flexible tenure'],
    riskLevel: 'Medium-High Risk',
    gradient: 'from-emerald-500 to-green-500',
    icon: '📈'
  },
  {
    title: 'Commodity-Linked Debentures',
    description: 'Returns linked to commodity prices like gold, silver, and other precious metals.',
    features: ['Gold/Silver linked', 'Commodity diversification', 'Inflation hedge', 'Physical delivery option'],
    riskLevel: 'Medium Risk',
    gradient: 'from-amber-500 to-orange-500',
    icon: '🥇'
  },
  {
    title: 'Currency-Linked Debentures',
    description: 'Debentures with returns based on foreign exchange rate movements.',
    features: ['USD/EUR linked', 'Currency hedging', 'Global exposure', 'Risk management'],
    riskLevel: 'Low-Medium Risk',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💱'
  },
  {
    title: 'Hybrid Debentures',
    description: 'Combination of multiple underlying assets for balanced risk-return profile.',
    features: ['Multi-asset exposure', 'Balanced returns', 'Risk diversification', 'Professional management'],
    riskLevel: 'Medium Risk',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🔄'
  }
];

const benefits = [
  {
    title: 'Higher Returns',
    description: 'Potential for higher returns compared to traditional fixed deposits and bonds.',
    icon: '📈',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Capital Protection',
    description: 'Many MLDs offer partial or full capital protection at maturity.',
    icon: '🛡️',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Tax Efficiency',
    description: 'Tax-efficient structure with potential for capital gains treatment.',
    icon: '💰',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Diversification',
    description: 'Access to various asset classes through a single investment instrument.',
    icon: '🔄',
    gradient: 'from-orange-400 to-red-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Risk Assessment',
    description: 'Evaluate your risk tolerance and investment objectives for MLD selection.',
    duration: '1 Day',
    icon: 'assessment'
  },
  {
    step: '02',
    title: 'Product Selection',
    description: 'Choose the right MLD based on underlying asset and return expectations.',
    duration: '2-3 Days',
    icon: 'selection'
  },
  {
    step: '03',
    title: 'Documentation',
    description: 'Complete KYC, application forms, and investment documentation.',
    duration: '3-5 Days',
    icon: 'documentation'
  },
  {
    step: '04',
    title: 'Investment & Monitoring',
    description: 'Investment execution and regular monitoring of performance.',
    duration: 'Ongoing',
    icon: 'monitoring'
  }
];



export default function MarketLinkedDebenturesPage() {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Market-Linked Debentures Investment"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        height="large"
        badge={{
          icon: '📊',
          text: 'Market-Linked Investment Solutions'
        }}
        title={{
          main: 'Market-Linked',
          highlight: 'Debentures',
          subtitle: 'Smart Investment Choice'
        }}
        description="Maximize your returns with our <span class='text-emerald-300 font-semibold'>market-linked debentures</span>, offering <span class='text-green-300 font-semibold'>higher growth potential</span> and <span class='text-teal-300 font-semibold'>capital protection</span>"
        buttons={{
          primary: {
            text: 'Explore MLDs',
            href: '#contact'
          },
          secondary: {
            text: 'View Options',
            href: '#types'
          }
        }}
        trustIndicators={[
          { text: 'Higher Return Potential', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'Capital Protection Options', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'Diversified Underlying Assets', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'Fixed Income with Equity Upside', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent }
        ]}
        scrollText="Discover MLD options"
      />

      {/* Stats Section removed for legal compliance - no quantitative claims */}

      {/* MLD Types Section */}
      <Section id="types" background="white">
        <SectionHeader
          title="Market-Linked Debenture Options"
          description="Choose from our diverse range of market-linked debentures designed to match your investment goals and risk appetite."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mldTypes.map((mld) => (
            <motion.div
              key={mld.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${mld.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {mld.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{mld.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{mld.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 font-medium">Risk Level</div>
                    <div className="text-lg font-bold text-emerald-600">{mld.riskLevel}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {mld.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                        {feature}
                </li>
                    ))}
              </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section background="gradient">
        <SectionHeader
          title="Why Choose Market-Linked Debentures?"
          description="MLDs offer a unique combination of growth potential and capital protection, making them ideal for balanced portfolios."
        />

            <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
              initial="initial"
              whileInView="animate"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHoverSubtle}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className="text-2xl font-black text-white">{benefit.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process Section */}
      <Section background="white">
        <SectionHeader
          title="Simple Investment Process"
          description="Invest in market-linked debentures with our streamlined process and expert guidance."
        />
        
          <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          viewport={{ once: true }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
            variants={fadeInUp}
          >
              <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-black text-emerald-500">{step.step}</div>
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gradient">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Why Choose Our MLD Services?"
              description="We provide expert guidance and access to the best market-linked debentures from top issuers."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Analysis',
                  description: 'In-depth analysis of underlying assets and market conditions for informed decisions.',
                  icon: '🔍'
                },
                {
                  title: 'Risk Management',
                  description: 'Comprehensive risk assessment and portfolio diversification strategies.',
                  icon: '⚖️'
                },
                {
                  title: 'Regular Monitoring',
                  description: 'Continuous monitoring of market performance and timely updates on your investments.',
                  icon: '📊'
                }
              ].map((feature, index) => (
              <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
              </motion.div>
            ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            {...imageHover}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Market-Linked Debentures Analysis"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            

          </motion.div>
                  </div>
      </Section>



      {/* Contact Section */}
      <Section id="contact" background="gradient">
        <SectionHeader
          title="Start Your MLD Investment Journey"
          description="Explore market-linked debentures and maximize your investment potential with our expert guidance."
        />

          <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={staggerContainer}
            initial="initial"
            whileInView="animate"
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-100"
            variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          {...cardHover}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Maximize Your Investment Returns
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take advantage of market opportunities with our carefully selected market-linked debentures.
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="btn-primary bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore MLDs
              </Link>
            <Link 
              href="tel:+919412079608" 
              className="btn-secondary border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Call: +91 94120 79608
              </Link>
            </div>
          </motion.div>
      </Section>
    </Layout>
  );
} 
