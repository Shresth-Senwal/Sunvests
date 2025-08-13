// ====================================================
// COMPANY INFORMATION
// ====================================================

export const COMPANY_INFO = {
  name: 'SUNVEST CONSULTANCY LLP',
  shortName: 'SUNVEST',
  tagline: 'Excellence | Innovation | Growth',
  chairman: 'Mr. Chandrakant Mishra',
  foundedYear: 2020,
  description: 'Transforming businesses through innovative IT solutions, sustainable solar energy, and strategic financial services.',
  vision: 'To be the leading consultancy firm driving digital transformation and sustainable growth across industries.',
  mission: 'Empowering businesses with cutting-edge technology, renewable energy solutions, and strategic financial guidance.',
};

// ====================================================
// CONTACT INFORMATION
// ====================================================

export const CONTACT_INFO = {
  email: 'info@sunvests.com',
  phone: '+91 94120 79608',
  address: 'H. No. 89, Vasant Vihar, Phase II, Dehradun - 248001, Uttarakhand, India',
  linkedin: 'https://linkedin.com/company/sunvest-consultancy',
  mapUrl: 'https://maps.google.com/?q=H.+No.+89,+Vasant+Vihar,+Phase+II,+Dehradun+248001+Uttarakhand+India',
  businessHours: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
  timezone: 'Asia/Kolkata',
};

// ====================================================
// UNIFIED DESIGN SYSTEM TOKENS
// ====================================================

export const DESIGN_TOKENS = {
  // Color System
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // Main primary
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af', // CSS var --primary
      900: '#1e3a8a',
    },
    
    // Service-specific Colors
    it: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      light: '#dbeafe',
      accent: '#06b6d4',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
      text: '#1e40af',
    },
    
    solar: {
      primary: '#f59e0b',
      secondary: '#f97316',
      light: '#fef3c7',
      accent: '#eab308',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #eab308 100%)',
      text: '#d97706',
    },
    
    finance: {
      primary: '#10b981',
      secondary: '#059669',
      light: '#d1fae5',
      accent: '#047857',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
      text: '#065f46',
    },
    
    // Neutral Colors
    neutral: {
      white: '#ffffff',
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    
    // Status Colors
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    }
  },
  
  // Typography Scale
  typography: {
    fontFamily: {
      primary: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.6',
      loose: '1.7',
    },
  },
  
  // Spacing System
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '5rem',   // 80px
    '5xl': '6rem',   // 96px
  },
  
  // Border Radius System
  borderRadius: {
    none: '0',
    xs: '0.25rem',   // 4px
    sm: '0.375rem',  // 6px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem',   // 32px
    full: '9999px',
  },
  
  // Shadow System
  boxShadow: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  // Animation System
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
    easing: {
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      crisp: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};

// ====================================================
// UNIFIED COMPONENT PATTERNS
// ====================================================

