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
  imageHover
} from '@/utils/animations';
import { 
  SERVICE_CATEGORIES, 
  CONTACT_CARDS,
  IMAGES
} from '@/utils/constants';

const SolarInstallationPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.FEATURES.SOLAR_INSTALLATION}
        backgroundAlt="Solar Panel Installation Process"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        height="large"
        badge={{
          icon: '🔧',
          text: 'Professional Solar Installation'
        }}
        title={{
          main: 'Solar Panel',
          highlight: 'Installation',
          subtitle: 'Expert Services'
        }}
        description="Expert installation services with <span class='text-yellow-300 font-semibold'>skilled technicians</span>, <span class='text-orange-300 font-semibold'>quality equipment</span>, and <span class='text-amber-300 font-semibold'>comprehensive warranties</span>"
        buttons={{
          primary: {
            text: 'Get Started',
            href: '#contact'
          },
          secondary: {
            text: 'View Process',
            href: '#process'
          }
        }}
        trustIndicators={[
          { text: 'Quality Workmanship', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Premium Equipment', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Extended Warranties', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Safety Standards', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore installation process"
      />



      {/* Core Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Professional Solar Installation Services"
          description="Complete installation solutions from residential rooftops to commercial solar farms."
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
              title: "Residential Installation",
              description: "Expert rooftop solar installation for homes and residential properties",
              icon: "🏠",
              gradient: "from-amber-500 to-orange-500",
              features: [
                "Rooftop Assessment",
                "Panel Mounting Systems",
                "Electrical Integration",
                "Grid Connection",
                "System Commissioning",
                "Performance Testing"
              ]
            },
            {
              title: "Commercial Installation",
              description: "Large-scale solar solutions for businesses and commercial facilities",
              icon: "🏢",
              gradient: "from-orange-500 to-red-500",
              features: [
                "Commercial Rooftops",
                "Ground-Mount Systems",
                "Carport Installations",
                "Industrial Solutions",
                "Energy Storage Integration",
                "Monitoring Systems"
              ]
            },
            {
              title: "Maintenance & Support",
              description: "Ongoing maintenance and support services for optimal performance",
              icon: "🔧",
              gradient: "from-yellow-500 to-amber-500",
              features: [
                "Regular Inspections",
                "Cleaning Services",
                "Performance Monitoring",
                "Repair Services",
                "Warranty Support",
                "System Upgrades"
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

      {/* Installation Process */}
      <Section id="process" background="gradient">
        <SectionHeader
          title="Our Installation Process"
          description="A systematic approach ensuring safe, efficient, and high-quality solar installations."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              step: "01",
              title: "Site Preparation",
              description: "Safety setup and site preparation",
              icon: "🏗️"
            },
            {
              step: "02",
              title: "Mounting System",
              description: "Install racking and mounting hardware",
              icon: "🔩"
            },
            {
              step: "03",
              title: "Panel Installation",
              description: "Mount solar panels securely",
              icon: "☀️"
            },
            {
              step: "04",
              title: "Electrical Work",
              description: "Wire panels and install inverters",
              icon: "⚡"
            },
            {
              step: "05",
              title: "Grid Connection",
              description: "Connect to utility grid",
              icon: "🔌"
            },
            {
              step: "06",
              title: "Testing & Commissioning",
              description: "System testing and activation",
              icon: "✅"
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
              {index < 5 && (
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
              title="Why Choose Our Installation Services?"
              description="Professional installation with skilled technicians and industry-leading warranties."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Technicians',
                  description: 'Installers with extensive training and experience.',
                  icon: '👨‍🔧'
                },
                {
                  title: 'Quality Equipment',
                  description: 'Premium solar panels and components from trusted manufacturers.',
                  icon: '⚡'
                },
                {
                  title: 'Comprehensive Warranties',
                  description: '25-year equipment warranties and workmanship guarantees.',
                  icon: '🛡️'
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
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Installation Process"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            

          </motion.div>
        </div>
      </Section>

      {/* Contact Section - Fixed CTA with proper contrast */}
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
              Ready for Professional Solar Installation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100 leading-relaxed">
              Schedule your solar installation with skilled technicians and industry-leading warranties.
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
};

export default SolarInstallationPage; 
