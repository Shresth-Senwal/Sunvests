'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const RealEstateMortgagePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-green-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] mb-6"
              variants={fadeInUp}
            >
              Real Estate & Mortgage Solutions
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[var(--text-light)] mb-8"
              variants={fadeInUp}
            >
              Real estate investment opportunities and mortgage solutions for property financing needs and wealth building
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                Explore Real Estate Options
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                Build Wealth Through Real Estate
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Our real estate and mortgage services provide comprehensive solutions for property investment and financing. Whether you are looking to invest in residential or commercial properties, or need mortgage assistance for your dream home, we offer expert guidance and competitive financing options to help you achieve your real estate goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Residential and commercial property investments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Home loan and mortgage financing solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Property valuation and market analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Investment strategy and portfolio diversification</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Real Estate Investment and Property"
                width={1000}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[var(--secondary)]">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
              Real Estate & Mortgage Services
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Comprehensive real estate investment and financing solutions for all your property needs
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              {
                title: "Real Estate Investment",
                description: "Strategic property investment opportunities for wealth building",
                icon: "🏢",
                features: [
                  "Residential property investment",
                  "Commercial real estate",
                  "REITs (Real Estate Investment Trusts)",
                  "Property market analysis",
                  "Investment property selection",
                  "Rental yield optimization"
                ]
              },
              {
                title: "Home Loans & Mortgages",
                description: "Competitive financing solutions for property purchases",
                icon: "🏠",
                features: [
                  "Home loan processing",
                  "Mortgage refinancing",
                  "Construction loans",
                  "Plot purchase loans",
                  "Balance transfer options",
                  "Loan against property"
                ]
              },
              {
                title: "Advisory Services",
                description: "Expert guidance for real estate decisions and planning",
                icon: "📋",
                features: [
                  "Property valuation services",
                  "Legal documentation support",
                  "Market trend analysis",
                  "Investment strategy planning",
                  "Tax implications guidance",
                  "Exit strategy planning"
                ]
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{service.title}</h3>
                <p className="text-[var(--text-light)] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-[var(--text-light)]">
                      <span className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-[var(--text)] mb-6">
                Why Choose Our Real Estate Services?
              </h3>
              <ul className="space-y-4 text-[var(--text-light)]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Market Expertise:</strong> Deep understanding of local and national real estate markets.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Competitive Rates:</strong> Access to best mortgage rates and financing options.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>End-to-End Support:</strong> Complete assistance from property search to loan closure.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Investment Strategy:</strong> Strategic guidance for long-term wealth building.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-[var(--secondary)] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  Real Estate Investment Process
                </h3>
                <p className="text-[var(--text-light)] mb-6">
                  Systematic approach to real estate investment and mortgage financing for optimal results.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Investment goal assessment
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Property research and selection
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Financing arrangement and approval
                  </div>
                </div>
                <Link href="/#contact" className="btn-primary w-full text-center block">
                  Contact Our Real Estate Experts
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Invest in Real Estate?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your real estate investment journey with our expert guidance and competitive financing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+919412079608" className="btn-secondary bg-white text-[var(--primary)] hover:bg-gray-100">
                Call +91 94120 79608
              </Link>
              <Link href="mailto:bck@sunvests.com" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary)]">
                Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstateMortgagePage; 
