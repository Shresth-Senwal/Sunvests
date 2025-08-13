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

const fdTypes = [
  {
    title: 'Regular Fixed Deposits',
    description: 'Traditional fixed deposits with guaranteed returns and flexible tenure options.',
    features: ['Guaranteed returns', 'Flexible tenure', 'Premature withdrawal', 'Auto-renewal option'],
    returns: 'Competitive',
    riskLevel: 'Low Risk',
    gradient: 'from-emerald-500 to-green-500',
    icon: '🏦'
  },
  {
    title: 'Tax Saver FDs',
    description: 'Fixed deposits with tax benefits under Section 80C of Income Tax Act.',
    features: ['Tax deduction u/s 80C', '5-year lock-in', 'Higher interest rates', 'Compound interest'],
    returns: 'Attractive',
    riskLevel: 'Low Risk',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '💰'
  },
  {
    title: 'Senior Citizen FDs',
    description: 'Special fixed deposit schemes for senior citizens with higher interest rates.',
    features: ['Additional interest', 'Quarterly interest payout', 'Medical emergency withdrawal', 'Nomination facility'],
    returns: 'Enhanced',
    riskLevel: 'Low Risk',
    gradient: 'from-purple-500 to-pink-500',
    icon: '👴'
  },
  {
    title: 'Corporate FDs',
    description: 'Higher yield fixed deposits from reputable corporate entities and NBFCs.',
    features: ['Higher returns', 'Credit rating based', 'Flexible payout options', 'Online management'],
    returns: 'Premium',
    riskLevel: 'Medium Risk',
    gradient: 'from-orange-500 to-red-500',
    icon: '🏢'
  }
];

// Benefits array removed for legal compliance - no quantitative claims

const processSteps = [
  {
    step: '01',
    title: 'Documentation',
    description: 'Complete KYC documentation and choose the FD type that suits your investment goals.',
    duration: 'Quick',
    icon: 'document'
  },
  {
    step: '02',
    title: 'Investment Planning',
    description: 'Plan your investment amount, tenure, and interest payout frequency.',
    duration: 'Quick',
    icon: 'planning'
  },
  {
    step: '03',
    title: 'FD Booking',
    description: 'Book your fixed deposit online or offline with instant confirmation.',
    duration: 'Fast',
    icon: 'booking'
  },
  {
    step: '04',
    title: 'Interest & Maturity',
    description: 'Receive regular interest payouts and principal amount on maturity.',
    duration: 'Ongoing',
    icon: 'payout'
  }
];



export default function CorporateFDsPage() {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Corporate Fixed Deposits Investment"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        height="large"
        badge={{
          icon: '🏦',
          text: 'Guaranteed Investment Solutions'
        }}
        title={{
          main: 'Corporate',
          highlight: 'Fixed Deposits',
          subtitle: 'Secure Returns'
        }}
        description="Secure your financial future with our <span class='text-emerald-300 font-semibold'>guaranteed fixed deposits</span>, offering <span class='text-green-300 font-semibold'>stable returns</span> and <span class='text-teal-300 font-semibold'>capital protection</span>"
        buttons={{
          primary: {
            text: 'Invest in FDs',
            href: '#contact'
          },
          secondary: {
            text: 'Compare Rates',
            href: '#types'
          }
        }}
        trustIndicators={[
          { text: 'FDIC Insured', color: '#10b981' },
          { text: 'Competitive Returns', color: '#10b981' },
          { text: 'Flexible Tenure', color: '#10b981' },
          { text: 'Tax Benefits', color: '#10b981' }
        ]}
        scrollText="Explore FD options"
      />

      {/* Stats Section removed for legal compliance - no quantitative claims */}

      {/* FD Types Section */}
      <Section id="types" background="white">
        <SectionHeader
          title="Types of Fixed Deposits"
          description="Choose from our comprehensive range of fixed deposit options designed to meet your investment goals and risk profile."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {fdTypes.map((fd) => (
            <motion.div
              key={fd.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${fd.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
                  {fd.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{fd.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{fd.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Returns</div>
                      <div className="text-lg font-bold text-emerald-600">{fd.returns}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Risk Level</div>
                      <div className="text-lg font-bold text-gray-800">{fd.riskLevel}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {fd.features.map((feature, index) => (
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
          title="Simple Investment Process"
          description="Get started with fixed deposits in just a few simple steps and start earning guaranteed returns."
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
              title="Why Choose Our FD Services?"
              description="We provide expert guidance and access to the best fixed deposit rates in the market."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Best Rates',
                  description: 'Access to highest FD rates from top banks and financial institutions.',
                  icon: '💰'
                },
                {
                  title: 'Expert Guidance',
                  description: 'Professional advice on tenure selection and tax optimization strategies.',
                  icon: '👨‍💼'
                },
                {
                  title: 'Easy Process',
                  description: 'Simplified documentation and quick processing for hassle-free investments.',
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
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Fixed Deposit Investment Planning"
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
          title="Start Your FD Investment Journey"
          description="Secure guaranteed returns with our expert-recommended fixed deposit solutions."
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
            Secure Your Financial Future
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start investing in fixed deposits today and enjoy guaranteed returns with complete capital safety.
          </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact" 
              className="btn-primary bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Investing
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