export const COMPONENT_PATTERNS = {
  // Button System
  buttons: {
    base: 'btn',
    
    primary: {
      base: 'btn btn-primary',
      variants: {
        default: 'btn btn-primary',
        it: 'btn btn-primary btn-it',
        solar: 'btn btn-primary btn-solar',
        finance: 'btn btn-primary btn-finance',
      }
    },
    
    secondary: {
      base: 'btn btn-secondary',
      variants: {
        default: 'btn btn-secondary',
        it: 'btn btn-secondary focus:ring-blue-500',
        solar: 'btn btn-secondary focus:ring-amber-500',
        finance: 'btn btn-secondary focus:ring-emerald-500',
      }
    },
    
    outline: {
      base: 'btn btn-outline',
      variants: {
        default: 'btn btn-outline',
        it: 'btn btn-outline border-blue-500 text-blue-600 hover:bg-blue-500',
        solar: 'btn btn-outline border-amber-500 text-amber-600 hover:bg-amber-500',
        finance: 'btn btn-outline border-emerald-500 text-emerald-600 hover:bg-emerald-500',
      }
    },
    
    sizes: {
      sm: 'btn-sm',
      md: '', // default
      lg: 'btn-lg',
      xl: 'btn-xl',
    }
  },
  
  // Card System
  cards: {
    base: 'card',
    
    default: {
      base: 'card',
      variants: {
        white: 'card bg-white',
        gray: 'card bg-gray-50',
        it: 'card card-it',
        solar: 'card card-solar', 
        finance: 'card card-finance',
      }
    },
    
    interactive: {
      base: 'card card-interactive',
      variants: {
        default: 'card card-interactive',
        elevated: 'card card-interactive card-elevated',
      }
    },
    
    feature: {
      base: 'card text-center p-6 md:p-8',
      content: 'flex flex-col items-center text-center h-full',
      icon: 'text-5xl md:text-6xl mb-4',
      title: 'text-xl md:text-2xl font-bold mb-3',
      description: 'text-[var(--text-light)] leading-relaxed mb-6 flex-grow',
      footer: 'mt-auto'
    },
    
    service: {
      base: 'card group cursor-pointer h-full flex flex-col',
      header: 'mb-4',
      icon: 'text-4xl mb-4',
      title: 'card-title text-xl font-semibold mb-3',
      description: 'card-content mb-6 leading-relaxed flex-grow',
      features: 'mb-6',
      featuresTitle: 'text-sm font-semibold mb-3 uppercase tracking-wide',
      featuresList: 'space-y-2',
      featureItem: 'flex items-center text-sm',
      featureBullet: 'w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0',
      footer: 'card-footer mt-auto'
    }
  },
  
  // Form System
  forms: {
    group: 'form-group',
    label: 'form-label',
    input: 'form-input',
    textarea: 'form-textarea',
    select: 'form-select',
    error: 'form-error',
    
    variants: {
      default: '',
      compact: 'space-y-4',
      spacious: 'space-y-8',
    }
  },
  
  // Icon System
  icons: {
    sizes: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4', 
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
      '2xl': 'w-10 h-10',
      '3xl': 'w-12 h-12',
    },
    
    colors: {
      default: 'text-current',
      primary: 'text-[var(--primary)]',
      it: 'text-[var(--it-primary)]',
      solar: 'text-[var(--solar-primary)]',
      finance: 'text-[var(--finance-primary)]',
      muted: 'text-[var(--text-muted)]',
    }
  },
  
  // Layout System
  layout: {
    container: 'container-custom',
    section: 'section',
    
    grid: {
      cols1: 'grid grid-cols-1',
      cols2: 'grid grid-cols-1 md:grid-cols-2',
      cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      
      gaps: {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
        xl: 'gap-12',
      }
    },
    
    flex: {
      center: 'flex items-center justify-center',
      between: 'flex items-center justify-between',
      start: 'flex items-center justify-start',
      column: 'flex flex-col',
      columnCenter: 'flex flex-col items-center justify-center',
    }
  },
  
  // Typography System
  typography: {
    headings: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text)] leading-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text)] leading-tight',
      h3: 'text-2xl md:text-3xl font-bold text-[var(--text)] leading-tight',
      h4: 'text-xl md:text-2xl font-semibold text-[var(--text)] leading-tight',
      h5: 'text-lg md:text-xl font-semibold text-[var(--text)] leading-tight',
      h6: 'text-base md:text-lg font-semibold text-[var(--text)] leading-tight',
    },
    
    body: {
      default: 'text-[var(--text-light)] leading-relaxed',
      large: 'text-lg text-[var(--text-light)] leading-relaxed',
      small: 'text-sm text-[var(--text-light)] leading-relaxed',
      muted: 'text-[var(--text-muted)] leading-relaxed',
    },
    
    labels: {
      default: 'text-sm font-medium text-[var(--text)]',
      required: 'text-sm font-medium text-[var(--text)] after:content-["*"] after:text-red-500 after:ml-1',
      optional: 'text-sm font-medium text-[var(--text-muted)]',
    }
  }
};

