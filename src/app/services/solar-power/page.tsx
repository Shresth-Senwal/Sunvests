'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import ContactInfoCard from '@/components/ContactInfoCard';
import FeatureCard from '@/components/FeatureCard';
import { 
  fadeInUp, 
  staggerContainer, 
  cardHover,
} from '@/utils/animations';
import { 
  TRUST_INDICATORS, 
  CONTACT_CARDS,
  IMAGES,
  COMPONENT_PATTERNS
} from '@/utils/constants';

const solarServices = [
  {
    title: 'Solar Consultation & Design',
    description: 'Professional site assessment and custom solar system design optimized for maximum energy production and cost savings.',
    href: '/services/solar-power/consultation',
    icon: '🔍',
    features: [
      'Site Energy Assessment',
      'Custom System Design',
      'ROI Analysis',
      'Permit Assistance',
      'Financing Options',
      'Performance Modeling'
    ]
  },
  {
    title: 'Solar Panel Installation',
    description: 'Expert installation of high-quality solar panels by technicians with comprehensive warranty coverage.',
    href: '/services/solar-power/installation',
    icon: '🔧',
    features: [
      'Professional Installation Team',
      'Premium Solar Panels',
      'Grid-Tie Systems',
      'Battery Storage Options',
      'Monitoring Systems',
      'Extended Warranty'
    ]
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and performance monitoring to ensure optimal system efficiency and maximum energy output.',
    href: '/services/solar-power/maintenance',
    icon: '🛠️',
    features: [
      'Regular System Cleaning',
      'Performance Monitoring',
      'Preventive Maintenance',
      'Inverter Servicing',
      'Panel Inspection',
      'Round-the-Clock Support'
    ]
  },
  {
    title: 'Commercial Solar Solutions',
    description: 'Large-scale solar installations for businesses and industries to reduce operational costs and carbon footprint.',
    href: '/services/solar-power/commercial',
    icon: '🏭',
    features: [
      'Industrial Scale Systems',
      'Net Metering Solutions',
      'Tax Incentive Optimization',
      'Power Purchase Agreements',
      'Energy Storage Systems',
      'Grid Independence'
    ]
  },
  {
    title: 'Financial Returns Analysis',
    description: 'Comprehensive financial modeling and return analysis to maximize your solar investment benefits.',
    href: '/services/solar-power/financial-returns',
    icon: '📊',
    features: [
      'ROI Calculations',
      'Payback Period Analysis',
      'Tax Benefit Planning',
      'Subsidy Optimization',
      'Long-term Projections',
      'Investment Strategies'
    ]
  },
  {
    title: 'System Performance Monitoring',
    description: 'Advanced monitoring systems to track energy production and ensure optimal solar system performance.',
    href: '/services/solar-power/system-performance',
    icon: '📈',
    features: [
      'Real-time Monitoring',
      'Performance Analytics',
      'Fault Detection',
      'Energy Reports',
      'Mobile App Access',
      'Predictive Maintenance'
    ]
  }
];

const solarBenefits = [
  {
    title: 'Cost Savings',
    description: 'Significantly reduce electricity bills with solar power and achieve complete energy independence',
    icon: '💰'
  },
  {
    title: 'Environmental Impact',
    description: 'Significantly reduce carbon footprint and contribute to a cleaner, sustainable future',
    icon: '🌱'
  },
  {
    title: 'Government Incentives',
    description: 'Take advantage of subsidies, tax benefits, and net metering policies for maximum returns',
    icon: '🏛️'
  },
  {
    title: 'Long-term Investment',
    description: 'Extended system lifespan with minimal maintenance and reliable performance',
    icon: '⏱️'
  }
];

const installationProcess = [
  {
    step: "01",
    title: "Site Assessment",
    description: "Comprehensive evaluation of your property's solar potential and energy requirements"
  },
  {
    step: "02", 
    title: "Custom Design",
    description: "Tailored solar system design optimized for maximum energy production and efficiency"
  },
  {
    step: "03",
    title: "Professional Installation", 
    description: "Expert installation by technicians using premium quality components"
  },
  {
    step: "04",
    title: "System Activation",
    description: "Grid connection, testing, and monitoring setup for optimal performance tracking"
  }
];

