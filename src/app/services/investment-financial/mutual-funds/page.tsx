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
  COMPONENT_PATTERNS,
  CTA_BUTTONS
} from '@/utils/constants';

const mutualFundTypes = [
  {
    title: 'Equity Funds',
    description: 'High growth potential funds investing primarily in stocks for long-term wealth creation.',
    href: '#contact',
    icon: '📈',
    features: [
      'Large Cap Funds',
      'Mid Cap Funds', 
      'Small Cap Funds',
      'Sectoral Funds',
      'Thematic Funds',
      'Index Funds'
    ]
  },
  {
    title: 'Debt Funds',
    description: 'Stable income funds investing in bonds and fixed-income securities for capital preservation.',
    href: '#contact',
    icon: '🏛️',
    features: [
      'Government Bonds',
      'Corporate Bonds',
      'Short-term Funds',
      'Liquid Funds',
      'Credit Risk Funds',
      'Duration Funds'
    ]
  },
  {
    title: 'Hybrid Funds',
    description: 'Balanced funds combining equity and debt for moderate risk and steady returns.',
    href: '#contact',
    icon: '⚖️',
    features: [
      'Conservative Hybrid',
      'Aggressive Hybrid',
      'Balanced Advantage',
      'Multi-Asset Funds',
      'Arbitrage Funds',
      'Equity Savings'
    ]
  },
  {
    title: 'ELSS Funds',
    description: 'Tax-saving equity funds with 3-year lock-in period and Section 80C benefits.',
    href: '#contact',
    icon: '💰',
    features: [
      'Tax Deduction u/s 80C',
      '3-Year Lock-in',
      'Equity Exposure',
      'Wealth Creation',
      'Long-term Growth',
      'Tax Efficiency'
    ]
  }
];

const mutualFundBenefits = [
  {
    title: 'Professional Management',
    description: 'Expert fund managers handle your investments with research-backed decisions',
    icon: '👨‍💼'
  },
  {
    title: 'Diversification',
    description: 'Spread risk across multiple securities and sectors for balanced portfolio',
    icon: '🎯'
  },
  {
    title: 'Liquidity',
    description: 'Easy redemption with most funds offering same-day or next-day liquidity',
    icon: '💧'
  },
  {
    title: 'Tax Benefits',
    description: 'ELSS funds offer tax deduction under Section 80C',
    icon: '💸'
  }
];

const investmentProcess = [
  {
    step: "01",
    title: "Goal Assessment",
    description: "Understanding your financial goals, risk tolerance, and investment horizon for strategic planning"
  },
  {
    step: "02", 
    title: "Fund Selection",
    description: "Choosing the right mutual funds based on your profile and investment objectives"
  },
  {
    step: "03",
    title: "KYC & Investment",
    description: "Completing documentation and starting your systematic investment plan (SIP)"
  },
  {
    step: "04",
    title: "Portfolio Monitoring",
    description: "Regular review and rebalancing of your mutual fund portfolio for optimal returns"
  }
];

export default function MutualFundsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.HERO.INVESTMENT_FINANCIAL}
        backgroundAlt="Mutual Funds Investment Growth"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        badge={{
          icon: '📊',
          text: 'Professional Investment Management'
        }}
        title={{
          main: 'Mutual',
          highlight: 'Funds',
          subtitle: 'Wealth Creation Made Simple'
        }}
        description="Build wealth systematically with our expertly curated mutual funds, offering professional management and diversified portfolios for long-term growth."
        buttons={{
          primary: {
            text: 'Start SIP Today',
            href: '#contact'
          },
          secondary: {
            text: 'Explore Funds',
            href: '#services'
          }
        }}
        trustIndicators={TRUST_INDICATORS.INVESTMENT_FINANCIAL.map(indicator => ({
          text: indicator.text,
          color: indicator.color
        }))}
        height="full"
      />

      {/* Mutual Fund Types */}
      <Section background="white" id="services">
        <SectionHeader
          title="Comprehensive Mutual Fund Solutions"
          description="Choose from our wide range of mutual fund options designed to meet your investment goals and risk appetite."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols2} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {mutualFundTypes.map((fund) => (
            <motion.div
              key={fund.title}
              className={`${COMPONENT_PATTERNS.cards.service.base} ${COMPONENT_PATTERNS.cards.default.variants.finance}`}
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={COMPONENT_PATTERNS.cards.service.header}>
                <div className={COMPONENT_PATTERNS.cards.service.icon}>{fund.icon}</div>
                <h3 className={`${COMPONENT_PATTERNS.cards.service.title} ${COMPONENT_PATTERNS.typography.headings.h4}`}>
                  {fund.title}
                </h3>
                <p className={`${COMPONENT_PATTERNS.cards.service.description} ${COMPONENT_PATTERNS.typography.body.default}`}>
                  {fund.description}
                </p>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.features}>
                <h4 className={`${COMPONENT_PATTERNS.cards.service.featuresTitle} ${COMPONENT_PATTERNS.typography.labels.default}`}>
                  Fund Types:
                </h4>
                <ul className={COMPONENT_PATTERNS.cards.service.featuresList}>
                  {fund.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className={`${COMPONENT_PATTERNS.cards.service.featureItem} ${COMPONENT_PATTERNS.typography.body.small}`}>
                      <div className={`${COMPONENT_PATTERNS.cards.service.featureBullet} ${COMPONENT_PATTERNS.icons.colors.finance}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.footer}>
                <Link 
                  href={fund.href}
                  className={`${COMPONENT_PATTERNS.buttons.primary.variants.finance} inline-flex items-center gap-2 group`}
                >
                  {CTA_BUTTONS.GET_STARTED}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Choose Mutual Funds */}
      <Section background="gradient">
        <SectionHeader
          title="Why Choose Mutual Funds?"
          description="Professional fund management and diversified portfolios to help you achieve your financial goals systematically."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {mutualFundBenefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              theme="finance"
              variant="minimal"
              className="text-center"
            />
          ))}
        </motion.div>
      </Section>

      {/* Investment Process */}
      <Section background="white">
        <SectionHeader
          title="Our Investment Process"
          description="Systematic approach to mutual fund investing with expert guidance and ongoing support."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {investmentProcess.map((process) => (
            <motion.div
              key={process.step}
              className={`${COMPONENT_PATTERNS.cards.default.variants.finance} p-6 rounded-2xl text-center`}
              variants={fadeInUp}
            >
              <div className={`text-3xl font-bold ${COMPONENT_PATTERNS.icons.colors.finance} mb-4`}>
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
              Ready to Start Your Mutual Fund Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Begin building wealth systematically with our expert mutual fund advisory and investment solutions.
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
