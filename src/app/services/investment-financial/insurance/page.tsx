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

const insuranceTypes = [
  {
    title: 'Life Insurance',
    description: 'Comprehensive life insurance plans to secure your family&apos;s financial future.',
    features: ['Financial protection for family', 'Tax benefits under 80C', 'Flexible policy terms', 'Investment options available'],
    gradient: 'from-emerald-500 to-green-500',
    icon: '👨‍👩‍👧‍👦'
  },
  {
    title: 'Health Insurance',
    description: 'Medical insurance coverage for individuals and families with comprehensive benefits.',
    features: ['Cashless treatment', 'Pre and post hospitalization', 'Critical illness protection', 'Family coverage options'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🏥'
  },
  {
    title: 'Motor Insurance',
    description: 'Complete protection for your vehicles with comprehensive coverage options.',
    features: ['Third-party liability', 'Own damage protection', 'Personal accident cover', 'Roadside assistance'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '🚗'
  },
  {
    title: 'Property Insurance',
    description: 'Protect your home and property against natural disasters and theft.',
    features: ['Structure protection', 'Contents coverage', 'Natural disaster cover', 'Liability protection'],
    gradient: 'from-orange-500 to-red-500',
    icon: '🏠'
  }
];

const benefits = [
  {
    title: 'Financial Security',
    description: 'Protect your family from financial hardships with comprehensive insurance coverage.',
    icon: '🛡️',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Tax Benefits',
    description: 'Insurance premiums offer tax deductions under various sections of the Income Tax Act.',
    icon: '💰',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    title: 'Medical Coverage',
    description: 'Comprehensive health insurance to cover medical expenses and critical illnesses.',
    icon: '🏥',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    title: 'Peace of Mind',
    description: 'Sleep peacefully knowing your assets and loved ones are protected.',
    icon: '☮️',
    gradient: 'from-orange-400 to-red-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Needs Assessment',
    description: 'Evaluate your insurance requirements based on lifestyle, income, and dependents.',
    duration: '1 Day',
    icon: 'assessment'
  },
  {
    step: '02',
    title: 'Plan Comparison',
    description: 'Compare different insurance plans and providers to find the best coverage.',
    duration: '2-3 Days',
    icon: 'comparison'
  },
  {
    step: '03',
    title: 'Application Process',
    description: 'Complete documentation and medical tests for policy approval.',
    duration: '1-2 Weeks',
    icon: 'application'
  },
  {
    step: '04',
    title: 'Policy Management',
    description: 'Ongoing support for premium payments, claims, and policy renewals.',
    duration: 'Ongoing',
    icon: 'management'
  }
];



export default function InsurancePage() {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Insurance Protection and Security"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        height="large"
        badge={{
          icon: '🛡️',
          text: 'Comprehensive Protection Solutions'
        }}
        title={{
          main: 'Insurance',
          highlight: 'Solutions',
          subtitle: 'Complete Protection'
        }}
        description="Protect your future with our <span class='text-emerald-300 font-semibold'>comprehensive insurance solutions</span>, <span class='text-green-300 font-semibold'>personalized plans</span>, and <span class='text-teal-300 font-semibold'>expert guidance</span>"
        buttons={{
          primary: {
            text: 'Get Insurance Quote',
            href: '#contact'
          },
          secondary: {
            text: 'View Plans',
            href: '#plans'
          }
        }}
        trustIndicators={[
          { text: 'Wide Range of Plans', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'High Settlement Ratio', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'Dedicated Support', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
          { text: 'Customized Coverage', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent }
        ]}
        scrollText="Explore insurance plans"
      />



      {/* Insurance Types Section */}
      <Section id="types" background="white">
        <SectionHeader
          title="Comprehensive Insurance Solutions"
          description="Choose from our wide range of insurance products designed to protect you and your loved ones from life&apos;s uncertainties."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {insuranceTypes.map((insurance) => (
            <motion.div
              key={insurance.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${insurance.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {insurance.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{insurance.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{insurance.description}</p>
                  

                  
                  <ul className="space-y-2">
                    {insurance.features.map((feature, index) => (
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
          title="Why Choose Insurance?"
          description="Insurance provides financial security and peace of mind, protecting you and your family from unexpected events."
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
              {...cardHover}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className="text-3xl">{benefit.icon}</div>
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
          title="Simple Insurance Process"
          description="Get the right insurance coverage in just a few simple steps with our expert guidance."
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
              title="Why Choose Our Insurance Services?"
              description="Our insurance advisors help you choose the right coverage for your needs."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Our certified insurance advisors help you choose the right coverage for your needs.',
                  icon: '👨‍💼'
                },
                {
                  title: 'Best Rates',
                  description: 'Compare plans from multiple insurers to get the best coverage at competitive rates.',
                  icon: '💰'
                },
                {
                  title: 'Quick Claims',
                  description: 'Hassle-free claim assistance with high settlement ratio and quick processing.',
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
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Insurance Protection Planning"
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
              Ready to Protect Your Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Get comprehensive insurance coverage with our expert guidance and competitive rates to secure your family&apos;s future.
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
