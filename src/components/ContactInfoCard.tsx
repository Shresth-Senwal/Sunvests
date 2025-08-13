import React from 'react';
import { motion } from 'framer-motion';
import { COMPONENT_PATTERNS } from '@/utils/constants';

type IconType = 'email' | 'phone' | 'location' | 'linkedin';

interface ContactInfoCardProps {
  icon: IconType | React.ReactNode;
  title: string;
  content: string;
  link: string;
  external?: boolean;
  theme?: 'default' | 'it' | 'solar' | 'finance';
  variant?: 'compact' | 'default' | 'expanded';
  className?: string;
}

const IconComponents: Record<IconType, React.ReactNode> = {
  email: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    </svg>
  ),
  location: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

const contactCardHover = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: 'easeOut' } 
  },
};

const contactCardContentHover = {
  whileHover: { 
    y: -4, 
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 } 
  },
};

const ContactInfoCard: React.FC<ContactInfoCardProps> = React.memo(({
  icon,
  title,
  content,
  link,
  external = false,
  theme = 'default',
  variant = 'default',
  className = ''
}) => {
  const iconElement = (typeof icon === 'string' && icon in IconComponents) 
    ? IconComponents[icon as IconType] 
    : icon;

  const getIconColor = () => {
    switch (theme) {
      case 'it':
        return COMPONENT_PATTERNS.icons.colors.it;
      case 'solar':
        return COMPONENT_PATTERNS.icons.colors.solar;
      case 'finance':
        return COMPONENT_PATTERNS.icons.colors.finance;
      default:
        return COMPONENT_PATTERNS.icons.colors.primary;
    }
  };

  const getCardVariant = () => {
    switch (theme) {
      case 'it':
        return COMPONENT_PATTERNS.cards.default.variants.it;
      case 'solar':
        return COMPONENT_PATTERNS.cards.default.variants.solar;
      case 'finance':
        return COMPONENT_PATTERNS.cards.default.variants.finance;
      default:
        return COMPONENT_PATTERNS.cards.default.variants.white;
    }
  };

  const getPadding = () => {
    switch (variant) {
      case 'compact':
        return 'p-3';
      case 'expanded':
        return 'p-6';
      default:
        return 'p-4';
    }
  };

  return (
    <motion.a
      href={link}
      className={`block contact-card-container ${className} group`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variants={contactCardHover}
      initial="initial"
      animate="animate"
      role="link"
      aria-label={`${title}: ${content}`}
    >
      <motion.div 
        className={`contact-card-content ${getCardVariant()} ${getPadding()} rounded-2xl border border-[var(--border)] shadow-sm h-full transition-all duration-300 group-hover:shadow-lg`}
        {...contactCardContentHover}
      >
        <div className={COMPONENT_PATTERNS.layout.flex.start}>
          <div className={`${getIconColor()} mr-3 shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            {iconElement}
          </div>
          <div className="flex-1 text-left min-w-0">
            <h3 className={`${COMPONENT_PATTERNS.typography.labels.default} ${variant === 'compact' ? 'text-xs' : 'text-sm'} font-medium leading-tight mb-1`}>
              {title}
            </h3>
            <p className={`${COMPONENT_PATTERNS.typography.body.small} ${variant === 'compact' ? 'text-xs' : 'text-sm'} leading-tight truncate`}>
              {content}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
});

ContactInfoCard.displayName = 'ContactInfoCard';

export default ContactInfoCard; 
