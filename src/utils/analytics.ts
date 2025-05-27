// Analytics and tracking utilities for business insights

export interface AnalyticsEvent {
  name: string;
  category: 'page_view' | 'user_interaction' | 'conversion' | 'performance' | 'error';
  action: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, string | number | boolean>;
}

export interface ConversionEvent {
  type: 'contact_form' | 'phone_call' | 'email_click' | 'service_inquiry' | 'chatbot_interaction';
  service_category?: 'it' | 'solar' | 'finance';
  page_url: string;
  timestamp: string;
}

// Global gtag declaration
declare global {
  function gtag(command: string, ...args: unknown[]): void;
}

class AnalyticsManager {
  private isInitialized = false;
  private events: AnalyticsEvent[] = [];
  
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeAnalytics();
    }
  }

  private initializeAnalytics() {
    try {
      // Initialize performance monitoring
      this.trackWebVitals();
      
      // Track page views automatically
      this.trackPageView();
      
      // Set up error tracking
      this.setupErrorTracking();
      
      this.isInitialized = true;
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    try {
      // Store event locally for debugging
      this.events.push({
        ...event,
        timestamp: new Date().toISOString(),
      } as AnalyticsEvent & { timestamp: string });

      // Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          custom_map: event.custom_parameters,
        });
      }

      // Send to custom analytics endpoint (if needed)
      this.sendToCustomAnalytics(event);
    } catch (error) {
      console.warn('Failed to track event:', error);
    }
  }

  // Track conversions (high-value events)
  trackConversion(conversion: ConversionEvent) {
    this.trackEvent({
      name: 'conversion',
      category: 'conversion',
      action: conversion.type,
      label: conversion.service_category,
      custom_parameters: {
        page_url: conversion.page_url,
        timestamp: conversion.timestamp,
      },
    });

    // Track specific conversion types
    switch (conversion.type) {
      case 'contact_form':
        this.trackEvent({
          name: 'contact_form_submission',
          category: 'user_interaction',
          action: 'form_submit',
          label: 'contact_form',
        });
        break;
      case 'phone_call':
        this.trackEvent({
          name: 'phone_call_initiated',
          category: 'user_interaction',
          action: 'click',
          label: 'phone_number',
        });
        break;
      case 'email_click':
        this.trackEvent({
          name: 'email_click',
          category: 'user_interaction',
          action: 'click',
          label: 'email_address',
        });
        break;
    }
  }

  // Track page views
  trackPageView(page_path?: string) {
    if (typeof window === 'undefined') return;

    const path = page_path || window.location.pathname;
    
    this.trackEvent({
      name: 'page_view',
      category: 'page_view',
      action: 'view',
      label: path,
      custom_parameters: {
        page_title: document.title,
        page_location: window.location.href,
        referrer: document.referrer,
      },
    });
  }

  // Track service-specific interactions
  trackServiceInteraction(service: 'it' | 'solar' | 'finance', action: string, label?: string) {
    this.trackEvent({
      name: `${service}_service_interaction`,
      category: 'user_interaction',
      action: action,
      label: label,
      custom_parameters: {
        service_category: service,
      },
    });
  }

  // Track chatbot interactions
  trackChatbotInteraction(action: 'message_sent' | 'conversation_started' | 'conversation_ended', category?: string) {
    this.trackEvent({
      name: 'chatbot_interaction',
      category: 'user_interaction',
      action: action,
      label: category,
      custom_parameters: {
        chatbot_session: this.generateSessionId(),
      },
    });
  }

  // Track Web Vitals for performance monitoring
  private trackWebVitals() {
    if (typeof window === 'undefined') return;

    try {
      // Core Web Vitals observer
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.trackEvent({
              name: 'web_vitals',
              category: 'performance',
              action: 'lcp',
              value: Math.round(entry.startTime),
            });
          }
        }
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      // Track page load time
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            this.trackEvent({
              name: 'page_load_time',
              category: 'performance',
              action: 'load',
              value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            });
          }
        }, 0);
      });
    } catch (error) {
      console.warn('Web Vitals tracking failed:', error);
    }
  }

  // Set up error tracking
  private setupErrorTracking() {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
      this.trackEvent({
        name: 'javascript_error',
        category: 'error',
        action: 'js_error',
        label: event.error?.message || 'Unknown error',
        custom_parameters: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent({
        name: 'promise_rejection',
        category: 'error',
        action: 'unhandled_promise',
        label: event.reason?.message || 'Promise rejection',
      });
    });
  }

  // Send to custom analytics endpoint
  private async sendToCustomAnalytics(event: AnalyticsEvent) {
    try {
      // Only send in production
      if (process.env.NODE_ENV !== 'production') return;

      // Send to your analytics API (example)
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          session_id: this.generateSessionId(),
        }),
      });
    } catch (error) {
      // Silently fail to avoid affecting user experience
      console.debug('Custom analytics failed:', error);
    }
  }

  // Generate session ID for tracking
  private generateSessionId(): string {
    if (typeof window === 'undefined') return 'server';
    
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  // Get analytics data for debugging
  getAnalyticsData() {
    return {
      events: this.events,
      sessionId: this.generateSessionId(),
      isInitialized: this.isInitialized,
    };
  }
}

// Singleton instance
const analytics = new AnalyticsManager();

// Convenience functions for easy use across the app
export const trackEvent = (event: AnalyticsEvent) => analytics.trackEvent(event);
export const trackConversion = (conversion: ConversionEvent) => analytics.trackConversion(conversion);
export const trackPageView = (path?: string) => analytics.trackPageView(path);
export const trackServiceInteraction = (service: 'it' | 'solar' | 'finance', action: string, label?: string) => 
  analytics.trackServiceInteraction(service, action, label);
export const trackChatbotInteraction = (action: 'message_sent' | 'conversation_started' | 'conversation_ended', category?: string) => 
  analytics.trackChatbotInteraction(action, category);

// React hook for analytics in components
export const useAnalytics = () => {
  return {
    trackEvent,
    trackConversion,
    trackPageView,
    trackServiceInteraction,
    trackChatbotInteraction,
    getAnalyticsData: () => analytics.getAnalyticsData(),
  };
};

export default analytics; 