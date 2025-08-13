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

const SolarFinancialReturnsPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Solar Financial Returns and Investment"
        gradientOverlay="from-amber-900/95 via-orange-900/90 to-yellow-900/95"
        theme="solar"
        height="large"
        badge={{
          icon: '💰',
          text: 'Solar Financial Returns'
        }}
        title={{
          main: 'Solar',
          highlight: 'Financial',
          subtitle: 'Returns'
        }}
        description="Maximize your solar investment with our <span class='text-yellow-300 font-semibold'>ROI analysis</span>, <span class='text-orange-300 font-semibold'>financial planning</span>, and <span class='text-amber-300 font-semibold'>savings optimization</span>"
        buttons={{
          primary: {
            text: 'Calculate Returns',
            href: '#contact'
          },
          secondary: {
            text: 'View Benefits',
            href: '#benefits'
          }
        }}
        trustIndicators={[
          { text: 'ROI Analysis', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Tax Benefits', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Savings Optimization', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Financial Planning', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore financial benefits"
      />



      {/* Financial Benefits Section */}
      <Section id="benefits" background="white">
        <SectionHeader
          title="Solar Financial Benefits & Returns"
          description="Comprehensive financial advantages that make solar a smart investment for your future."
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
              title: "Immediate Savings",
              description: "Start saving on electricity bills from day one of installation",
              icon: "⚡",
              gradient: "from-amber-500 to-orange-500",
              features: [
                "Reduced Electricity Bills",
                "Net Metering Benefits",
                "Peak Hour Savings",
                "Grid Independence",
                "Energy Cost Stability",
                "Immediate Cash Flow"
              ]
            },
            {
              title: "Tax Incentives",
              description: "Maximize savings through federal and state tax benefits",
              icon: "🏛️",
              gradient: "from-orange-500 to-red-500",
              features: [
                "Federal Tax Credit",
                "State Tax Incentives",
                "Local Rebates",
                "Accelerated Depreciation",
                "Property Tax Exemptions",
                "Sales Tax Exemptions"
              ]
            },
            {
              title: "Long-term Returns",
              description: "Build wealth through decades of energy savings and property value",
              icon: "📊",
              gradient: "from-yellow-500 to-amber-500",
              features: [
                "Long-term Savings",
                "Property Value Increase",
                "Inflation Protection",
                "Energy Independence",
                "Predictable Returns",
                "Environmental Credits"
              ]
            }
          ].map((benefit) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 mb-6 mx-auto`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{benefit.description}</p>
              
              <ul className="space-y-3">
                {benefit.features.map((feature, index) => (
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

      {/* Investment Benefits Section */}
      <Section background="gradient">
        <SectionHeader
          title="Solar Investment Benefits"
          description="Discover the financial advantages of solar energy investment for your property."
        />
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-2xl"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Investment Components</h3>
              <div className="space-y-4">
                {[
                  { label: "System Installation", description: "Professional solar panel installation", icon: "💰" },
                  { label: "Federal Tax Credits", description: "Government incentives for solar adoption", icon: "🏛️" },
                  { label: "Net Investment", description: "Your actual investment after incentives", icon: "📊" },
                  { label: "Energy Savings", description: "Ongoing electricity cost reductions", icon: "⚡" }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-700">{item.label}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Investment Timeline</h3>
              <div className="space-y-4">
                {[
                  { phase: "Initial Years", description: "Payback period with tax credits and savings", color: "bg-amber-100" },
                  { phase: "Mid-term", description: "Pure profit from energy savings", color: "bg-orange-100" },
                  { phase: "Long-term", description: "Continued savings with minimal maintenance", color: "bg-yellow-100" },
                  { phase: "Extended Life", description: "Extended system life with ongoing benefits", color: "bg-red-100" }
                ].map((phase) => (
                  <div key={phase.phase} className={`p-4 ${phase.color} rounded-xl`}>
                    <div className="font-bold text-gray-800 mb-1">{phase.phase}</div>
                    <div className="text-sm text-gray-600">{phase.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Personalized Investment Analysis
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* Why Choose Solar */}
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Why Solar is a Smart Financial Investment"
              description="Solar energy offers unmatched financial benefits and long-term value for property owners."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Predictable Returns',
                  description: 'Unlike volatile markets, solar provides consistent, predictable energy savings for decades.',
                  icon: '📈'
                },
                {
                  title: 'Inflation Protection',
                  description: 'Lock in energy costs and protect against rising electricity rates over time.',
                  icon: '🛡️'
                },
                {
                  title: 'Property Value Boost',
                  description: 'Solar installations can increase property value and market appeal.',
                  icon: '🏠'
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Financial Returns"
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
              Ready to Maximize Your Solar Returns?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100 leading-relaxed">
              Get a personalized financial analysis and discover how solar can boost your investment portfolio.
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
                href="mailto:bck@sunvests.com" 
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

export default SolarFinancialReturnsPage; 
