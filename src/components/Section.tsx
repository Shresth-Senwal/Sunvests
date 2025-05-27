import React from 'react';
import { motion } from 'framer-motion';
import { sectionFadeIn, staggerContainer } from '@/utils/animations';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  id?: string;
  containerSize?: 'default' | 'large' | 'small';
  spacing?: 'default' | 'large' | 'small';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id,
  containerSize = 'default',
  spacing = 'default',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-[var(--secondary)]',
    gradient: 'gradient-bg',
  };

  const containerClasses = {
    default: 'container-custom',
    large: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl',
    small: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl',
  };

  const spacingClasses = {
    default: 'section',
    large: 'py-20 md:py-32',
    small: 'py-12 md:py-16',
  };

  return (
    <motion.section
      id={id}
      className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionFadeIn}
    >
      <motion.div 
        className={containerClasses[containerSize]}
        variants={staggerContainer}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section; 