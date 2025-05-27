import { NextRequest, NextResponse } from 'next/server';
import { findBestMatch } from '../../../utils/chatbotRules';
import { ChatbotApiResponse } from '../../../types/chatbot';

// Enhanced input sanitization function
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Remove HTML tags and potentially dangerous characters
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>'"&]/g, '') // Remove potentially dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/data:text\/html/gi, '') // Remove data URLs
    .replace(/eval\s*\(/gi, '') // Remove eval calls
    .replace(/expression\s*\(/gi, '') // Remove CSS expressions
    .trim()
    .slice(0, 500); // Limit length to prevent abuse
}

// Enhanced rate limiting with IP-based tracking
const rateLimitMap = new Map<string, Array<number>>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 15; // Reduced for chatbot to prevent abuse
const BURST_LIMIT = 5; // Max requests in 10 seconds
const BURST_WINDOW = 10000; // 10 seconds

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW);
  
  // Check burst limit (recent requests in last 10 seconds)
  const recentRequests = validRequests.filter((time: number) => now - time < BURST_WINDOW);
  
  if (recentRequests.length >= BURST_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: Math.min(...recentRequests) + BURST_WINDOW
    };
  }
  
  if (validRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: Math.min(...validRequests) + RATE_LIMIT_WINDOW
    };
  }
  
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - validRequests.length,
    resetTime: now + RATE_LIMIT_WINDOW
  };
}

// Input validation function
function validateInput(input: string): { valid: boolean; error?: string } {
  // Check length
  if (input.length === 0) {
    return { valid: false, error: 'Message cannot be empty' };
  }
  
  if (input.length > 500) {
    return { valid: false, error: 'Message too long. Please keep it under 500 characters.' };
  }
  
  // Check for spam patterns
  const spamPatterns = [
    /(.)\1{10,}/g, // Repeated characters
    /http[s]?:\/\//gi, // URLs
    /\b(?:buy|sale|discount|offer|deal|click|visit|website)\b/gi, // Spam keywords
    /[0-9]{10,}/g, // Long numbers (phone numbers, etc.)
  ];
  
  for (const pattern of spamPatterns) {
    if (pattern.test(input)) {
      return { valid: false, error: 'Message contains prohibited content' };
    }
  }
  
  return { valid: true };
}

// Function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 
             request.headers.get('x-real-ip') || 
             'unknown';
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request);
    
    // Check rate limit
    const rateLimit = checkRateLimit(ip);
    
    if (!rateLimit.allowed) {
      const rateLimitResponse: ChatbotApiResponse = {
        reply: "I'm receiving too many requests. Please wait a moment before trying again.",
        category: "error"
      };
      return NextResponse.json(rateLimitResponse, { 
        status: 429,
        headers: {
          'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toString(),
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });
    }
    
    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      const parseErrorResponse: ChatbotApiResponse = {
        reply: "I couldn't understand your message format. Please try again.",
        category: "error"
      };
      return NextResponse.json(parseErrorResponse, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    
    const { message: userMessage } = body;
    
    // Validate input type
    if (typeof userMessage !== 'string') {
      const typeErrorResponse: ChatbotApiResponse = {
        reply: "Please send your message as text.",
        category: "error" 
      };
      return NextResponse.json(typeErrorResponse, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    
    // Validate input content
    const validation = validateInput(userMessage.trim());
    if (!validation.valid) {
      const validationErrorResponse: ChatbotApiResponse = {
        reply: validation.error || "Invalid message format.",
        category: "error"
      };
      return NextResponse.json(validationErrorResponse, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    
    // Sanitize input
    let sanitizedMessage;
    try {
      sanitizedMessage = sanitizeInput(userMessage);
    } catch {
      const sanitizeErrorResponse: ChatbotApiResponse = {
        reply: "I couldn't process your message. Please try rephrasing it.",
        category: "error"
      };
      return NextResponse.json(sanitizeErrorResponse, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    
    if (!sanitizedMessage) {
      const emptyErrorResponse: ChatbotApiResponse = {
        reply: "I didn't receive a valid message. Please try again with your question.",
        category: "error"
      };
      return NextResponse.json(emptyErrorResponse, { 
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }
    
    // Process the sanitized message
    const matchedRule = findBestMatch(sanitizedMessage);
    
    const successResponse: ChatbotApiResponse = {
      reply: matchedRule.response,
      category: matchedRule.category
    };

    return NextResponse.json(successResponse, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
        'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        'X-RateLimit-Reset': rateLimit.resetTime.toString(),
      },
    });
    
  } catch (error) {
    console.error('Chatbot API Error:', error);
    
    // Don't expose internal error details
    const criticalErrorResponse: ChatbotApiResponse = {
      reply: "I apologize, but I'm currently experiencing a technical difficulty. Please try again shortly or contact us directly for assistance.",
      category: "error"
    };
    return NextResponse.json(criticalErrorResponse, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }
}

// Handle unsupported methods with proper security headers
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { 
      status: 405,
      headers: {
        'Allow': 'POST',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      }
    }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { 
      status: 405,
      headers: {
        'Allow': 'POST',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      }
    }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { 
      status: 405,
      headers: {
        'Allow': 'POST',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      }
    }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { 
      status: 405,
      headers: {
        'Allow': 'POST',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      }
    }
  );
}