// ====================================================
// SERVICE CATEGORIES
// ====================================================

export const SERVICE_CATEGORIES = {
  IT_SERVICES: {
    title: 'IT Services',
    description: 'Comprehensive IT solutions including Product Engineering, AI/ML, Data Engineering, and Cloud & DevOps services.',
    href: '/services/it-services',
    theme: 'it' as const,
    colors: DESIGN_TOKENS.colors.it,
    },
  
  SOLAR_POWER: {
    title: 'Solar Power',
    description: 'Sustainable solar energy solutions for residential, commercial, and industrial applications.',
    href: '/services/solar-power',
    theme: 'solar' as const,
    colors: DESIGN_TOKENS.colors.solar,
    },
  
  INVESTMENT_FINANCIAL: {
    title: 'Investment & Financial',
    description: 'Comprehensive investment advisory and financial planning services for wealth management.',
    href: '/services/investment-financial',
    theme: 'finance' as const,
    colors: DESIGN_TOKENS.colors.finance,
  },
};

// ====================================================
// IMAGES CONSTANTS
// ====================================================

export const IMAGES = {
  HERO: {
    IT_SERVICES: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80',
    SOLAR_POWER: 'https://images.unsplash.com/photo-1559302504-64aae6ca6bc8?auto=format&fit=crop&w=2000&q=80',
    INVESTMENT_FINANCIAL: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80',
    HOMEPAGE: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80',
  },
  
  FEATURES: {
    AI_ML: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    CLOUD_DEVOPS: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    DATA_ENGINEERING: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    SOLAR_INSTALLATION: 'https://images.unsplash.com/photo-1623440469262-7ff8d82f8c8c?auto=format&fit=crop&w=800&q=80',
    PORTFOLIO_MANAGEMENT: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
  },
  
  TEAM: {
  CHAIRMAN: '/images/chairman-chandrakant-mishra.png',
  }
};

// ====================================================
// TRUST INDICATORS
// ====================================================

export const TRUST_INDICATORS = {
  HOMEPAGE: [
    { text: 'Excellence & Innovation', color: '#3b82f6' },
    { text: 'Trusted by Clients Nationwide', color: '#10b981' },
    { text: 'Industry Leading Solutions', color: '#f59e0b' },
    { text: 'Professional Expertise', color: '#8b5cf6' },
  ],
  
  IT_SERVICES: [
    { text: 'Extensive Project Portfolio', color: '#3b82f6' },
    { text: 'High Uptime Guarantee', color: '#10b981' },
    { text: '24/7 Technical Support', color: '#f59e0b' },
  ],
  
  SOLAR_POWER: [
    { text: 'Extensive Solar Installations', color: '#f59e0b' },
    { text: 'Long-term Warranty', color: '#10b981' },
    { text: 'Significant Savings Generated', color: '#3b82f6' },
  ],
  
  INVESTMENT_FINANCIAL: [
    { text: 'Substantial Assets Managed', color: '#10b981' },
    { text: 'Competitive Returns', color: '#059669' },
    { text: 'Satisfied Investors', color: '#047857' },
  ],
};

// ====================================================
// CONTACT CARDS
// ====================================================

export const CONTACT_CARDS = [
  {
    icon: 'email',
    title: 'Email Us',
    content: CONTACT_INFO.email,
    link: `mailto:${CONTACT_INFO.email}`,
    external: false,
  },
  {
    icon: 'phone',
    title: 'Call Us',
    content: CONTACT_INFO.phone,
    link: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
    external: false,
  },
  {
    icon: 'location',
    title: 'Visit Us',
    content: 'Dehradun, Uttarakhand',
    link: CONTACT_INFO.mapUrl,
    external: true,
  },
  {
    icon: 'linkedin',
    title: 'Connect',
    content: 'LinkedIn Profile',
    link: CONTACT_INFO.linkedin,
    external: true,
  },
];

// ====================================================
// CTA BUTTONS
// ====================================================

