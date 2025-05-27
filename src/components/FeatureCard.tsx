import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import { COMPONENT_PATTERNS } from '@/utils/constants';
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  LinkIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  CpuChipIcon,
  BoltIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ComputerDesktopIcon,
  UsersIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

interface FeatureCardProps extends HTMLMotionProps<'div'> {
  icon?: React.ReactNode;
  iconName?: keyof typeof HeroIcons;
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
  theme?: 'default' | 'it' | 'solar' | 'finance';
  variant?: 'default' | 'elevated' | 'minimal';
  className?: string;
}

const HeroIcons = {
  RocketLaunchIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  LinkIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  CpuChipIcon,
  BoltIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ComputerDesktopIcon,
  UsersIcon,
  CloudIcon
};

const defaultMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
};

const cardHover = {
  whileHover: { 
    y: -6, 
    scale: 1.02, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.2, ease: 'easeOut' } 
  },
  whileTap: { 
    scale: 0.98,
    transition: { duration: 0.1 } 
  },
};

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({
  icon,
  iconName,
  title,
  description,
  linkHref,
  linkLabel,
  theme = 'default',
  variant = 'default',
  className = '',
  ...motionProps
}) => {
  const Icon = iconName ? HeroIcons[iconName] : undefined;
  
  // Get theme-specific styles
  const getCardVariant = () => {
    if (variant === 'elevated') return COMPONENT_PATTERNS.cards.interactive.variants.elevated;
    if (variant === 'minimal') return COMPONENT_PATTERNS.cards.default.base;
    
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

  const getButtonVariant = () => {
    switch (theme) {
      case 'it':
        return COMPONENT_PATTERNS.buttons.primary.variants.it;
      case 'solar':
        return COMPONENT_PATTERNS.buttons.primary.variants.solar;
      case 'finance':
        return COMPONENT_PATTERNS.buttons.primary.variants.finance;
      default:
        return COMPONENT_PATTERNS.buttons.primary.variants.default;
    }
  };

  return (
    <motion.div
      className={`${COMPONENT_PATTERNS.cards.feature.base} ${getCardVariant()} ${className}`}
      variants={defaultMotion}
      {...cardHover}
      {...motionProps}
    >
      <div className={COMPONENT_PATTERNS.cards.feature.content}>
        {/* Icon */}
        {Icon ? (
          <Icon 
            className={`${COMPONENT_PATTERNS.icons.sizes['3xl']} ${COMPONENT_PATTERNS.cards.feature.icon} ${getIconColor()}`} 
            aria-hidden="true" 
          />
        ) : icon ? (
          <div className={`${COMPONENT_PATTERNS.cards.feature.icon} ${getIconColor()}`}>
            {icon}
          </div>
        ) : null}
        
        {/* Title */}
        <h3 className={`${COMPONENT_PATTERNS.cards.feature.title} ${COMPONENT_PATTERNS.typography.headings.h4}`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`${COMPONENT_PATTERNS.cards.feature.description} ${COMPONENT_PATTERNS.typography.body.default}`}>
          {description}
        </p>
        
        {/* Link Button */}
        {linkHref && linkLabel && (
          <div className={COMPONENT_PATTERNS.cards.feature.footer}>
            <Link 
              href={linkHref} 
              className={`${getButtonVariant()} inline-flex items-center gap-2 group`}
            >
              {linkLabel}
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;

export type { FeatureCardProps }; 