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
  CONTACT_CARDS
} from '@/utils/constants';

const StrategyConsultingPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Strategic Technology Consulting and Digital Transformation"
        gradientOverlay="from-indigo-900/95 via-purple-900/90 to-blue-900/95"
        theme="it"
        height="large"
        badge={{
          icon: '🎯',
          text: 'Strategic Technology Consulting'
        }}
        title={{
          main: 'Strategy',
          highlight: 'Consulting',
          subtitle: 'Services'
        }}
        description="Drive digital transformation with our <span class='text-indigo-300 font-semibold'>strategic technology consulting</span>, <span class='text-purple-300 font-semibold'>business alignment</span>, and <span class='text-blue-300 font-semibold'>innovation roadmaps</span>"
        buttons={{
          primary: {
            text: 'Start Strategic Planning',
            href: '#contact'
          },
          secondary: {
            text: 'View Services',
            href: '#services'
          }
        }}
        trustIndicators={[
          { text: 'Digital Strategy', color: SERVICE_CATEGORIES.IT_SERVICES.colors.accent },
          { text: 'Technology Roadmaps', color: SERVICE_CATEGORIES.IT_SERVICES.colors.accent },
          { text: 'Business Alignment', color: SERVICE_CATEGORIES.IT_SERVICES.colors.accent },
          { text: 'Innovation Planning', color: SERVICE_CATEGORIES.IT_SERVICES.colors.accent }
        ]}
        scrollText="Explore strategic solutions"
      />



      {/* Core Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Strategic Technology Consulting Services"
          description="Comprehensive consulting services to align technology with business objectives and drive sustainable growth."
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
              title: "Digital Strategy & Roadmapping",
              description: "Comprehensive digital transformation strategies aligned with business goals",
              icon: "🗺️",
              gradient: "from-indigo-500 to-purple-500",
              features: [
                "Digital Maturity Assessment",
                "Technology Roadmap Development",
                "Business Process Optimization",
                "Change Management Strategy",
                "ROI Analysis & Planning",
                "Risk Assessment & Mitigation"
              ]
            },
            {
              title: "Technology Architecture",
              description: "Enterprise architecture design for scalable, future-ready systems",
              icon: "🏗️",
              gradient: "from-purple-500 to-blue-500",
              features: [
                "Enterprise Architecture Design",
                "System Integration Planning",
                "Technology Stack Selection",
                "Scalability & Performance Planning",
                "Security Architecture",
                "Cloud Strategy & Migration"
              ]
            },
            {
              title: "Innovation & Growth",
              description: "Innovation strategies to drive competitive advantage and market growth",
              icon: "💡",
              gradient: "from-blue-500 to-indigo-500",
              features: [
                "Innovation Framework Development",
                "Emerging Technology Assessment",
                "Market Analysis & Positioning",
                "Product Strategy & Planning",
                "Competitive Intelligence",
                "Growth Strategy Development"
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
                    <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Consulting Process */}
      <Section background="gradient">
        <SectionHeader
          title="Our Strategic Consulting Process"
          description="A proven methodology for delivering strategic insights and actionable recommendations."
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
              title: "Discovery",
              description: "Business analysis and current state assessment",
              icon: "🔍"
            },
            {
              step: "02",
              title: "Strategy",
              description: "Strategic planning and roadmap development",
              icon: "📋"
            },
            {
              step: "03",
              title: "Design",
              description: "Solution architecture and implementation planning",
              icon: "🎨"
            },
            {
              step: "04",
              title: "Execution",
              description: "Implementation support and change management",
              icon: "⚡"
            },
            {
              step: "05",
              title: "Optimization",
              description: "Continuous improvement and performance monitoring",
              icon: "📊"
            }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              className="text-center relative"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.icon}
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
              {index < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
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
              title="Why Choose Our Strategy Consulting?"
              description="We combine deep industry expertise with proven methodologies to deliver strategic value."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Proven Methodology',
                  description: 'Time-tested frameworks and methodologies that deliver consistent results.',
                  icon: '📊'
                },
                {
                  title: 'Industry Expertise',
                  description: 'Deep understanding of technology trends and business transformation.',
                  icon: '🎯'
                },
                {
                  title: 'Actionable Insights',
                  description: 'Strategic recommendations that are practical and implementable.',
                  icon: '💡'
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
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Technology Strategy and Digital Business Solutions"
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
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business Strategy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100 leading-relaxed">
              Let our strategy consultants help you align technology with business objectives and drive sustainable growth.
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
                className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:info@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
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

export default StrategyConsultingPage; 