export const CTA_BUTTONS = {
  CALL_NOW: '📞 Call Now',
  LEARN_MORE: 'Learn More →',
  CONTACT_US: 'Contact Us',
  GET_STARTED: 'Get Started',
  VIEW_PORTFOLIO: 'View Portfolio',
  // Removed non-functional buttons: GET_QUOTE, SCHEDULE_CONSULTATION, DOWNLOAD_BROCHURE
};

// ====================================================
// STANDARDIZED NAVIGATION MENU
// ====================================================

export const NAVIGATION_ITEMS = [
  {
    title: 'Services',
    items: [
      { 
        name: 'IT Services', 
        href: '/services/it-services',
        description: 'Digital transformation & technology solutions',
        icon: 'CpuChipIcon',
        theme: 'it',
      },
      { 
        name: 'Solar Power Solutions', 
        href: '/services/solar-power',
        description: 'Renewable energy & sustainability',
        icon: 'BoltIcon',
        theme: 'solar',
      },
      { 
        name: 'Investment & Financial Services', 
        href: '/services/investment-financial',
        description: 'Wealth management & financial planning',
        icon: 'CurrencyDollarIcon',
        theme: 'finance',
      },
    ],
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Contact Us',
    href: '/#contact',
  },
];

// ====================================================
// RESPONSIVE BREAKPOINTS
// ====================================================

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// ====================================================
// ICON SYSTEM
// ====================================================

export const ICON_SIZES = {
  xs: 'icon icon-sm',  // 16px
  sm: 'icon',          // 24px (default)
  md: 'icon',          // 24px
  lg: 'icon icon-lg',  // 32px
  xl: 'icon icon-xl',  // 40px
};

// ====================================================
// ACCESSIBILITY CONSTANTS
// ====================================================

export const A11Y = {
  // Minimum touch target size
  MIN_TOUCH_TARGET: '44px',
  
  // Color contrast ratios
  CONTRAST_RATIOS: {
    AA_NORMAL: '4.5:1',
    AA_LARGE: '3:1',
    AAA_NORMAL: '7:1',
    AAA_LARGE: '4.5:1',
  },
  
  // Focus indicators
  FOCUS_RING: '2px solid var(--accent)',
  FOCUS_OFFSET: '2px',
};

// ====================================================
// PERFORMANCE CONSTANTS
// ====================================================

export const PERFORMANCE = {
  // Image optimization
  IMAGE_QUALITY: 80,
  IMAGE_FORMATS: ['webp', 'jpg', 'png'],
  
  // Animation performance
  WILL_CHANGE_PROPERTIES: ['transform', 'opacity', 'box-shadow'],
  BACKFACE_VISIBILITY: 'hidden',
  
  // Loading priorities
  LOADING_PRIORITIES: {
    HIGH: 'high',
    LOW: 'low',
    AUTO: 'auto',
  },
};

// Legacy export for backward compatibility
export const DESIGN_SYSTEM = {
  SPACING: {
    SECTION: COMPONENT_PATTERNS.layout.section,
    CONTAINER: COMPONENT_PATTERNS.layout.container,
    GRID_GAP: 'gap-8',
  },
  TYPOGRAPHY: {
    HERO_TITLE: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black',
    SECTION_TITLE: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    CARD_TITLE: 'text-xl md:text-2xl font-bold',
    BODY_LARGE: 'text-lg md:text-xl',
    BODY: 'text-base',
  },
  ANIMATIONS: {
    DURATION: DESIGN_TOKENS.animation.duration.normal,
    EASE: DESIGN_TOKENS.animation.easing.smooth,
    HOVER_SCALE: 'hover:scale-105',
    HOVER_SHADOW: 'hover:shadow-xl',
  },
  BORDERS: {
    RADIUS: DESIGN_TOKENS.borderRadius.xl,
    RADIUS_LARGE: DESIGN_TOKENS.borderRadius['2xl'],
    RADIUS_SMALL: DESIGN_TOKENS.borderRadius.lg,
  },
}; 