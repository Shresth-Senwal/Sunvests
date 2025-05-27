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

const SolarMaintenancePage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Solar Panel Maintenance"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        height="large"
        badge={{
          icon: '🔧',
          text: 'Professional Solar Maintenance'
        }}
        title={{
          main: 'Solar',
          highlight: 'Maintenance',
          subtitle: '& Support'
        }}
        description="Keep your solar system performing at peak efficiency with our <span class='text-yellow-300 font-semibold'>preventive maintenance</span>, <span class='text-orange-300 font-semibold'>performance monitoring</span>, and <span class='text-amber-300 font-semibold'>expert support</span>"
        buttons={{
          primary: {
            text: 'Schedule Maintenance',
            href: '#contact'
          },
          secondary: {
            text: 'View Services',
            href: '#services'
          }
        }}
        trustIndicators={[
          { text: 'Preventive Care', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Performance Monitoring', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Expert Technicians', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Round-the-Clock Support', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore maintenance services"
      />



      {/* Core Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Comprehensive Solar Maintenance Services"
          description="Complete maintenance solutions to ensure optimal performance and longevity of your solar investment."
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
              title: "Preventive Maintenance",
              description: "Regular maintenance to prevent issues and optimize performance",
              icon: "🛠️",
              gradient: "from-amber-500 to-orange-500",
              features: [
                "Panel Cleaning & Inspection",
                "Electrical Connection Check",
                "Inverter Maintenance",
                "Performance Testing",
                "Weather Seal Inspection",
                "Safety System Verification"
              ]
            },
            {
              title: "Performance Monitoring",
              description: "Continuous monitoring and optimization of system performance",
              icon: "📊",
              gradient: "from-orange-500 to-red-500",
              features: [
                "Real-time Performance Tracking",
                "Energy Production Analysis",
                "Fault Detection & Alerts",
                "Efficiency Optimization",
                "Historical Data Analysis",
                "Performance Reports"
              ]
            },
            {
              title: "Repair & Support",
              description: "Expert repair services and technical support when you need it",
              icon: "🔧",
              gradient: "from-yellow-500 to-amber-500",
              features: [
                "Emergency Repair Services",
                "Component Replacement",
                "System Troubleshooting",
                "Warranty Claim Support",
                "Technical Consultation",
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

      {/* Maintenance Schedule */}
      <Section background="gradient">
        <SectionHeader
          title="Maintenance Schedule & Plans"
          description="Flexible maintenance plans designed to keep your solar system operating at peak performance."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              plan: "Basic",
              frequency: "Annual",
              description: "Essential maintenance for optimal performance",
              icon: "🔍",
              features: [
                "Annual System Inspection",
                "Panel Cleaning",
                "Performance Report",
                "Basic Troubleshooting",
                "Safety Check"
              ]
            },
            {
              plan: "Premium",
              frequency: "Bi-Annual",
              description: "Comprehensive maintenance with monitoring",
              icon: "⚡",
              features: [
                "Bi-Annual Inspections",
                "Quarterly Cleaning",
                "Performance Monitoring",
                "Priority Support",
                "Detailed Analytics"
              ]
            },
            {
              plan: "Enterprise",
              frequency: "Quarterly",
              description: "Complete maintenance with continuous monitoring",
              icon: "🏆",
              features: [
                "Quarterly Inspections",
                "Monthly Cleaning",
                "Continuous Monitoring",
                "Emergency Response",
                "System Optimization"
              ]
            }
                     ].map((plan) => (
             <motion.div
               key={plan.plan}
               className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
               variants={fadeInUp}
               {...cardHover}
             >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.plan}</h3>
              <div className="text-amber-600 font-semibold mb-4">{plan.frequency}</div>
              <p className="text-gray-600 mb-6 leading-relaxed">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="#contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Choose Plan
              </Link>
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
              title="Why Choose Our Maintenance Services?"
              description="Expert maintenance services that maximize your solar investment and ensure long-term performance."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Technicians',
                  description: 'Experienced professionals trained in the latest solar technologies and safety protocols.',
                  icon: '👨‍🔧'
                },
                {
                  title: 'Proactive Monitoring',
                  description: 'Advanced monitoring systems that detect issues before they impact performance.',
                  icon: '📡'
                },
                {
                  title: 'Guaranteed Performance',
                  description: 'Maintenance plans that ensure optimal system performance and energy production.',
                  icon: '⚡'
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
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Maintenance Services"
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
              Keep Your Solar System at Peak Performance
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100 leading-relaxed">
              Schedule professional maintenance to maximize efficiency and extend the life of your solar investment.
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
                href="mailto:info@sunvests.com" 
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

export default SolarMaintenancePage; 