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
  CONTACT_CARDS
} from '@/utils/constants';

const estateServices = [
  {
    title: 'Will Drafting',
    description: 'Professional will drafting services to ensure your assets are distributed according to your wishes.',
    features: ['Legal compliance', 'Asset distribution', 'Beneficiary protection', 'Regular updates'],
    icon: '📜',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Trust Formation',
    description: 'Establish trusts to protect assets and provide for beneficiaries with tax efficiency.',
    features: ['Asset protection', 'Tax optimization', 'Succession planning', 'Professional management'],
    icon: '🏛️',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Tax Planning',
    description: 'Minimize estate taxes and maximize wealth transfer to your beneficiaries.',
    features: ['Tax minimization', 'Wealth preservation', 'Legal structures', 'Compliance management'],
    icon: '💰',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Succession Planning',
    description: 'Comprehensive business succession planning for family enterprises and businesses.',
    features: ['Business continuity', 'Family governance', 'Leadership transition', 'Ownership transfer'],
    icon: '🏢',
    gradient: 'from-orange-500 to-red-500'
  }
];

// Benefits section removed for legal compliance - no quantitative claims

const processSteps = [
  {
    step: '01',
    title: 'Estate Assessment',
    description: 'Comprehensive evaluation of your assets, liabilities, and family structure.',
    duration: 'Initial Phase',
    icon: 'assessment'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create a customized estate plan that aligns with your goals and values.',
    duration: 'Planning Phase',
    icon: 'strategy'
  },
  {
    step: '03',
    title: 'Documentation',
    description: 'Prepare all legal documents including wills, trusts, and power of attorney.',
    duration: 'Documentation Phase',
    icon: 'documentation'
  },
  {
    step: '04',
    title: 'Implementation & Review',
    description: 'Execute the plan and provide ongoing reviews to ensure it remains current.',
    duration: 'Ongoing',
    icon: 'implementation'
  }
];



export default function EstatePlanningPage() {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Estate Planning and Wealth Management"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        height="large"
        badge={{
          icon: '🏛️',
          text: 'Comprehensive Estate Solutions'
        }}
        title={{
          main: 'Estate',
          highlight: 'Planning',
          subtitle: 'Legacy Protection'
        }}
        description="Secure your family's future with our <span class='text-emerald-300 font-semibold'>comprehensive estate planning</span>, <span class='text-green-300 font-semibold'>wealth preservation strategies</span>, and <span class='text-teal-300 font-semibold'>succession planning</span>"
        buttons={{
          primary: {
            text: 'Plan Your Estate',
            href: '#contact'
          },
          secondary: {
            text: 'Learn More',
            href: '#services'
          }
        }}
        trustIndicators={[
          { text: 'Legal Compliance', color: '#10b981' },
          { text: 'Tax Optimization', color: '#10b981' },
          { text: 'Asset Protection', color: '#10b981' },
          { text: 'Family Security', color: '#10b981' }
        ]}
        scrollText="Explore estate services"
      />



      {/* Estate Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Comprehensive Estate Planning Services"
          description="Protect your legacy and secure your family's future with our expert estate planning and wealth preservation strategies."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {estateServices.map((service) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
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

      {/* Benefits Section removed for legal compliance - no quantitative claims */}

      {/* Process Section */}
      <Section background="white">
        <SectionHeader
          title="Our Estate Planning Process"
          description="A systematic approach to creating a comprehensive estate plan that protects your legacy and provides for your loved ones."
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
              title="Why Choose Our Estate Planning Services?"
              description="We combine legal expertise with financial planning to create comprehensive estate solutions."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Legal Expertise',
                  description: 'Our team includes qualified lawyers and financial planners with extensive estate planning experience.',
                  icon: '⚖️'
                },
                {
                  title: 'Comprehensive Approach',
                  description: 'We consider all aspects of your financial situation to create a holistic estate plan.',
                  icon: '🎯'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Regular reviews and updates to ensure your estate plan remains current and effective.',
                  icon: '🤝'
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Estate Planning Documentation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            
          </motion.div>
        </div>
      </Section>



      {/* Contact Section - Updated to match Alternative Investment Funds structure */}
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
              Ready to Secure Your Family&apos;s Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Start planning your estate with our expert guidance and comprehensive solutions to protect your legacy.
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
} 
