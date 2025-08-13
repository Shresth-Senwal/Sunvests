import React from 'react';

/**
 * SectionDivider - visually separates sections with a subtle SVG wave.
 * Accessible, responsive, and theme-aware.
 */
const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div aria-hidden="true" className={`w-full overflow-hidden ${className}`}>
    <svg
      className="w-full h-12 md:h-16 text-[var(--secondary)] dark:text-[var(--secondary-dark)]"
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      focusable="false"
    >
      <path
        d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
        fill="currentColor"
        opacity="0.12"
      />
    </svg>
  </div>
);

export default SectionDivider; 
