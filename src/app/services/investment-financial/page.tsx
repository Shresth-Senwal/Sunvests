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

const investmentServices = [
  {
    title: 'Mutual Funds',
    description: 'Diversified mutual fund investments for systematic wealth creation with professional fund management.',
    href: '/services/investment-financial/mutual-funds',
    icon: '📈',
    features: [
      'SIP & Lump Sum Options',
      'Equity & Debt Funds',
      'Tax Saving Funds',
      'Diversified Portfolios',
      'Professional Management',
      'Goal-based Investing'
    ]
  },
  {
    title: 'Portfolio Management',
    description: 'Personalized portfolio management services with customized investment strategies for high net worth individuals.',
    href: '/services/investment-financial/portfolio-management',
    icon: '🎯',
    features: [
      'Customized Strategies',
      'Risk Management',
      'Active Monitoring',
      'Performance Review',
      'Tax Optimization',
      'Wealth Preservation'
    ]
  },
  {
    title: 'Tax Planning',
    description: 'Strategic tax planning solutions to optimize your tax liability while maximizing investment returns.',
    href: '/services/investment-financial/tax-planning',
    icon: '📊',
    features: [
      'Tax-saving Investments',
      'Section 80C Benefits',
      'Capital Gains Planning',
      'TDS Optimization',
      'Tax-efficient Strategies',
      'Compliance Support'
    ]
  },
  {
    title: 'Estate Planning',
    description: 'Comprehensive estate planning to secure your family\'s financial future and ensure smooth wealth transfer.',
    href: '/services/investment-financial/estate-planning',
    icon: '🏛️',
    features: [
      'Will & Testament',
      'Trust Formation',
      'Succession Planning',
      'Nominee Management',
      'Insurance Planning',
      'Legacy Preservation'
    ]
  },
  {
    title: 'Insurance Solutions',
    description: 'Complete insurance planning including life, health, and general insurance for comprehensive protection.',
    href: '/services/investment-financial/insurance',
    icon: '🛡️',
    features: [
      'Term Life Insurance',
      'Health Insurance',
      'Motor Insurance',
      'Investment-linked Plans',
      'Risk Assessment',
      'Claims Support'
    ]
  },
  {
    title: 'Alternative Investments',
    description: 'Access to alternative investment opportunities including REITs, bonds, and specialized investment products.',
    href: '/services/investment-financial/alternative-investment-funds',
    icon: '🔗',
    features: [
      'Real Estate Investment',
      'Corporate Bonds',
      'Government Securities',
      'Commodity Investments',
      'International Exposure',
      'Portfolio Diversification'
    ]
  }
];

const investmentBenefits = [
  {
    title: 'Wealth Management',
    description: 'Holistic financial planning and wealth management for individuals and families',
    icon: '💼'
  },
  {
    title: 'Professional Advisory',
    description: 'Professional investment advisors with years of experience in financial markets',
    icon: '💡'
  },
  {
    title: 'Goal-based Planning',
    description: 'Customized investment strategies aligned with your specific financial goals',
    icon: '🎯'
  },
  {
    title: 'Ongoing Support',
    description: 'Regular portfolio review and rebalancing to optimize returns and manage risks',
    icon: '🔄'
  }
];

const investmentProcess = [
  {
    step: "01",
    title: "Goal Assessment",
    description: "Understanding your financial goals, risk profile, and investment timeline for strategic planning"
  },
  {
    step: "02",
    title: "Strategy Planning",
    description: "Creating personalized investment strategy aligned with your objectives and risk appetite"
  },
  {
    step: "03",
    title: "Portfolio Construction",
    description: "Building diversified portfolio with optimal asset allocation across multiple instruments"
  },
  {
    step: "04",
    title: "Monitoring & Review",
    description: "Regular portfolio review and rebalancing to stay on track with changing market conditions"
  }
];

export default function InvestmentFinancialPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        backgroundImage={IMAGES.HERO.INVESTMENT_FINANCIAL}
        backgroundAlt="Investment and Financial Planning Services"
        gradientOverlay="from-emerald-900/95 via-green-900/90 to-teal-900/95"
        theme="finance"
        badge={{
          icon: '💰',
          text: 'SEBI Registered Investment Advisory'
        }}
        title={{
          main: 'Investment &',
          highlight: 'Financial Services',
          subtitle: 'Wealth Creation Through Strategic Planning'
        }}
        description="Comprehensive investment advisory and financial planning services to help you build wealth systematically and achieve your financial goals with professional guidance."
        buttons={{
          primary: {
            text: 'Explore Services',
            href: '#services'
          },
          secondary: {
            text: 'Contact Us',
            href: '#contact'
          }
        }}
        trustIndicators={TRUST_INDICATORS.INVESTMENT_FINANCIAL.filter(indicator => indicator.text !== 'SEBI Registered Investment Advisory').map(indicator => ({
          text: indicator.text,
          color: indicator.color
        }))}
        height="full"
      />

      {/* Investment Services */}
      <Section background="white" id="services">
        <SectionHeader
          title="Comprehensive Investment Solutions"
          description="Professional investment advisory services covering mutual funds, portfolio management, tax planning, and wealth preservation strategies."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {investmentServices.map((service) => (
            <motion.div
              key={service.title}
              className={`${COMPONENT_PATTERNS.cards.service.base} ${COMPONENT_PATTERNS.cards.default.variants.finance}`}
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
                      <div className={`${COMPONENT_PATTERNS.cards.service.featureBullet} ${COMPONENT_PATTERNS.icons.colors.finance}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={COMPONENT_PATTERNS.cards.service.footer}>
                <Link 
                  href={service.href}
                  className={`${COMPONENT_PATTERNS.buttons.primary.variants.finance} inline-flex items-center gap-2 group`}
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

      {/* Why Choose Investment Services */}
      <Section background="gradient">
        <SectionHeader
          title="Why Choose Our Investment Services?"
          description="Professional expertise and comprehensive strategies to help you build wealth and achieve financial independence."
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {investmentBenefits.map((benefit) => (
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
          description="Structured approach to understanding your goals and creating personalized investment strategies."
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

      {/* Contact Section - Updated to match Portfolio Management structure */}
      <Section id="contact" background="white">
        <div className="bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Connect with our investment advisors to build wealth systematically and achieve your financial goals.
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
                className="bg-white text-green-900 hover:bg-green-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:bck@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
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
