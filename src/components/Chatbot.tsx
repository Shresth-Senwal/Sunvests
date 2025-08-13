'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotApiResponse } from '@/types/chatbot'; // Import the API response type

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
  isTypingEffect?: boolean; 
  fullTextForTyping?: string; 
  category?: string; // Optional: to store category from API response
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotCurrentlyTypingIndicator, setIsBotCurrentlyTypingIndicator] = useState(false); 
  const [hasInitialized, setHasInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTimestamp = (): string => {
    return new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && !hasInitialized) {
      setHasInitialized(true);
      // Fetch initial greeting from backend to ensure consistency
      const fetchInitialGreeting = async () => {
        setIsBotCurrentlyTypingIndicator(true); // Show typing indicator for greeting
        try {
          const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "hello" }), // Send a "hello" to get standard greeting
          });
          if (!response.ok) {
            throw new Error('Failed to fetch initial greeting');
          }
          const data: ChatbotApiResponse = await response.json();
          
          setMessages([
            { 
              id: Date.now(), 
              text: "", 
              sender: 'bot',
              timestamp: formatTimestamp(),
              isTypingEffect: true, 
              fullTextForTyping: data.reply, 
              category: data.category,
            }
          ]);
        } catch (error) {
          console.error("Error fetching initial greeting:", error);
          setMessages([
            {
              id: Date.now(),
              text: "Hello! I'm having a little trouble starting up. Please try again in a moment.",
              sender: 'bot',
              timestamp: formatTimestamp(),
              isTypingEffect: false, // No typing effect for error message
            }
          ]);
        } finally {
          setIsBotCurrentlyTypingIndicator(false);
        }
      };
      fetchInitialGreeting();
    }
  }, [isOpen, hasInitialized]);

  // Typing effect for bot messages
  useEffect(() => {
    const messageToAnimate = messages.find(msg => msg.isTypingEffect && msg.sender === 'bot' && msg.fullTextForTyping && msg.text.length < msg.fullTextForTyping.length);
    
    if (messageToAnimate && messageToAnimate.fullTextForTyping) {
      const fullText = messageToAnimate.fullTextForTyping;
      let currentText = messageToAnimate.text;
      let charIndex = currentText.length;
      const typingSpeed = 15; 

      const intervalId = setInterval(() => {
        currentText += fullText[charIndex];
        setMessages(prevMessages => 
          prevMessages.map(msg => 
            msg.id === messageToAnimate.id ? { ...msg, text: currentText } : msg
          )
        );
        charIndex++;
        if (charIndex === fullText.length) {
          clearInterval(intervalId);
          setMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.id === messageToAnimate.id ? { ...msg, isTypingEffect: false } : msg 
            )
          );
        }
      }, typingSpeed);

      return () => clearInterval(intervalId); 
    }
  }, [messages]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isBotCurrentlyTypingIndicator || messages.some(m => m.isTypingEffect && m.sender === 'bot')) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: formatTimestamp(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue; 
    setInputValue('');
    setIsBotCurrentlyTypingIndicator(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });

      setIsBotCurrentlyTypingIndicator(false); 

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ reply: "Sorry, I encountered an error. Please try again."}));
        const botErrorMessage: Message = {
          id: Date.now() + 1,
          text: errorData.reply || "Sorry, I couldn't understand that. Please try again.",
          sender: 'bot',
          timestamp: formatTimestamp(),
          isTypingEffect: false, 
        };
        setMessages(prev => [...prev, botErrorMessage]);
        return;
      }

      const data: ChatbotApiResponse = await response.json();
      
      const botMessage: Message = {
        id: Date.now() + 1, 
        text: "", 
        sender: 'bot',
        timestamp: formatTimestamp(),
        isTypingEffect: true, 
        fullTextForTyping: data.reply, 
        category: data.category,
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Chatbot API call failed:', error);
      setIsBotCurrentlyTypingIndicator(false);
      const botErrorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting. Please check your internet connection and try again.",
        sender: 'bot',
        timestamp: formatTimestamp(),
        isTypingEffect: false,
      };
      setMessages(prev => [...prev, botErrorMessage]);
    }
  };
  
  const chatWindowVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] } }
  };
  
  const mainChatButtonVariants = { 
    hover: { scale: 1.08, transition: { type: "spring", stiffness: 300, damping: 10 } },
    tap: { scale: 0.92, transition: { type: "spring", stiffness: 400, damping: 15 } },
  };

  const sendButtonMotionProps = {
    whileHover: { scale: 1.08 }, 
    whileTap: { scale: 0.95 }    
  };
  
  const closeButtonMotionProps = {
    whileHover: { scale: 1.1 }, 
    whileTap: { scale: 0.9 }
  };

  const messageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[1000] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-window absolute bottom-[calc(100%+12px)] right-0 w-[calc(100vw-40px)] max-w-sm h-[65vh] max-h-[520px]"
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="chat-header">
              <div>
                <h3>SUNVEST Assistant</h3>
                <p>Online</p>
              </div>
              <motion.button 
                onClick={() => setIsOpen(false)} 
                aria-label="Close chat"
                className="text-white hover:text-gray-200 transition-colors p-1 rounded-lg hover:bg-white/10" 
                {...closeButtonMotionProps}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            <div className="flex-grow overflow-y-auto p-3 space-y-2.5">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="initial"
                  animate="animate"
                  className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`flex flex-col ${message.sender === 'user' ? 'chat-bubble-user items-end' : 'chat-bubble-bot items-start'}`}>
                    <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                      {message.text}
                    </div> 
                    <span className="text-xs mt-1"> 
                      {message.timestamp}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isBotCurrentlyTypingIndicator && ( 
                <motion.div 
                  variants={messageVariants}
                  initial="initial"
                  animate="animate"
                  className="flex justify-start"
                >
                  <div className="chat-bubble-bot"> 
                    <div className="flex space-x-1 items-center h-5">
                      <div className="w-1.5 h-1.5 bg-slate-700 opacity-70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-slate-700 opacity-70 rounded-full animate-bounce" style={{ animationDelay: '180ms' }} />
                      <div className="w-1.5 h-1.5 bg-slate-700 opacity-70 rounded-full animate-bounce" style={{ animationDelay: '360ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-2.5 bg-white border-t border-gray-200 rounded-b-xl">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="chat-input flex-1" 
                  aria-label="Chat message input"
                  disabled={isBotCurrentlyTypingIndicator || messages.some(m => m.isTypingEffect && m.sender === 'bot')} 
                />
                <motion.button
                  type="submit"
                  className="chat-send-button" 
                  aria-label="Send message"
                  disabled={!inputValue.trim() || isBotCurrentlyTypingIndicator || messages.some(m => m.isTypingEffect && m.sender === 'bot')}
                  {...sendButtonMotionProps} 
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> 
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 16.571V11a1 1 0 112 0v5.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-colors"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        variants={mainChatButtonVariants} 
        whileHover="hover"
        whileTap="tap"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg 
              key="close-icon-main-toggle" 
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg 
              key="chat-icon-main-toggle"
              className="w-6 h-6 sm:w-7 sm:h-7" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </motion.svg>
          )}
        </AnimatePresence> 
      </motion.button>
    </div>
  );
};

export default Chatbot;

