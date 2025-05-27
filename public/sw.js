const CACHE_NAME = 'sunvest-v1.0.0';
const STATIC_CACHE = 'sunvest-static-v1.0.0';
const DYNAMIC_CACHE = 'sunvest-dynamic-v1.0.0';
const IMAGE_CACHE = 'sunvest-images-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/_next/static/css/',
  '/_next/static/chunks/',
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first for static assets
  CACHE_FIRST: 'cache-first',
  // Network first for dynamic content
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate for frequently updated content
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets...');
        // Don't fail installation if some assets fail to cache
        return Promise.allSettled(
          STATIC_ASSETS.map(asset => 
            cache.add(asset).catch(err => 
              console.warn(`Failed to cache ${asset}:`, err)
            )
          )
        );
      })
      .then(() => {
        console.log('Static assets cached successfully');
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        const validCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
        
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!validCaches.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated');
        // Take control of all clients immediately
        return self.clients.claim();
      })
      .catch((error) => {
        console.error('Service Worker activation failed:', error);
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Skip API calls (let them go to network)
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

// Handle different types of requests with appropriate caching strategies
async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Static assets (JS, CSS, fonts) - Cache First
    if (isStaticAsset(url)) {
      return await cacheFirstStrategy(request, STATIC_CACHE);
    }
    
    // Images - Cache First with longer TTL
    if (isImage(url)) {
      return await cacheFirstStrategy(request, IMAGE_CACHE);
    }
    
    // HTML pages - Network First with fallback
    if (isHTMLPage(url)) {
      return await networkFirstStrategy(request, DYNAMIC_CACHE);
    }
    
    // External resources - Stale While Revalidate
    if (isExternalResource(url)) {
      return await staleWhileRevalidateStrategy(request, DYNAMIC_CACHE);
    }
    
    // Default: Network only
    return await fetch(request);
    
  } catch (error) {
    console.error('Request handling failed:', error);
    
    // Return offline fallback if available
    return await getOfflineFallback(request);
  }
}

// Cache First Strategy - Check cache first, fallback to network
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Network request failed:', error);
    throw error;
  }
}

// Network First Strategy - Try network first, fallback to cache
async function networkFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.warn('Network request failed, trying cache:', error);
    
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate Strategy - Return cached version immediately, update in background
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch fresh content in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(error => {
    console.warn('Background fetch failed:', error);
  });
  
  // Return cached version if available, otherwise wait for network
  if (cachedResponse) {
    return cachedResponse;
  }
  
  return await fetchPromise;
}

// Get offline fallback page
async function getOfflineFallback(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  // Try to return the homepage as fallback for navigation requests
  if (request.mode === 'navigate') {
    const fallback = await cache.match('/');
    if (fallback) {
      return fallback;
    }
  }
  
  // Return a simple offline response
  return new Response(
    '<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>Please check your internet connection.</p></body></html>',
    {
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'text/html' }
    }
  );
}

// Helper functions to identify resource types
function isStaticAsset(url) {
  return url.pathname.startsWith('/_next/static/') ||
         url.pathname.endsWith('.js') ||
         url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.woff') ||
         url.pathname.endsWith('.woff2') ||
         url.pathname.endsWith('.ttf');
}

function isImage(url) {
  return url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/i) ||
         url.hostname.includes('images.unsplash.com') ||
         url.pathname.startsWith('/images/');
}

function isHTMLPage(url) {
  return url.pathname === '/' ||
         url.pathname.includes('/services/') ||
         (!url.pathname.includes('.') && url.pathname.endsWith('/'));
}

function isExternalResource(url) {
  return url.hostname !== self.location.hostname;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued offline actions
  console.log('Background sync triggered');
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/favicon-192x192.png',
    badge: '/favicon-192x192.png',
    tag: 'sunvest-notification',
    renotify: true,
    requireInteraction: true,
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    self.clients.openWindow('/')
  );
});

// Cleanup old cache entries periodically
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    event.waitUntil(cleanupOldCacheEntries());
  }
});

async function cleanupOldCacheEntries() {
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
  const now = Date.now();
  
  const cacheNames = [DYNAMIC_CACHE, IMAGE_CACHE];
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const responseDate = new Date(dateHeader).getTime();
          if (now - responseDate > maxAge) {
            await cache.delete(request);
          }
        }
      }
    }
  }
}