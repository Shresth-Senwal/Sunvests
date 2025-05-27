// Standardized Animation System for Consistent Motion Design
// Using consistent easing curve and duration patterns

// Standard easing curves
const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94]; // Smooth, natural feeling
const EASE_BOUNCY = [0.68, -0.55, 0.265, 1.55]; // Slight bounce
const EASE_CRISP = [0.4, 0, 0.2, 1]; // Quick, crisp motion

// Standard durations
const DURATION_FAST = 0.2;
const DURATION_NORMAL = 0.3;
const DURATION_SLOW = 0.6;
const DURATION_EXTRA_SLOW = 0.8;

// ====================================================
// BASIC ENTRANCE ANIMATIONS
// ====================================================

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_SMOOTH
    } 
  },
};

export const fadeInUpDelayed = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_SMOOTH, 
      delay: 0.3 
    } 
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_SMOOTH 
    } 
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_SMOOTH 
    } 
  },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: EASE_SMOOTH 
    } 
  },
};

// ====================================================
// STAGGER ANIMATIONS
// ====================================================

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow = {
  animate: { 
    transition: { 
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// ====================================================
// HERO SECTION ANIMATIONS
// ====================================================

export const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: DURATION_EXTRA_SLOW, 
      ease: EASE_SMOOTH 
    } 
  },
};

export const heroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const heroTitleVariants = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1, 
      ease: EASE_SMOOTH 
    } 
  },
};

// ====================================================
// STANDARDIZED CARD ANIMATIONS
// ====================================================

export const cardHover = {
  whileHover: { 
    y: -8, 
    scale: 1.02, 
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: { 
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.98,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

export const cardHoverSubtle = {
  whileHover: { 
    y: -4, 
    scale: 1.01, 
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { 
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.99,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

export const cardHoverElevated = {
  whileHover: { 
    y: -12, 
    scale: 1.03, 
    boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
    transition: { 
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.97,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

// Contact card specific hover animation - isolated transform for content only
export const contactCardHover = {
  whileHover: { 
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
};

// Contact card content hover animation - only affects the inner content
export const contactCardContentHover = {
  whileHover: { 
    y: -4,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.98,
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
};

// ====================================================
// STANDARDIZED BUTTON ANIMATIONS
// ====================================================

export const buttonHover = {
  whileHover: { 
    scale: 1.02, 
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.98,
    y: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

export const buttonHoverPrimary = {
  whileHover: { 
    scale: 1.02, 
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.98,
    y: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

export const buttonHoverSubtle = {
  whileHover: { 
    scale: 1.01, 
    y: -1,
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.99,
    y: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

// Service-specific button animations
export const buttonHoverIT = {
  whileHover: { 
    scale: 1.02, 
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { scale: 0.98, y: 0 },
};

export const buttonHoverSolar = {
  whileHover: { 
    scale: 1.02, 
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { scale: 0.98, y: 0 },
};

export const buttonHoverFinance = {
  whileHover: { 
    scale: 1.02, 
    y: -2,
    boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { scale: 0.98, y: 0 },
};

// ====================================================
// IMAGE AND MEDIA ANIMATIONS
// ====================================================

export const imageHover = {
  whileHover: { 
    scale: 1.05, 
    transition: { 
      duration: 0.4,
      ease: EASE_SMOOTH
    } 
  },
};

export const imageHoverSubtle = {
  whileHover: { 
    scale: 1.02, 
    transition: { 
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    } 
  },
};

export const imageParallax = {
  initial: { scale: 1.1 },
  animate: { 
    scale: 1, 
    transition: { 
      duration: 1.2,
      ease: EASE_SMOOTH
    } 
  },
};

// ====================================================
// NAVIGATION ANIMATIONS
// ====================================================

export const navItemHover = {
  whileHover: { 
    scale: 1.02,
    y: -1,
    transition: { 
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { 
    scale: 0.98,
    y: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  },
};

export const dropdownVariants = {
  hidden: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH,
      staggerChildren: 0.05
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    scale: 0.95,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  }
};

export const dropdownItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    }
  }
};

// ====================================================
// SCROLL AND INDICATOR ANIMATIONS
// ====================================================

export const scrollIndicator = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 2.5, 
      duration: 1,
      ease: EASE_SMOOTH
    }
  },
};

export const scrollReveal = {
  initial: { opacity: 0, y: 100 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: DURATION_EXTRA_SLOW,
      ease: EASE_SMOOTH
    }
  },
};

// ====================================================
// SECTION AND PAGE ANIMATIONS
// ====================================================

export const sectionFadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: DURATION_EXTRA_SLOW, 
      ease: 'easeOut' 
    } 
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: DURATION_SLOW,
      ease: EASE_SMOOTH
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.4,
      ease: EASE_SMOOTH
    }
  },
};

// ====================================================
// REVEAL ANIMATIONS
// ====================================================

export const revealUp = {
  initial: { opacity: 0, y: 100 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: DURATION_EXTRA_SLOW,
      ease: EASE_SMOOTH
    }
  },
};

export const revealScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: DURATION_SLOW,
      ease: EASE_SMOOTH
    }
  },
};

export const revealLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: DURATION_EXTRA_SLOW,
      ease: EASE_SMOOTH
    }
  },
};

export const revealRight = {
  initial: { opacity: 0, x: 100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: DURATION_EXTRA_SLOW,
      ease: EASE_SMOOTH
    }
  },
};

// ====================================================
// LOADING AND STATE ANIMATIONS
// ====================================================

export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ====================================================
// SPECIALIZED ANIMATIONS
// ====================================================

export const scaleOnHover = {
  whileHover: { 
    scale: 1.05, 
    transition: { 
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    } 
  },
  whileTap: { scale: 0.95 },
};

export const slideInFromLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: EASE_SMOOTH 
    } 
  },
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 80 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: EASE_SMOOTH 
    }
  },
};

// ====================================================
// FORM ANIMATIONS
// ====================================================

export const formFieldFocus = {
  whileFocus: {
    scale: 1.02,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  }
};

export const formErrorShake = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: EASE_SMOOTH
    }
  }
};

// ====================================================
// MODAL AND OVERLAY ANIMATIONS
// ====================================================

export const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 100
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 100,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  }
};

export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  }
};

// ====================================================
// UTILITY ANIMATION COMBINATIONS
// ====================================================

// Combines multiple animations for complex effects
export const complexCardAnimation = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: DURATION_SLOW,
      ease: EASE_SMOOTH
    }
  },
  whileHover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_SMOOTH
    }
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: DURATION_FAST,
      ease: EASE_SMOOTH
    }
  }
};

// For elements that need attention
export const attentionAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: EASE_SMOOTH
    }
  }
};

// Export configuration for easy customization
export const animationConfig = {
  durations: {
    fast: DURATION_FAST,
    normal: DURATION_NORMAL,
    slow: DURATION_SLOW,
    extraSlow: DURATION_EXTRA_SLOW
  },
  easings: {
    smooth: EASE_SMOOTH,
    bouncy: EASE_BOUNCY,
    crisp: EASE_CRISP
  }
}; 