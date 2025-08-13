import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'default' | 'large' | 'small';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  alignment = 'center',
  size = 'default',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const titleSizes = {
    small: 'text-2xl md:text-3xl',
    default: 'text-3xl md:text-4xl lg:text-5xl',
    large: 'text-4xl md:text-5xl lg:text-6xl',
  };

  const containerClasses = {
    left: 'max-w-none',
    center: 'max-w-4xl mx-auto',
    right: 'max-w-none ml-auto',
  };

  return (
    <motion.div
      className={`mb-16 md:mb-20 ${alignmentClasses[alignment]} ${containerClasses[alignment]} ${className}`}
      variants={fadeInUp}
    >
      {subtitle && (
        <motion.p 
          className="text-[var(--primary)] font-semibold text-sm md:text-base uppercase tracking-wider mb-4"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2 
        className={`${titleSizes[size]} font-bold text-[var(--text)] mb-6`}
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-lg md:text-xl text-[var(--text-light)] leading-relaxed max-w-3xl"
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader; 
