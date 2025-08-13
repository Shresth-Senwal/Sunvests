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
  CONTACT_CARDS,
  IMAGES
} from '@/utils/constants';

const performanceMetrics = [
  {
    title: 'Real-time Monitoring',
    description: 'Advanced monitoring systems that track your solar panel performance continuously with instant alerts.',
    icon: '📊',
    features: ['Live data tracking', 'Mobile app access', 'Instant notifications', 'Historical analysis'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Energy Analytics',
    description: 'Comprehensive analytics to optimize your solar energy production and consumption patterns.',
    icon: '⚡',
    features: ['Energy forecasting', 'Usage optimization', 'Peak hour analysis', 'Efficiency reports'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Performance Optimization',
    description: 'AI-driven optimization algorithms that maximize your solar system efficiency and output.',
    icon: '🎯',
    features: ['AI optimization', 'Predictive maintenance', 'Performance tuning', 'System upgrades'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'Maintenance Alerts',
    description: 'Proactive maintenance scheduling based on performance data and predictive analytics.',
    icon: '🔧',
    features: ['Predictive alerts', 'Scheduled maintenance', 'Issue detection', 'Repair coordination'],
    gradient: 'from-purple-500 to-pink-500'
  }
];

const benefits = [
  {
    title: 'Maximize Efficiency',
    description: 'Optimize your solar system performance to achieve maximum energy output and cost savings.',
    icon: '⚡',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Reduce Downtime',
    description: 'Minimize system downtime with predictive maintenance and early issue detection.',
    icon: '🔧',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Cost Savings',
    description: 'Reduce maintenance costs and extend system lifespan through optimized performance.',
    icon: '💰',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    title: 'Data Insights',
    description: 'Gain valuable insights into your energy consumption patterns and optimization opportunities.',
    icon: '📊',
    gradient: 'from-purple-400 to-pink-500'
  }
];

const monitoringFeatures = [
  {
    title: 'Smart Inverter Monitoring',
    description: 'Monitor inverter performance, efficiency, and health status in real-time.',
    icon: '🔌'
  },
  {
    title: 'Weather Integration',
    description: 'Weather data integration for accurate performance forecasting and planning.',
    icon: '🌤️'
  },
  {
    title: 'Grid Connection Status',
    description: 'Monitor grid connection status and power export/import in real-time.',
    icon: '🔗'
  },
  {
    title: 'Battery Management',
    description: 'Advanced battery monitoring for energy storage systems and backup power.',
    icon: '🔋'
  }
];

export default function SystemPerformancePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.FEATURES.SOLAR_INSTALLATION}
        backgroundAlt="Solar System Performance Monitoring Dashboard"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        height="medium"
        badge={{
          icon: '📊',
          text: 'Advanced Performance Monitoring'
        }}
        title={{
          main: 'System',
          highlight: 'Performance',
          subtitle: 'Monitoring'
        }}
        description="Maximize your solar investment with our <span class='text-yellow-300 font-semibold'>advanced monitoring systems</span>, <span class='text-orange-300 font-semibold'>AI-driven optimization</span>, and <span class='text-amber-300 font-semibold'>predictive maintenance</span>"
        buttons={{
          primary: {
            text: 'Monitor Your System',
            href: '#contact'
          },
          secondary: {
            text: 'View Features',
            href: '#features'
          }
        }}
        trustIndicators={[
          { text: 'Continuous Uptime Monitoring', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Real-time Analytics', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'AI-Powered Optimization', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Round-the-Clock Support', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore monitoring features"
      />

      {/* Performance Metrics Section */}
      <Section id="features" background="white">
        <SectionHeader
          title="Advanced Performance Monitoring"
          description="Our comprehensive monitoring system ensures your solar installation operates at peak efficiency with real-time insights and predictive analytics."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {performanceMetrics.map((metric) => (
            <motion.div
              key={metric.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {metric.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{metric.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{metric.description}</p>
                  <ul className="space-y-2">
                    {metric.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-slate-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
          title="Performance Monitoring Benefits"
          description="Discover how our advanced monitoring system can optimize your solar investment and maximize returns."
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
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              variants={fadeInUp}
              {...cardHoverSubtle}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className="text-3xl">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Monitoring Features */}
      <Section background="white">
        <SectionHeader
          title="Comprehensive Monitoring Features"
          description="Our monitoring system covers every aspect of your solar installation for complete visibility and control."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {monitoringFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              variants={fadeInUp}
              {...cardHoverSubtle}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                              <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Choose Our Monitoring */}
      <Section background="gradient">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Why Choose Our Performance Monitoring?"
              description="Advanced technology meets expert support to deliver unparalleled solar system monitoring and optimization."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'AI-Powered Analytics',
                  description: 'Machine learning algorithms analyze your system performance and predict optimal operation patterns.',
                  icon: '🤖'
                },
                {
                  title: 'Mobile App Control',
                  description: 'Monitor and control your solar system from anywhere with our intuitive mobile application.',
                  icon: '📱'
                },
                {
                  title: 'Expert Support',
                  description: 'Our technical experts provide ongoing support and optimization recommendations.',
                  icon: '👨‍💼'
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
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Performance Monitoring Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            

          </motion.div>
        </div>
      </Section>

      {/* Contact Section - Updated to match Solar theme pattern */}
      <Section id="contact" background="white">
        <div className="bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Optimize Your Solar Performance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100 leading-relaxed">
              Get complete visibility into your solar system performance with our advanced monitoring solutions.
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
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:bck@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
              >
                Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
} 
