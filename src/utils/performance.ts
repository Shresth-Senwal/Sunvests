// Performance monitoring utilities for Core Web Vitals

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

// Extend PerformanceEntry for layout shift
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Extend PerformanceEntry for first input delay
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

// Global gtag declaration
declare global {
  function gtag(command: string, ...args: unknown[]): void;
}

// Track Core Web Vitals
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // Track LCP (Largest Contentful Paint)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (lastEntry) {
      console.log('LCP:', lastEntry.startTime);
      // You can send this to analytics
      sendToAnalytics('lcp', lastEntry.startTime);
    }
  });

  try {
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {
    // LCP not supported
    console.warn('LCP monitoring not supported');
  }

  // Track FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fidEntry = entry as FirstInputEntry;
      const fidValue = fidEntry.processingStart - fidEntry.startTime;
      console.log('FID:', fidValue);
      sendToAnalytics('fid', fidValue);
    }
  });

  try {
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch {
    // FID not supported
    console.warn('FID monitoring not supported');
  }

  // Track CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const layoutEntry = entry as LayoutShiftEntry;
      if (!layoutEntry.hadRecentInput) {
        clsValue += layoutEntry.value;
      }
    }
    console.log('CLS:', clsValue);
    sendToAnalytics('cls', clsValue);
  });

  try {
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch {
    // CLS not supported
    console.warn('CLS monitoring not supported');
  }
}

// Send metrics to analytics (replace with your analytics service)
function sendToAnalytics(metric: string, value: number) {
  // Example: Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'web_vitals', {
      metric_name: metric,
      metric_value: Math.round(value),
      custom_parameter: value,
    });
  }
  
  // Or send to your own analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify({ metric, value }),
  //   headers: { 'Content-Type': 'application/json' }
  // });
}

// Optimize images for better performance
export function optimizeImage(src: string, width?: number, quality: number = 85): string {
  if (!src.includes('unsplash.com')) return src;
  
  const url = new URL(src);
  url.searchParams.set('q', quality.toString());
  if (width) {
    url.searchParams.set('w', width.toString());
  }
  url.searchParams.set('auto', 'format');
  url.searchParams.set('fit', 'crop');
  
  return url.toString();
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.href = '/fonts/inter-var.woff2';
  fontPreload.as = 'font';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreload);

  // Preload critical images (hero image)
  const imagePreload = document.createElement('link');
  imagePreload.rel = 'preload';
  imagePreload.href = optimizeImage('https://images.unsplash.com/photo-1497366216548-37526070297c', 1920, 85);
  imagePreload.as = 'image';
  document.head.appendChild(imagePreload);
}

// Defer non-critical scripts
export function deferNonCriticalScripts() {
  if (typeof window === 'undefined') return;

  // Defer analytics and tracking scripts
  setTimeout(() => {
    // Load Google Analytics or other tracking scripts here
    // This delays non-critical scripts to improve initial page load
  }, 2000);
}

// Memory cleanup for better performance
export function cleanupMemory() {
  if (typeof window === 'undefined') return;

  // Clean up event listeners on page unload
  window.addEventListener('beforeunload', () => {
    // Remove any global event listeners
    // Clear any intervals or timeouts
    // Clean up memory-intensive operations
  });
}

// Intersection Observer for lazy loading
export function createLazyLoadObserver(callback: (entries: IntersectionObserverEntry[]) => void) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px', // Start loading 50px before element enters viewport
    threshold: 0.1,
  });
}

// Optimize animations for better performance
export function optimizeAnimations() {
  if (typeof window === 'undefined') return;

  // Respect user's preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable or reduce animations
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
  }
} 
