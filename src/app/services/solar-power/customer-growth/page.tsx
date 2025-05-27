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

const SolarCustomerGrowthPage = () => {
  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundAlt="Solar Customer Growth and Business Development"
        gradientOverlay="from-indigo-900/95 via-purple-900/90 to-blue-900/95"
        theme="solar"
        height="large"
        badge={{
          icon: '📈',
          text: 'Solar Customer Growth'
        }}
        title={{
          main: 'Customer',
          highlight: 'Growth',
          subtitle: 'Solutions'
        }}
        description="Accelerate your solar business with our <span class='text-purple-300 font-semibold'>customer acquisition</span>, <span class='text-indigo-300 font-semibold'>market expansion</span>, and <span class='text-blue-300 font-semibold'>growth strategies</span>"
        buttons={{
          primary: {
            text: 'Grow Your Business',
            href: '#contact'
          },
          secondary: {
            text: 'View Strategies',
            href: '#strategies'
          }
        }}
        trustIndicators={[
          { text: 'Customer Acquisition', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Market Expansion', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Growth Strategies', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent },
          { text: 'Business Development', color: SERVICE_CATEGORIES.SOLAR_POWER.colors.accent }
        ]}
        scrollText="Explore growth solutions"
      />



      {/* Growth Strategies Section */}
      <Section id="strategies" background="white">
        <SectionHeader
          title="Comprehensive Customer Growth Strategies"
          description="Proven methodologies to expand your solar customer base and accelerate business growth."
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
              title: "Customer Acquisition",
              description: "Strategic approaches to attract and convert new solar customers",
              icon: "🎯",
              gradient: "from-indigo-500 to-purple-500",
              features: [
                "Lead Generation Campaigns",
                "Digital Marketing Strategy",
                "Referral Programs",
                "Community Outreach",
                "Educational Workshops",
                "Partnership Development"
              ]
            },
            {
              title: "Market Expansion",
              description: "Expand your reach into new markets and customer segments",
              icon: "🌍",
              gradient: "from-purple-500 to-blue-500",
              features: [
                "Market Research & Analysis",
                "Geographic Expansion",
                "Segment Targeting",
                "Competitive Analysis",
                "Brand Positioning",
                "Channel Development"
              ]
            },
            {
              title: "Customer Retention",
              description: "Build lasting relationships and maximize customer lifetime value",
              icon: "💎",
              gradient: "from-blue-500 to-cyan-500",
              features: [
                "Customer Success Programs",
                "Loyalty Initiatives",
                "Ongoing Support Services",
                "Upselling Opportunities",
                "Feedback Systems",
                "Community Building"
              ]
            }
          ].map((strategy) => (
            <motion.div
              key={strategy.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={fadeInUp}
              {...cardHover}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${strategy.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 mb-6 mx-auto`}>
                {strategy.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{strategy.title}</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{strategy.description}</p>
              
              <ul className="space-y-3">
                {strategy.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Growth Process */}
      <Section background="gradient">
        <SectionHeader
          title="Our Customer Growth Process"
          description="A systematic approach to building and scaling your solar customer base effectively."
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
              title: "Market Analysis",
              description: "Comprehensive market research and opportunity assessment",
              icon: "📊"
            },
            {
              step: "02",
              title: "Strategy Development",
              description: "Custom growth strategy tailored to your business",
              icon: "🎯"
            },
            {
              step: "03",
              title: "Campaign Launch",
              description: "Execute multi-channel customer acquisition campaigns",
              icon: "🚀"
            },
            {
              step: "04",
              title: "Performance Tracking",
              description: "Monitor and optimize campaign performance",
              icon: "📈"
            },
            {
              step: "05",
              title: "Scale & Optimize",
              description: "Scale successful strategies and continuous improvement",
              icon: "⚡"
            }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              className="text-center relative"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.icon}
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
              {index < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
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
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <SectionHeader
              title="Why Choose Our Growth Solutions?"
              description="Proven expertise in solar market development and customer acquisition strategies."
              alignment="left"
            />
            
            <div className="space-y-8">
              {[
                {
                  title: 'Proven Track Record',
                  description: 'Successfully helped solar companies achieve significant customer growth and market expansion.',
                  icon: '🏆'
                },
                {
                  title: 'Industry Expertise',
                  description: 'Deep understanding of solar market dynamics and customer behavior patterns.',
                  icon: '⚡'
                },
                {
                  title: 'Data-Driven Approach',
                  description: 'Advanced analytics and performance tracking to optimize growth strategies.',
                  icon: '📊'
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
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Solar Customer Growth"
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
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-center text-white shadow-2xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Accelerate Your Solar Business Growth?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100 leading-relaxed">
              Partner with us to implement proven customer growth strategies and scale your solar business effectively.
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
                className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call +91 94120 79608
              </Link>
              <Link 
                href="mailto:info@sunvests.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
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

export default SolarCustomerGrowthPage; 