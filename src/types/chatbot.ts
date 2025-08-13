export interface ChatbotRule {
  patterns: string[]; // Keywords or phrases to match
  response: string;   // The chatbot's answer
  category: 'general' | 'services' | 'support' | 'pricing' | 'company' | 'technical' | 'greeting' | 'farewell'; // To categorize rules
}

export interface ChatbotApiResponse {
  reply: string;         // The message content from the bot
  category?: string;     // The category of the response, if available
  // We might add more fields later, e.g., for suggesting follow-up questions
}

