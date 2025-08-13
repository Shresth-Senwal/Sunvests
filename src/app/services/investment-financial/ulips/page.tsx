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

const ULIPsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
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
              Unit Linked Insurance Plans (ULIPs)
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[var(--text-light)] mb-8"
              variants={fadeInUp}
            >
              Unit Linked Insurance Plans combining investment and insurance for comprehensive financial protection and wealth creation
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                Explore ULIP Plans
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
                Insurance + Investment in One Plan
              </h2>
              <p className="text-lg text-[var(--text-light)] mb-6">
                Unit Linked Insurance Plans (ULIPs) offer the dual benefit of life insurance protection and investment growth potential. These innovative financial products allow you to secure your family&apos;s future while building wealth through market-linked investments, providing flexibility to switch between funds based on market conditions and life goals.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Life insurance protection with investment growth</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Flexibility to switch between fund options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tax benefits under Section 80C and 10(10D)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Partial withdrawal and loan facilities</span>
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Insurance and Investment Planning"
                width={1000}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ULIP Types */}
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
              Types of ULIP Plans
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Various ULIP options designed to meet different life stages and financial objectives
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
                title: "Equity ULIPs",
                description: "Higher growth potential through equity market exposure",
                icon: "📈",
                features: [
                  "Equity fund investments",
                  "Higher return potential",
                  "Long-term wealth creation",
                  "Market risk exposure",
                  "Suitable for young investors",
                  "Growth-oriented strategy"
                ]
              },
              {
                title: "Debt ULIPs",
                description: "Stable returns through fixed income investments",
                icon: "🏦",
                features: [
                  "Fixed income securities",
                  "Lower risk profile",
                  "Stable returns",
                  "Capital preservation",
                  "Suitable for conservative investors",
                  "Regular income generation"
                ]
              },
              {
                title: "Balanced ULIPs",
                description: "Optimal mix of equity and debt for balanced growth",
                icon: "⚖️",
                features: [
                  "Equity and debt combination",
                  "Moderate risk profile",
                  "Balanced growth approach",
                  "Diversified portfolio",
                  "Suitable for moderate investors",
                  "Risk-adjusted returns"
                ]
              }
            ].map((type) => (
              <motion.div
                key={type.title}
                className="bg-white p-8 rounded-lg shadow-sm"
                variants={fadeInUp}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{type.title}</h3>
                <p className="text-[var(--text-light)] mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
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

      {/* Benefits & Features */}
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
                Key Benefits of ULIPs
              </h3>
              <ul className="space-y-4 text-[var(--text-light)]">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Dual Benefit:</strong> Life insurance protection plus investment growth in one plan.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Tax Benefits:</strong> Deductions under 80C and tax-free maturity under 10(10D).</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Flexibility:</strong> Switch between funds and adjust premium payments as needed.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Liquidity:</strong> Partial withdrawal and loan facilities after lock-in period.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-[var(--secondary)] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">
                  ULIP Investment Process
                </h3>
                <p className="text-[var(--text-light)] mb-6">
                  Simple steps to start your ULIP investment journey with comprehensive protection and growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Choose appropriate ULIP plan
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Select fund allocation strategy
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Regular monitoring and review
                  </div>
                </div>
                <Link href="/#contact" className="btn-primary w-full text-center block">
                  Contact Our ULIP Experts
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
              Ready to Secure Your Future with ULIPs?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Combine life insurance protection with investment growth through our expert ULIP advisory services.
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

export default ULIPsPage; 