export default function SolarPowerPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.HERO.SOLAR_POWER}
        backgroundAlt="Solar Power Installation and Energy Solutions"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        badge={{
          icon: '☀️',
          text: 'Clean Energy Solutions'
        }}
        title={{
          main: 'Solar Power &',
          highlight: 'Renewable Energy',
          subtitle: 'Sustainable Future'
        }}
        description="Comprehensive solar power solutions for residential, commercial, and industrial applications. Transform sunlight into savings with our expert installation and maintenance services."
        buttons={{
          primary: {
            text: 'Contact Us',
            href: '#contact'
          },
          secondary: {
            text: 'Explore Services',
            href: '#services'
          }
        }}
        trustIndicators={TRUST_INDICATORS.SOLAR_POWER.map(indicator => ({
          text: indicator.text,
          color: indicator.color
        }))}
        height="full"
      />

      {/* Solar Services */}
      <Section background="white" id="services">
        <SectionHeader
          title="Complete Solar Power Solutions"
          description="End-to-end solar services from consultation and design to installation, maintenance, and performance optimization."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solarServices.map((service) => (
            <motion.div
              key={service.title}
              className={`${COMPONENT_PATTERNS.cards.service.base} ${COMPONENT_PATTERNS.cards.default.variants.solar}`}
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={COMPONENT_PATTERNS.cards.service.header}>
                <div className={COMPONENT_PATTERNS.cards.service.icon}>{service.icon}</div>
                <h3 className={`${COMPONENT_PATTERNS.cards.service.title} ${COMPONENT_PATTERNS.typography.headings.h4}`}>
                  {service.title}
                </h3>
                <p className={`${COMPONENT_PATTERNS.cards.service.description} ${COMPONENT_PATTERNS.typography.body.default}`}>
                  {service.description}
                </p>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.features}>
                <h4 className={`${COMPONENT_PATTERNS.cards.service.featuresTitle} ${COMPONENT_PATTERNS.typography.labels.default}`}>
                  Key Features:
                </h4>
                <ul className={COMPONENT_PATTERNS.cards.service.featuresList}>
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className={`${COMPONENT_PATTERNS.cards.service.featureItem} ${COMPONENT_PATTERNS.typography.body.small}`}>
                      <div className={`${COMPONENT_PATTERNS.cards.service.featureBullet} ${COMPONENT_PATTERNS.icons.colors.solar}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.footer}>
                <Link
                  href={service.href}
                  className={`${COMPONENT_PATTERNS.buttons.primary.variants.solar} inline-flex items-center gap-2 group`}
                >
                  Learn More →
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Choose Solar */}
      <Section background="gradient">
        <SectionHeader
          title="Why Choose Solar Energy?"
          description="Discover the multiple benefits of switching to clean, renewable solar power for your home or business."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {solarBenefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              theme="solar"
              variant="minimal"
              className="text-center"
            />
          ))}
        </motion.div>
      </Section>

      {/* Installation Process */}
      <Section background="white">
        <SectionHeader
          title="Solar Installation Process"
          description="Our streamlined process ensures smooth installation from initial consultation to system activation."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {installationProcess.map((process) => (
            <motion.div
              key={process.step}
              className={`${COMPONENT_PATTERNS.cards.default.variants.solar} p-6 rounded-2xl text-center`}
              variants={fadeInUp}
            >
              <div className={`text-3xl font-bold ${COMPONENT_PATTERNS.icons.colors.solar} mb-4`}>
                {process.step}
              </div>
              <h3 className={`${COMPONENT_PATTERNS.typography.headings.h5} mb-3`}>
                {process.title}
              </h3>
              <p className={`${COMPONENT_PATTERNS.typography.body.default}`}>
                {process.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>



      {/* Contact Section - Updated to match Portfolio Management structure */}
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
              Ready to Harness Solar Energy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-yellow-100 leading-relaxed">
              Transform your energy costs with our expert solar solutions and join the renewable energy revolution.
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
                href="mailto:bck@sunvests.com" 
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
} 
