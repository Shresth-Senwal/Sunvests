'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import ContactInfoCard from '@/components/ContactInfoCard';
import { 
  fadeInUp, 
  fadeInLeft,
  fadeInRight,
  staggerContainer, 
  cardHover,
  imageHover
} from '@/utils/animations';
import { 
  SERVICE_CATEGORIES, 
  CONTACT_CARDS
} from '@/utils/constants';

const CommercialSolarPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Commercial Solar Installation and Energy Solutions"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        height="large"
        badge={{
          icon: '🏭',
          text: 'Commercial Solar Solutions'
        }}
        title={{
          main: 'Commercial',
          highlight: 'Solar Power',
          subtitle: 'Solutions'
        }}
        description="Transform your business with <span class='text-yellow-300 font-semibold'>large-scale solar installations</span>, <span class='text-orange-300 font-semibold'>significant cost savings</span>, and <span class='text-amber-300 font-semibold'>sustainable energy independence</span>"
        buttons={{
          primary: {
            text: 'Contact Us',
            href: '#contact'
          },
          secondary: {
            text: 'View Solutions',
            href: '#services'
          }
        }}
        trustIndicators={[
          { text: 'Industrial Scale Systems', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Net Metering Solutions', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Tax Incentive Optimization', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Grid Independence', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore commercial solutions"
      />



      {/* Core Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Comprehensive Commercial Solar Solutions"
          description="End-to-end solar solutions designed for businesses, industries, and commercial facilities."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Rooftop Solar Systems",
              description: "Maximize your roof space with high-efficiency commercial solar installations",
              icon: "🏢",
              gradient: "from-amber-500 to-orange-500",
              features: [
                "High-Efficiency Panels",
                "Structural Engineering",
                "Grid-Tie Integration",
                "Remote Monitoring",
                "Performance Optimization",
                "Maintenance Support"
              ]
            },
            {
              title: "Ground-Mount Systems",
              description: "Large-scale ground installations for maximum energy generation",
              icon: "🌞",
              gradient: "from-orange-500 to-red-500",
              features: [
                "Utility-Scale Design",
                "Land Optimization",
                "Tracking Systems",
                "Weather Monitoring",
                "Grid Synchronization",
                "Environmental Compliance"
              ]
            },
            {
              title: "Energy Storage Solutions",
              description: "Battery storage systems for energy independence and backup power",
              icon: "🔋",
              gradient: "from-yellow-500 to-amber-500",
              features: [
                "Battery Management Systems",
                "Peak Shaving",
                "Load Balancing",
                "Backup Power",
                "Grid Stabilization",
                "Smart Controls"
              ]
            }
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 mb-6 mx-auto`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Business Benefits */}
      <Section background="gradient">
        <SectionHeader
          title="Why Businesses Choose Solar"
          description="Discover the compelling business advantages of commercial solar power systems."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Cost Reduction',
              description: 'Significantly reduce electricity costs and improve bottom line',
              icon: '💰',
              color: 'from-green-500 to-emerald-500'
            },
            {
              title: 'Tax Benefits',
              description: 'Accelerated depreciation and tax incentives for solar investments',
              icon: '📊',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Brand Value',
              description: 'Enhance corporate sustainability and environmental responsibility',
              icon: '🌱',
              color: 'from-emerald-500 to-green-500'
            },
            {
              title: 'Energy Security',
              description: 'Reduce dependence on grid power and ensure energy reliability',
              icon: '🔒',
              color: 'from-amber-500 to-orange-500'
            }
          ].map((benefit) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 mb-4 mx-auto`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Implementation Process */}
      <Section background="white">
        <SectionHeader
          title="Commercial Solar Implementation Process"
          description="Our systematic approach ensures seamless installation and optimal performance for your business."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              step: "01",
              title: "Site Assessment",
              description: "Comprehensive evaluation of your facility and energy needs",
              icon: "🔍"
            },
            {
              step: "02",
              title: "System Design",
              description: "Custom engineering and optimal system configuration",
              icon: "📐"
            },
            {
              step: "03",
              title: "Permits & Approvals",
              description: "Handle all regulatory requirements and grid approvals",
              icon: "📋"
            },
            {
              step: "04",
              title: "Installation",
              description: "Professional installation with minimal business disruption",
              icon: "🔧"
            },
            {
              step: "05",
              title: "Commissioning",
              description: "System testing, grid connection, and performance monitoring",
              icon: "⚡"
            }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              className="text-center relative"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.icon}
                </div>
                <div className="text-sm font-semibold text-amber-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
              {index < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
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

      {/* Success Stories section removed for legal compliance - no quantitative claims */}

      {/* Why Choose Us */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Why Choose Our Commercial Solar Solutions?"
              description="Industry-leading expertise in large-scale solar installations with proven track record."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Proven Expertise',
                  description: 'Extensive experience in commercial installations with industry-leading performance.',
                  icon: '🏆'
                },
                {
                  title: 'Turnkey Solutions',
                  description: 'Complete project management from design to commissioning and maintenance.',
                  icon: '🔧'
                },
                {
                  title: 'Financial Benefits',
                  description: 'Maximize ROI with optimal system design and available incentives.',
                  icon: '💰'
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
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Commercial Solar Installation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            

          </motion.div>
        </div>
      </Section>

      {/* Contact Section - Consistent with Portfolio Management structure */}
      <Section id="contact" background="white">
        <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25A6.25 6.25 0 1 0 18.25 8.5a2 2 0 0 1 3.5 0A9.75 9.75 0 1 1 12 2.25Z"/>
                <path d="M12 8a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1Z"/>
                <path d="M12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Power Your Business with Solar?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100 leading-relaxed">
              Transform your business operations with commercial solar solutions that deliver significant cost savings and energy independence.
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
                className="bg-white text-orange-900 hover:bg-yellow-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:info@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-orange-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
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

export default CommercialSolarPage; 