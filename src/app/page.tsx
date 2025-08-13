'use client';

import React, { useEffect, useCallback } from 'react'; 
import Layout from '../components/Layout'; 
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation'; 
import ContactInfoCard from '@/components/ContactInfoCard';
import FeatureCard from '@/components/FeatureCard';
import Section from '@/components/Section';
import SectionHeader from '@/components/SectionHeader';
import { 
  fadeInUp, 
  fadeInUpDelayed, 
  staggerContainer, 
  cardHover,
  heroVariants,
  heroStagger,
  scrollIndicator
} from '@/utils/animations';
import { 
  COMPANY_INFO, 
  SERVICE_CATEGORIES, 
  TRUST_INDICATORS, 
  CONTACT_CARDS,
  IMAGES,
  COMPONENT_PATTERNS,
  CTA_BUTTONS
} from '@/utils/constants';
import type { FeatureCardProps } from '@/components/FeatureCard';

// Optimize image loading with proper sizes
const optimizedImageProps = {
  quality: 85,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==',
};

const services: Array<{
  title: string;
  description: string;
  href: string;
  iconName: FeatureCardProps['iconName'];
}> = [
  {
    title: SERVICE_CATEGORIES.IT_SERVICES.title,
    description: SERVICE_CATEGORIES.IT_SERVICES.description,
    href: SERVICE_CATEGORIES.IT_SERVICES.href,
    iconName: 'CpuChipIcon',
  },
  {
    title: SERVICE_CATEGORIES.SOLAR_POWER.title,
    description: SERVICE_CATEGORIES.SOLAR_POWER.description,
    href: SERVICE_CATEGORIES.SOLAR_POWER.href,
    iconName: 'BoltIcon',
  },
  {
    title: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.title,
    description: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.description,
    href: SERVICE_CATEGORIES.INVESTMENT_FINANCIAL.href,
    iconName: 'CurrencyDollarIcon',
  },
];

const expertiseHighlights = [
  {
    title: 'Data-Driven Solutions',
    description: 'Leveraging advanced analytics and AI to transform raw data into actionable business insights that drive strategic decision-making',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    theme: 'it' as const
  },
  {
    title: 'Green Energy Innovation',
    description: 'Building sustainable infrastructure that reduces carbon footprint while maximizing energy efficiency and long-term cost savings',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    theme: 'solar' as const
  }
];

const industryShowcase = [
  {
    title: 'Strategic Financial Planning',
    description: 'Personalized investment strategies designed to secure your financial future',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'finance' as const
  },
  {
    title: 'Innovation Laboratory',
    description: 'Cutting-edge research and development driving tomorrow\'s technology solutions',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'it' as const
  },
  {
    title: 'Enterprise Solutions',
    description: 'Scalable business solutions that grow with your organization\'s needs',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'it' as const
  }
];

const industryTransformation = [
  {
    title: 'IT Solutions',
    description: 'Advanced analytics and software engineering driving digital transformation and business innovation',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'it' as const
  },
  {
    title: 'Solar Power',
    description: 'Sustainable energy solutions for a cleaner, greener future with maximum efficiency and cost savings',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'solar' as const
  },
  {
    title: 'Financial Services',
    description: 'Strategic investment planning and comprehensive financial solutions for long-term wealth creation',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    theme: 'finance' as const
  }
];

const companyValues = [
  {
    title: 'Excellence in Service',
    description: 'We deliver superior quality solutions that exceed client expectations and drive business success.',
    icon: '⭐'
  },
  {
    title: 'Sustainable Innovation',
    description: 'Pioneering eco-friendly technologies and sustainable business practices for a better tomorrow.',
    icon: '🌱'
  },
  {
    title: 'Integrity & Trust',
    description: 'Building long-term relationships through transparent business practices and ethical conduct.',
    icon: '🤝'
  }
];

const deliveryExcellence = [
  {
    title: 'Technology Innovation',
    description: 'Cutting-edge AI, ML, and software solutions that drive business transformation'
  },
  {
    title: 'Sustainable Energy',
    description: 'Comprehensive solar power solutions reducing carbon footprints and energy costs'
  },
  {
    title: 'Financial Growth',
    description: 'Strategic investment and financial planning services for long-term wealth creation'
  }
];

