'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { COMPANY_INFO, NAVIGATION_ITEMS, CONTACT_INFO, SERVICE_CATEGORIES } from '@/utils/constants';
import { 
  fadeInUp, 
  navItemHover, 
  buttonHover,
  staggerContainer 
} from '@/utils/animations';
import Chatbot from './Chatbot';

interface LayoutProps {
  children: ReactNode;
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

const dropdownVariants = {
  initial: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.95, 
    transition: { 
      duration: 0.15, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

const mobileMenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { 
    opacity: 1, 
    height: 'auto', 
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
  exit: { 
    opacity: 0, 
    height: 0, 
    transition: { 
      duration: 0.2, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// ChatbotWrapper is now imported directly

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeAllMenus();
    const targetId = href.substring(href.indexOf('#') + 1);

    if (pathname !== '/' && href.startsWith('/#')) {
      sessionStorage.setItem('scrollToHash', targetId);
      router.push('/');
      return;
    }

    setTimeout(() => {
      if (pathname === '/' && href.startsWith('/#')) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else if (href.startsWith('/#')) {
        router.push(`/#${targetId}`);
      } else {
        router.push(href);
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 400);
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollToHash = sessionStorage.getItem('scrollToHash');
    if (scrollToHash && pathname === '/') {
      setTimeout(() => {
        document.getElementById(scrollToHash)?.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollToHash');
      }, 500);
    }
  }, [pathname]);



  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 focus:opacity-100 focus:translate-y-2 opacity-0 -translate-y-2"
      >
        Skip to main content
      </a>
      
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <motion.div 
              variants={navItemVariants} 
              initial="hidden" 
              animate="visible"
              {...navItemHover}
            >
              <Link 
                href="/" 
                className="flex items-center gap-3 text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200" 
                onClick={closeAllMenus}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                  {COMPANY_INFO.shortName}
                </Link>
            </motion.div>

            <motion.div
              className="hidden lg:flex items-center space-x-2"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <motion.div key={item.title} className="relative" variants={navItemVariants}>
                  {item.items ? (
                    <div
                      onMouseEnter={() => setIsServicesMenuOpen(true)}
                      onMouseLeave={() => setIsServicesMenuOpen(false)}
                      className="relative"
                    >
                      <button
                        className="nav-link flex items-center gap-1"
                        onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                        aria-expanded={isServicesMenuOpen}
                        aria-haspopup="true"
                      >
                        {item.title}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesMenuOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {isServicesMenuOpen && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="dropdown-menu absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 z-20"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="dropdown-item group"
                                onClick={closeAllMenus}
                                aria-current={pathname === subItem.href ? 'page' : undefined}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-200">
                                    <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                                {subItem.name}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="nav-link"
                      onClick={(e) => handleHashLinkClick(e, item.href || '#')}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div variants={navItemVariants} className="ml-4">
                <motion.div {...buttonHover}>
                <Link
                    href="/#contact"
                  className="btn-primary"
                    onClick={(e) => handleHashLinkClick(e, '/#contact')}
                >
                  Get Started
                </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.button
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="lg:hidden border-t border-slate-200 bg-white"
              >
                <div className="py-4 space-y-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <div key={item.title}>
                      {item.items ? (
                        <div>
                          <button
                            className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                            onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                          >
                            <div className="flex items-center justify-between">
                            {item.title}
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isServicesMenuOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                            </div>
                          </button>
                          <AnimatePresence>
                            {isServicesMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                                    onClick={closeAllMenus}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href || '#'}
                          className="block px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                          onClick={(e) => handleHashLinkClick(e, item.href || '#')}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Link
                      href="/#contact"
                      className="btn-primary w-full justify-center"
                      onClick={(e) => handleHashLinkClick(e, '/#contact')}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      <main id="main-content" className="flex-1 pt-16 lg:pt-18">
        {children}
      </main>

      <motion.footer
        className="bg-slate-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-2xl font-bold">{COMPANY_INFO.shortName}</h3>
              </div>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                {COMPANY_INFO.description}
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href={CONTACT_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {Object.values(SERVICE_CATEGORIES).map((service) => (
                  <li key={service.title}>
                    <Link 
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-300">{CONTACT_INFO.email}</p>
                </div>
                <div>
                  <p className="text-slate-300">{CONTACT_INFO.phone}</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
            {COMPANY_INFO.tagline}
          </p>
          </div>
        </div>
      </motion.footer>
      
      <AnimatePresence>
        {showBackToTop && (
      <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
        )}
      </AnimatePresence>

        <Chatbot />
    </div>
  );
};

export default Layout;

