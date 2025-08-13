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

const TaxPlanningPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Tax Planning and Financial Strategy"
        gradientOverlay="from-green-900/95 via-emerald-900/90 to-teal-900/95"
        theme="finance"
        height="large"
        badge={{
          icon: '📋',
          text: 'Strategic Tax Planning'
        }}
        title={{
          main: 'Tax',
          highlight: 'Planning',
          subtitle: 'Services'
        }}
        description="Optimize your tax liability with our <span class='text-emerald-300 font-semibold'>strategic tax planning</span>, <span class='text-green-300 font-semibold'>compliance management</span>, and <span class='text-teal-300 font-semibold'>wealth preservation</span>"
        buttons={{
          primary: {
            text: 'Start Tax Planning',
            href: '#contact'
          },
          secondary: {
            text: 'View Services',
            href: '#services'
          }
        }}
        trustIndicators={[
                  { text: 'Tax Optimization', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
        { text: 'Compliance Management', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
        { text: 'Wealth Preservation', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent },
        { text: 'Expert Advisory', color: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.colors.accent }
        ]}
        scrollText="Explore tax services"
      />



      {/* Core Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Comprehensive Tax Planning Services"
          description="Strategic tax planning solutions to minimize liability and maximize wealth preservation."
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
              title: "Tax Optimization",
              description: "Strategic planning to minimize tax liability through legal methods",
              icon: "🎯",
              gradient: "from-emerald-500 to-green-500",
              features: [
                "Income Tax Planning",
                "Capital Gains Optimization",
                "Deduction Maximization",
                "Tax-Efficient Investments",
                "Timing Strategies",
                "Loss Harvesting"
              ]
            },
            {
              title: "Compliance Management",
              description: "Ensure complete compliance with tax regulations and filing requirements",
              icon: "📋",
              gradient: "from-green-500 to-teal-500",
              features: [
                "Tax Return Preparation",
                "Quarterly Filings",
                "Advance Tax Planning",
                "TDS Management",
                "Audit Support",
                "Notice Handling"
              ]
            },
            {
              title: "Wealth Preservation",
              description: "Protect and preserve wealth through strategic tax planning",
              icon: "🛡️",
              gradient: "from-teal-500 to-cyan-500",
              features: [
                "Estate Tax Planning",
                "Gift Tax Strategies",
                "Trust Structures",
                "Succession Planning",
                "Charitable Giving",
                "International Tax"
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
                    <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Tax Saving Strategies */}
      <Section background="gradient">
        <SectionHeader
          title="Tax Saving Strategies & Instruments"
          description="Explore various tax-saving investment options and strategies to optimize your tax liability."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Section 80C",
              description: "Tax Deduction",
              icon: "💼",
              items: ["ELSS Funds", "PPF", "Life Insurance", "Home Loan Principal"]
            },
            {
              title: "Section 80D",
              description: "Health Insurance",
              icon: "🏥",
              items: ["Medical Insurance", "Preventive Health", "Senior Citizen", "Critical Illness"]
            },
            {
              title: "Section 24(b)",
              description: "Home Loan Interest",
              icon: "🏠",
              items: ["Self-Occupied", "Let-Out Property", "Under Construction", "Joint Ownership"]
            },
            {
              title: "NPS & Others",
              description: "Additional Deductions",
              icon: "📈",
              items: ["NPS 80CCD(1B)", "Education Loan", "Donations 80G", "Disability 80U"]
            }
          ].map((strategy) => (
            <motion.div
              key={strategy.title}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto">
                {strategy.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{strategy.title}</h3>
              <p className="text-emerald-600 font-semibold text-center mb-4">{strategy.description}</p>
              
              <ul className="space-y-2">
                {strategy.items.map((item, index) => (
                  <li key={index} className="text-sm text-gray-600 text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Tax Planning Process */}
      <Section background="white">
        <SectionHeader
          title="Our Tax Planning Process"
          description="A systematic approach to tax planning that ensures optimal tax efficiency and compliance."
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
              title: "Financial Assessment",
              description: "Comprehensive review of your financial situation",
              icon: "📊"
            },
            {
              step: "02",
              title: "Tax Analysis",
              description: "Detailed analysis of current tax liability",
              icon: "🔍"
            },
            {
              step: "03",
              title: "Strategy Development",
              description: "Create customized tax optimization strategy",
              icon: "🎯"
            },
            {
              step: "04",
              title: "Implementation",
              description: "Execute tax planning strategies systematically",
              icon: "⚡"
            },
            {
              step: "05",
              title: "Monitoring",
              description: "Ongoing monitoring and adjustments",
              icon: "👁️"
            }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              className="text-center relative"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.icon}
                </div>
                <div className="text-sm font-semibold text-emerald-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
              {index < 4 && (
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
              title="Why Choose Our Tax Planning Services?"
              description="Expert tax planning with proven strategies and comprehensive compliance support."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Knowledge',
                  description: 'Deep understanding of tax laws and regulations with extensive experience.',
                  icon: '🎓'
                },
                {
                  title: 'Proactive Planning',
                  description: 'Year-round tax planning to maximize savings and minimize last-minute stress.',
                  icon: '⚡'
                },
                {
                  title: 'Comprehensive Support',
                  description: 'Complete tax services from planning to filing and audit support.',
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
                alt="Tax Planning Services"
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
              Ready to Optimize Your Tax Strategy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100 leading-relaxed">
              Start saving on taxes with our expert planning services and comprehensive compliance support.
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
};

export default TaxPlanningPage; 