export default function Home() {
  const contactAnimationControls = useAnimation();
  const aboutAnimationControls = useAnimation(); 
  const pathname = usePathname(); 

  const handleHashScroll = useCallback((elementId: string, isPageLoad: boolean = false) => {
    const element = document.getElementById(elementId);
    if (element) {
      const scrollDelay = isPageLoad ? 300 : 50; 
      
      setTimeout(() => {
        requestAnimationFrame(() => {
          const style = getComputedStyle(element);
          
          if (style.display === 'none') {
            console.warn(`Element '${elementId}' is display:none. Cannot scroll.`);
            return;
          }

          const elementRect = element.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.scrollY;
          
          window.scrollTo({
            top: absoluteElementTop,
            behavior: 'smooth'
          });
          
          if (elementId === 'about') {
            if (aboutAnimationControls && typeof aboutAnimationControls.start === 'function') {
              aboutAnimationControls.start("animate"); 
            }
          } else if (elementId === 'contact') {
            if (contactAnimationControls && typeof contactAnimationControls.start === 'function') {
              setTimeout(() => { 
                  contactAnimationControls.start("animate");
              }, 100); 
            }
          }
        });
      }, scrollDelay);
    }
  }, [contactAnimationControls, aboutAnimationControls]); 

  useEffect(() => {
    const sessionKey = 'sunvestsHomePageLoadedInSession';

    // Check for scrollToHash flag set by navigation from another page
    const scrollToHash = sessionStorage.getItem('scrollToHash');
    if (scrollToHash) {
      setTimeout(() => {
        const el = document.getElementById(scrollToHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollToHash');
      }, 200);
    }

    const processHashAfterNavigation = () => {
        const currentHash = window.location.hash;
        if (currentHash) {
            const elementId = currentHash.substring(1);
            if (elementId) {
                handleHashScroll(elementId, true); 
            }
        }
    };

    if (pathname === '/') {
        const hasLoadedThisSession = sessionStorage.getItem(sessionKey);

        if (!hasLoadedThisSession) {
            sessionStorage.setItem(sessionKey, 'true');
            if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            }
        } else {
            setTimeout(processHashAfterNavigation, 50); 
        }
    }

    const handlePageInternalLinkClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
        
        const hrefAttribute = anchor?.getAttribute('href');

        if (anchor && anchor.pathname === window.location.pathname && anchor.hash && hrefAttribute && !hrefAttribute.startsWith('/#')) {
            event.preventDefault();
            const elementId = anchor.hash.substring(1);
            handleHashScroll(elementId, false);
            if (window.location.hash !== anchor.hash) {
                history.pushState(null, '', anchor.hash);
            }
        }
    };

    document.addEventListener('click', handlePageInternalLinkClick);

    return () => {
        document.removeEventListener('click', handlePageInternalLinkClick);
    };
  }, [pathname, handleHashScroll]); 

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.HERO.HOMEPAGE}
            alt="Modern Office Environment - SUNVEST CONSULTANCY LLP"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            {...optimizedImageProps}
          />
        </div>
        
        {/* Multi-layered Background Overlays for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-20"></div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 z-15">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.1, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        {/* Main Content */}
        <motion.div 
          className="container-custom text-center text-white relative z-30 px-4 sm:px-6 lg:px-8"
          variants={heroStagger}
          initial="initial"
          animate="animate"
        >
          {/* Company Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            variants={heroVariants}
          >
            <span className="text-sm font-medium text-white/90">🚀 Transforming Businesses Since {COMPANY_INFO.foundedYear}</span>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.h1 
            className={`${COMPONENT_PATTERNS.typography.headings.h1} mb-8 leading-[0.9] tracking-tight text-white`}
            variants={heroVariants}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {COMPANY_INFO.shortName}
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl mt-2">
              CONSULTANCY
            </span>
            <span className="block text-white/95 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 drop-shadow-2xl">
              LLP
            </span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p 
            className={`${COMPONENT_PATTERNS.typography.body.large} mb-12 max-w-5xl mx-auto text-white/95 drop-shadow-lg`}
            variants={heroVariants}
          >
              {COMPANY_INFO.description}
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className={`${COMPONENT_PATTERNS.layout.flex.center} flex-col sm:flex-row gap-6 mb-16`}
            variants={heroVariants}
          >
            <Link 
              href="#services" 
              className={`${COMPONENT_PATTERNS.buttons.primary.base} group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 min-w-[320px] overflow-hidden`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Services
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </span>
            </Link>
            <Link 
              href="#contact" 
              className={`${COMPONENT_PATTERNS.buttons.secondary.base} group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/40 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 min-w-[320px]`}
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Us Today
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className={`${COMPONENT_PATTERNS.layout.flex.center} flex-col sm:flex-row gap-8 text-white/80`}
            variants={heroVariants}
          >
            {TRUST_INDICATORS.HOMEPAGE.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          {...scrollIndicator}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <Section id="services" background="white">
        <SectionHeader
          title="Our Business Verticals"
          description={`${COMPANY_INFO.name} operates across three key sectors, delivering excellence and innovation in IT services, renewable energy, and financial solutions.`}
        />
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
              linkHref={service.href}
              linkLabel={CTA_BUTTONS.LEARN_MORE}
              variants={fadeInUp}
            />
          ))}
        </motion.div>
      </Section>

      {/* Our Expertise Section */}
      <Section background="gradient">
        <SectionHeader
          title="Our Expertise in Action"
          description="Witness how our comprehensive solutions drive real-world results across diverse industries and business environments."
        />
        
          <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols2} ${COMPONENT_PATTERNS.layout.grid.gaps.xl} mb-16`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertiseHighlights.map((expertise) => (
          <motion.div 
              key={expertise.title}
              className={`${COMPONENT_PATTERNS.cards.interactive.base} relative overflow-hidden rounded-3xl shadow-2xl group`}
            variants={fadeInUp}
            {...cardHover}
          >
            <Image 
                src={expertise.image}
                alt={`${expertise.title} - SUNVEST CONSULTANCY LLP`}
              width={1000}
              height={600} 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              {...optimizedImageProps}
            />
            {/* Enhanced Multi-layer Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${expertise.theme === 'it' ? 'from-purple-900/40 to-blue-900/40' : 'from-orange-900/40 to-yellow-900/40'}`}></div>
            <div className="absolute inset-0 bg-black/25"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className={`${COMPONENT_PATTERNS.typography.headings.h4} mb-3 text-white drop-shadow-2xl`}>
                    {expertise.title}
                </h3>
                  <p className={`${COMPONENT_PATTERNS.typography.body.default} text-white/95 drop-shadow-xl`}>
                    {expertise.description}
                </p>
              </div>
            </div>
          </motion.div>
          ))}
        </motion.div>
        
          <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg}`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industryShowcase.map((showcase) => (
          <motion.div 
              key={showcase.title}
              className={`${COMPONENT_PATTERNS.cards.interactive.base} relative overflow-hidden rounded-3xl shadow-2xl group`}
            variants={fadeInUp}
            {...cardHover}
          >
            <Image 
                src={showcase.image}
                alt={`${showcase.title} - SUNVEST CONSULTANCY LLP`}
              width={800}
              height={500} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              {...optimizedImageProps}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${
                showcase.theme === 'finance' ? 'from-emerald-900/40 to-green-900/40' : 
                showcase.theme === 'it' ? 'from-purple-900/40 to-blue-900/40' : 
                'from-indigo-900/40 to-purple-900/40'
              }`}></div>
            <div className="absolute inset-0 bg-black/25"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h4 className={`${COMPONENT_PATTERNS.typography.headings.h5} mb-2 text-white drop-shadow-2xl`}>
                    {showcase.title}
                  </h4>
                  <p className={`${COMPONENT_PATTERNS.typography.body.small} text-white/95 drop-shadow-xl`}>
                    {showcase.description}
                  </p>
              </div>
            </div>
          </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Industry Showcase Section */}
      <Section background="gradient">
        <SectionHeader
          title="Transforming Industries Through Innovation"
          description="From cutting-edge technology solutions to sustainable energy systems and strategic financial planning, we deliver results that matter."
        />
        
          <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols3} ${COMPONENT_PATTERNS.layout.grid.gaps.lg} mb-12`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industryTransformation.map((industry) => (
          <motion.div 
              key={industry.title}
              className={`${COMPONENT_PATTERNS.cards.interactive.base} relative overflow-hidden rounded-xl shadow-2xl group`}
            variants={fadeInUp}
            {...cardHover}
          >
            <Image 
                src={industry.image}
                alt={`${industry.title} - SUNVEST CONSULTANCY LLP`}
              width={800}
              height={600} 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              {...optimizedImageProps}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${
                industry.theme === 'it' ? 'from-purple-900/40 to-blue-900/40' :
                industry.theme === 'solar' ? 'from-orange-900/40 to-yellow-900/40' :
                'from-green-900/40 to-emerald-900/40'
              }`}></div>
            <div className="absolute inset-0 bg-black/25"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className={`${COMPONENT_PATTERNS.typography.headings.h4} mb-3 text-white drop-shadow-2xl`}>
                    {industry.title}
                </h3>
                  <p className={`${COMPONENT_PATTERNS.typography.body.default} text-white/95 drop-shadow-xl`}>
                    {industry.description}
                </p>
              </div>
            </div>
            </motion.div>
          ))}
          </motion.div>
          
          <motion.div 
          className={`${COMPONENT_PATTERNS.layout.grid.cols2} ${COMPONENT_PATTERNS.layout.grid.gaps.xl} items-center`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className={`${COMPONENT_PATTERNS.typography.headings.h3} text-[var(--text)] mb-6`}>
              Delivering Excellence Across Multiple Domains
            </h3>
            <div className="space-y-4">
              {deliveryExcellence.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className={`w-8 h-8 ${COMPONENT_PATTERNS.icons.colors.primary} text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div>
                    <h4 className={`${COMPONENT_PATTERNS.typography.headings.h6} text-[var(--text)] mb-1`}>
                      {item.title}
                    </h4>
                    <p className={`${COMPONENT_PATTERNS.typography.body.default}`}>
                      {item.description}
                    </p>
                </div>
              </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className={`${COMPONENT_PATTERNS.cards.interactive.base} relative overflow-hidden rounded-lg`}
            variants={fadeInUp}
            {...cardHover}
          >
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Diverse Professional Team Collaboration - SUNVEST CONSULTANCY LLP"
              width={1000}
              height={700} 
              className="rounded-lg shadow-xl w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              loading="lazy"
              {...optimizedImageProps}
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Chairman Section */}
      <Section background="white">
        <SectionHeader
          title="Leadership"
          description="Visionary leadership driving innovation and excellence across all our business verticals."
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className={`${COMPONENT_PATTERNS.cards.default.variants.gray} rounded-2xl p-8 md:p-12 text-center`}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            {...cardHover}
          >
            <div className={`${COMPONENT_PATTERNS.layout.flex.center} flex-col md:flex-row gap-8 md:gap-12`}>
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMAGES.TEAM.CHAIRMAN}
                    alt={`${COMPANY_INFO.chairman} - Chairman of SUNVEST CONSULTANCY LLP`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h3 className={`${COMPONENT_PATTERNS.typography.headings.h3} text-[var(--text)] mb-2`}>
                  {COMPANY_INFO.chairman}
                </h3>
                <p className={`${COMPONENT_PATTERNS.typography.body.large} ${COMPONENT_PATTERNS.icons.colors.primary} font-semibold mb-4`}>
                  Chairman
                </p>
                <p className={`${COMPONENT_PATTERNS.typography.body.large}`}>
                  Under the visionary leadership of Chairman {COMPANY_INFO.chairman}, {COMPANY_INFO.name} has emerged as a leading conglomerate delivering excellence across multiple business verticals. His strategic vision and commitment to innovation drive our mission to transform industries through technology, sustainable energy, and financial expertise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section 
        id="about" 
        background="gradient"
        className="relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10">
          <SectionHeader
            title="Your Trusted Business Partner"
            description={`${COMPANY_INFO.name} is committed to delivering innovative solutions across IT services, renewable energy, and financial sectors, contributing to India's technological and economic advancement.`}
          />
          
          <div className={`${COMPONENT_PATTERNS.layout.grid.cols2} ${COMPONENT_PATTERNS.layout.grid.gaps.xl} items-center`}>
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="order-2 md:order-1"
            > 
              <div className={`${COMPONENT_PATTERNS.cards.default.variants.white} backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20`}>
                <h3 className={`${COMPONENT_PATTERNS.typography.headings.h3} text-slate-900 mb-4`}>
                  Our Vision & Values
                </h3>
                <p className={`${COMPONENT_PATTERNS.typography.body.large} mb-6 text-slate-700`}>
                  We envision. We strategize. We support. Our diversified approach ensures sustainable growth while delivering exceptional value to our clients across all business verticals.
                </p>
                <ul className="space-y-4 text-slate-700">
                  {companyValues.map((value, index) => (
                    <li key={value.title} className="flex items-start">
                      <div className={`w-6 h-6 bg-gradient-to-br ${
                        index === 0 ? 'from-blue-500 to-purple-600' :
                        index === 1 ? 'from-green-500 to-emerald-600' :
                        'from-amber-500 to-orange-600'
                      } rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1`}>
                        <span className="text-sm">{value.icon}</span>
                    </div>
                      <span>
                        <strong>{value.title}:</strong> {value.description}
                      </span>
                  </li>
                  ))}
                </ul>
                <motion.div 
                  variants={fadeInUp} 
                  className="mt-8" 
                  whileHover={{ scale: 1.03, transition: {duration: 0.15} }} 
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    href="#contact" 
                    className={`${COMPONENT_PATTERNS.buttons.primary.variants.default} bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-400 hover:via-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                     Partner With Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              className="order-1 md:order-2 overflow-hidden rounded-3xl"
              {...cardHover}
            >
              <div className="relative">
                              <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Professional Team Strategy Meeting - SUNVEST CONSULTANCY LLP"
                width={1170}
                height={780} 
                className="rounded-3xl shadow-2xl w-full h-auto max-h-[500px] object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                loading="lazy"
                {...optimizedImageProps}
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section 
        id="contact" 
        background="white"
        className="contact-form-container"
      >
        <SectionHeader
          title="Let's Build Your Future, Together"
          description="Have a project in mind or want to learn more? Reach out through your preferred method below, or send us a message."
        />

        <motion.div
          className={`${COMPONENT_PATTERNS.layout.grid.cols4} ${COMPONENT_PATTERNS.layout.grid.gaps.md} mb-10 md:mb-12`}
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CONTACT_CARDS.map((info) => (
            <motion.div key={info.title} variants={fadeInUp}>
            <ContactInfoCard
              icon={info.icon}
              title={info.title}
              content={info.content}
              link={info.link}
              external={info.external}
            />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={`${COMPONENT_PATTERNS.forms.group} contact-form bg-[var(--background-alt)] p-6 sm:p-8 rounded-lg shadow-md`}
          variants={fadeInUpDelayed}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={`${COMPONENT_PATTERNS.typography.headings.h3} text-[var(--text)] mb-6 text-center`}>
            Or Send Us a Message Directly
          </h3>
          <form action="#" method="POST" onSubmit={(e) => {
            const form = e.currentTarget;
            // Honeypot check
            const honeypot = (form.elements.namedItem('company-website') as HTMLInputElement)?.value;
            if (honeypot) {
              e.preventDefault();
              alert('Spam detected.');
              return false;
            }
            // TODO: Add server-side validation for spam and security
          }}>
            {/* Honeypot field for spam protection */}
            <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
              <label htmlFor="company-website">Company Website</label>
              <input type="text" id="company-website" name="company-website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className={`${COMPONENT_PATTERNS.layout.grid.cols1} gap-y-5 sm:gap-y-6 gap-x-8 sm:grid-cols-2`}>
              <div className={COMPONENT_PATTERNS.forms.group}> 
                <label htmlFor="first-name" className={COMPONENT_PATTERNS.forms.label}>First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className={COMPONENT_PATTERNS.forms.input} required />
              </div>
              <div className={COMPONENT_PATTERNS.forms.group}> 
                <label htmlFor="last-name" className={COMPONENT_PATTERNS.forms.label}>Last name</label>
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className={COMPONENT_PATTERNS.forms.input} required />
              </div>
              <div className={`sm:col-span-2 ${COMPONENT_PATTERNS.forms.group}`}> 
                <label htmlFor="email" className={COMPONENT_PATTERNS.forms.label}>Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className={COMPONENT_PATTERNS.forms.input} required />
              </div>
              <div className={`sm:col-span-2 ${COMPONENT_PATTERNS.forms.group}`}> 
                <label htmlFor="company" className={COMPONENT_PATTERNS.forms.label}>Company (Optional)</label>
                <input type="text" name="company" id="company" autoComplete="organization" className={COMPONENT_PATTERNS.forms.input} />
              </div>
              <div className={`sm:col-span-2 ${COMPONENT_PATTERNS.forms.group}`}> 
                <label htmlFor="message" className={COMPONENT_PATTERNS.forms.label}>Message</label>
                <textarea id="message" name="message" rows={5} className={COMPONENT_PATTERNS.forms.textarea} required></textarea> 
              </div>
            </div>
            <div className="mt-8 sm:mt-10">
              <motion.button 
                type="submit" 
                className={`${COMPONENT_PATTERNS.buttons.primary.base} w-full text-base sm:text-lg py-2.5 sm:py-3`}
                whileHover={{ scale: 1.02, transition: { duration: 0.15 } }} 
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </Section>
    </Layout>
  );
}
