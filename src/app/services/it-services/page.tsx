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

const itServices = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advanced AI/ML solutions for intelligent automation, predictive analytics, and data-driven decision making.',
    href: '/services/it-services/artificial-intelligence',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI-Powered Automation',
      'Deep Learning Solutions'
    ]
  },
  {
    title: 'Product Engineering',
    description: 'End-to-end product development from concept to deployment with modern technologies and best practices.',
    href: '/services/it-services/product-engineering',
    icon: '🏗️',
    features: [
      'Product Strategy & Design',
      'Full-Stack Development',
      'Mobile App Development',
      'API Development',
      'Quality Assurance',
      'Product Optimization'
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern application deployment and operations.',
    href: '/services/it-services/cloud-devops',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'CI/CD Pipelines',
      'Container Orchestration',
      'Monitoring & Logging',
      'Security & Compliance'
    ]
  },
  {
    title: 'Data Engineering',
    description: 'Robust data pipelines and analytics infrastructure for data-driven business intelligence.',
    href: '/services/it-services/data-engineering',
    icon: '📊',
    features: [
      'Data Pipeline Development',
      'ETL/ELT Processes',
      'Data Warehousing',
      'Real-time Analytics',
      'Data Governance',
      'Business Intelligence'
    ]
  },
  {
    title: 'Software Engineering',
    description: 'Custom software solutions built with modern frameworks and engineering best practices.',
    href: '/services/it-services/software-engineering',
    icon: '💻',
    features: [
      'Custom Software Development',
      'Enterprise Applications',
      'API Integration',
      'Legacy System Modernization',
      'Performance Optimization',
      'Technical Consulting'
    ]
  },
  {
    title: 'Strategy Consulting',
    description: 'Strategic technology consulting to align IT initiatives with business objectives and digital transformation.',
    href: '/services/it-services/strategy-consulting',
    icon: '🎯',
    features: [
      'Digital Transformation',
      'Technology Roadmap',
      'Architecture Planning',
      'Process Optimization',
      'Technology Assessment',
      'Change Management'
    ]
  }
];

const whyChooseUs = [
  {
    title: 'Expert Team',
    description: 'Experienced developers and engineers with deep expertise in modern technologies',
    icon: '👥'
  },
  {
    title: 'Proven Methodology',
    description: 'Agile development practices with continuous integration and delivery',
    icon: '⚡'
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control throughout the development lifecycle',
    icon: '🔍'
  },
  {
    title: 'Round-the-Clock Support',
    description: 'Comprehensive support and maintenance for ongoing success',
    icon: '🛠️'
  }
];

const technologies = [
  'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 
  'Kubernetes', 'TensorFlow', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'
];

export default function ITServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.HERO.IT_SERVICES}
        backgroundAlt="IT Services and Technology Solutions"
        gradientOverlay="from-blue-900/95 via-indigo-900/90 to-purple-900/95"
        theme="it"
        badge={{
          icon: '🚀',
          text: 'Digital Transformation Experts'
        }}
        title={{
          main: 'IT Services &',
          highlight: 'Technology Solutions',
          subtitle: 'Innovation at Scale'
        }}
        description="Comprehensive IT solutions including AI/ML, product engineering, cloud services, and strategic consulting to drive your digital transformation journey."
        buttons={{
          primary: {
            text: 'Explore Our Services',
            href: '#services'
          },
          secondary: {
            text: 'Contact Us',
            href: '#contact'
          }
        }}
        trustIndicators={TRUST_INDICATORS.IT_SERVICES.map(indicator => ({
          text: indicator.text,
          color: indicator.color
        }))}
        height="full"
      />

      {/* Services Overview */}
      <Section background="white" id="services">
        <SectionHeader
          title="Our IT Service Portfolio"
          description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation initiatives."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {itServices.map((service) => (
            <motion.div
              key={service.title}
              className={`${COMPONENT_PATTERNS.cards.service.base} ${COMPONENT_PATTERNS.cards.default.variants.it}`}
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
                      <div className={`${COMPONENT_PATTERNS.cards.service.featureBullet} ${COMPONENT_PATTERNS.icons.colors.it}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.footer}>
                <Link 
                  href={service.href}
                  className={`${COMPONENT_PATTERNS.buttons.primary.variants.it} inline-flex items-center gap-2 group`}
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

      {/* Why Choose Us */}
      <Section background="gradient">
        <SectionHeader
          title="Why Choose Our IT Services?"
          description="Discover what sets our technology solutions apart and why businesses trust us with their digital transformation."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whyChooseUs.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              theme="it"
              variant="minimal"
              className="text-center"
            />
          ))}
        </motion.div>
      </Section>

      {/* Technology Stack */}
      <Section background="white">
        <SectionHeader
          title="Our Technology Stack"
          description="We leverage cutting-edge technologies and frameworks to deliver scalable, robust solutions."
        />
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              className={`${COMPONENT_PATTERNS.cards.default.variants.it} px-6 py-3 rounded-full text-center`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`${COMPONENT_PATTERNS.typography.body.default} font-semibold ${COMPONENT_PATTERNS.icons.colors.it}`}>
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact Section - Updated to match Portfolio Management structure */}
      <Section id="contact" background="white">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed">
              Partner with our expert IT team to accelerate your digital transformation and drive business growth.
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
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:bck@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
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
