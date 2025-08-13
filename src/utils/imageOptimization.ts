// Image optimization utilities for better performance and user experience

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  responsive?: boolean;
  lazy?: boolean;
  blur?: boolean;
  formats?: ('webp' | 'avif' | 'jpeg' | 'png')[];
}

export interface ResponsiveImageSizes {
  mobile: string;
  tablet: string;
  desktop: string;
  default: string;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
}

// Standard responsive image sizes for the website
export const RESPONSIVE_SIZES: ResponsiveImageSizes = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 50vw',
  desktop: '(max-width: 1200px) 33vw',
  default: '25vw',
};

// Standard image sizes for different use cases
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  card: { width: 400, height: 300 },
  hero: { width: 1920, height: 1080 },
  banner: { width: 1200, height: 400 },
  profile: { width: 300, height: 300 },
  gallery: { width: 800, height: 600 },
  full: { width: 2000, height: 1200 },
} as const;

// Image quality settings for different use cases
export const QUALITY_SETTINGS = {
  thumbnail: 75,
  card: 80,
  hero: 90,
  banner: 85,
  profile: 85,
  gallery: 85,
  full: 95,
} as const;

// Unsplash optimization utilities
export class UnsplashOptimizer {
  static optimize(url: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    crop?: 'faces' | 'center' | 'edges';
    format?: 'auto' | 'webp' | 'jpg';
  } = {}): string {
    if (!url.includes('unsplash.com')) {
      return url;
    }

    const urlObj = new URL(url);
    
    // Set width and height
    if (options.width) {
      urlObj.searchParams.set('w', options.width.toString());
    }
    if (options.height) {
      urlObj.searchParams.set('h', options.height.toString());
    }
    
    // Set quality (Unsplash uses q parameter)
    if (options.quality) {
      urlObj.searchParams.set('q', options.quality.toString());
    }
    
    // Set format optimization
    urlObj.searchParams.set('auto', 'format');
    if (options.format) {
      urlObj.searchParams.set('fm', options.format);
    }
    
    // Set crop mode
    if (options.crop) {
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('crop', options.crop);
    }
    
    // Additional optimizations
    urlObj.searchParams.set('ixlib', 'rb-4.0.3');
    
    return urlObj.toString();
  }

  static generateResponsiveSizes(baseUrl: string, sizes: { width: number; height?: number }[]): string {
    return sizes
      .map(({ width, height }) => {
        const optimizedUrl = this.optimize(baseUrl, { width, height, quality: 80 });
        return `${optimizedUrl} ${width}w`;
      })
      .join(', ');
  }
}

// Generate blur placeholder for images
export function generateBlurDataURL(width: number = 8, height: number = 8): string {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    // Fallback blur data URL for server-side rendering
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';
  }

  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a simple gradient blur placeholder
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(0.5, '#e5e7eb');
    gradient.addColorStop(1, '#d1d5db');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

// Image loading optimization
export class ImageLoader {
  private static loadedImages = new Set<string>();
  private static loadingImages = new Map<string, Promise<void>>();

  static async preloadImage(src: string): Promise<void> {
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    if (this.loadingImages.has(src)) {
      return this.loadingImages.get(src)!;
    }

    const loadPromise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.loadedImages.add(src);
        this.loadingImages.delete(src);
        resolve();
      };
      img.onerror = () => {
        this.loadingImages.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });

    this.loadingImages.set(src, loadPromise);
    return loadPromise;
  }

  static preloadCriticalImages(images: string[]): Promise<void[]> {
    return Promise.allSettled(
      images.map(src => this.preloadImage(src))
    ).then(() => []);
  }
}

// Lazy loading utilities
export class LazyLoadingManager {
  private static observer: IntersectionObserver | null = null;
  private static imageQueue = new Set<HTMLImageElement>();

  static init() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadImage(img);
            this.observer?.unobserve(img);
            this.imageQueue.delete(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1,
      }
    );
  }

  static observe(img: HTMLImageElement) {
    if (!this.observer) {
      this.init();
    }

    if (this.observer) {
      this.imageQueue.add(img);
      this.observer.observe(img);
    }
  }

  private static loadImage(img: HTMLImageElement) {
    const dataSrc = img.getAttribute('data-src');
    if (dataSrc) {
      img.src = dataSrc;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    }
  }

  static cleanup() {
    if (this.observer) {
      this.imageQueue.forEach(img => this.observer?.unobserve(img));
      this.imageQueue.clear();
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// Generate optimized image props for Next.js Image component
export function getOptimizedImageProps(config: ImageConfig): OptimizedImageProps {
  const {
    src,
    alt,
    width = 800,
    height = 600,
    quality = 85,
    priority = false,
    responsive = true,
    lazy = !priority,
    blur = true,
  } = config;

  // Optimize Unsplash URLs
  const optimizedSrc = UnsplashOptimizer.optimize(src, {
    width,
    height,
    quality,
    format: 'auto',
  });

  // Generate responsive sizes
  const sizes = responsive
    ? `${RESPONSIVE_SIZES.mobile}, ${RESPONSIVE_SIZES.tablet}, ${RESPONSIVE_SIZES.desktop}, ${RESPONSIVE_SIZES.default}`
    : undefined;

  // Generate blur placeholder
  const blurDataURL = blur ? generateBlurDataURL() : undefined;

  return {
    src: optimizedSrc,
    alt,
    width,
    height,
    sizes,
    quality,
    priority,
    placeholder: blur ? 'blur' : 'empty',
    blurDataURL,
    loading: lazy ? 'lazy' : 'eager',
  };
}

// Utility to generate srcSet for responsive images
export function generateSrcSet(baseUrl: string, sizes: number[]): string {
  return sizes
    .map(size => {
      const optimizedUrl = UnsplashOptimizer.optimize(baseUrl, {
        width: size,
        quality: 80,
      });
      return `${optimizedUrl} ${size}w`;
    })
    .join(', ');
}

// Common responsive breakpoints
export const RESPONSIVE_BREAKPOINTS = [320, 640, 768, 1024, 1280, 1536];

// Image format support detection
export class FormatSupport {
  private static cache = new Map<string, boolean>();

  static async supportsWebP(): Promise<boolean> {
    if (this.cache.has('webp')) {
      return this.cache.get('webp')!;
    }

    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        const supported = webP.height === 2;
        this.cache.set('webp', supported);
        resolve(supported);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  static async supportsAVIF(): Promise<boolean> {
    if (this.cache.has('avif')) {
      return this.cache.get('avif')!;
    }

    return new Promise((resolve) => {
      const avif = new Image();
      avif.onload = avif.onerror = () => {
        const supported = avif.height === 2;
        this.cache.set('avif', supported);
        resolve(supported);
      };
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  }
}

// Initialize lazy loading on module load
if (typeof window !== 'undefined') {
  LazyLoadingManager.init();
}

const imageOptimization = {
  UnsplashOptimizer,
  ImageLoader,
  LazyLoadingManager,
  FormatSupport,
  getOptimizedImageProps,
  generateSrcSet,
  generateBlurDataURL,
  RESPONSIVE_SIZES,
  IMAGE_SIZES,
  QUALITY_SETTINGS,
  RESPONSIVE_BREAKPOINTS,
};

export default imageOptimization; 
