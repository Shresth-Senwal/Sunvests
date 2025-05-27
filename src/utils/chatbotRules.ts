import { ChatbotRule } from '../types/chatbot';

export const chatbotRules: ChatbotRule[] = [
    // Greetings & Basic Interaction
    {
        patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'yo', 'sup'],
        response: "Hello! I'm the SUNVEST CONSULTANCY LLP virtual assistant. How can I help you explore our business solutions across IT Services, Solar Power, and Investment & Financial Services today?",
        category: 'greeting'
    },
    {
        patterns: ['how are you', "how's it going", 'how are you doing'],
        response: "I'm functioning optimally, thank you for asking! I'm ready to assist with your questions about SUNVEST CONSULTANCY LLP and our comprehensive business solutions.",
        category: 'general'
    },
    {
        patterns: ['bye', 'goodbye', 'see you', 'later', 'cya', 'farewell'],
        response: "Goodbye! Feel free to reach out if you have more questions about our services. Have a great day!",
        category: 'farewell'
    },
    {
        patterns: ['thanks', 'thank you', 'appreciate it', 'thx'],
        response: "You're very welcome! Is there anything else I can help you with regarding our IT, Solar, or Financial services?",
        category: 'general'
    },
    {
        patterns: ['what is your name', 'who are you', 'your name'],
        response: "I am SUNVEST CONSULTANCY LLP's intelligent virtual assistant, designed to help you with inquiries about our three business verticals.",
        category: 'general'
    },

    // Company Information
    {
        patterns: ['about sunvest', 'company information', 'who is sunvest', 'what does sunvest do', 'tell me about your company', 'sunvest consultancy'],
        response: "SUNVEST CONSULTANCY LLP is a leading conglomerate operating across three key business verticals under the visionary leadership of Chairman Mr. Chandrakant Mishra:\n\n• **IT Services:** Product Engineering, AI/ML, Data Engineering, Cloud & DevOps\n• **Solar Power Solutions:** Domestic and industrial solar installations\n• **Investment & Financial Services:** Comprehensive financial planning and investment advisory\n\nOur philosophy: 'We envision. We strategize. We support.'",
        category: 'company'
    },
    {
        patterns: ['chairman', 'leadership', 'chandrakant mishra', 'who leads', 'management'],
        response: "SUNVEST CONSULTANCY LLP is led by Chairman Mr. Chandrakant Mishra, whose visionary leadership has established us as a leading conglomerate. His strategic vision and commitment to innovation drive our mission to transform industries through technology, sustainable energy, and financial expertise.",
        category: 'company'
    },
    {
        patterns: ['contact', 'contact information', 'phone number', 'email address', 'how to reach you', 'talk to someone', 'human'],
        response: "You can reach SUNVEST CONSULTANCY LLP through:\n\n• **Email:** info@sunvests.com\n• **Phone:** +91 94120 79608\n• **Address:** H. No. 89, Vasant Vihar, Phase II, Dehradun - 248001, Uttarakhand, India\n• **LinkedIn:** Connect with us on LinkedIn\n• **Website:** sunvests.com\n\nOur team is ready to assist you!",
        category: 'company'
    },
    {
        patterns: ['location', 'address', 'where are you located', 'office address', 'dehradun'],
        response: "SUNVEST CONSULTANCY LLP is located at:\n\nH. No. 89, Vasant Vihar, Phase II, Dehradun G.P.O., Vasant Vihar, Dehradun, Dehradun- 248001, Uttarakhand, India\n\nWe're strategically positioned in Dehradun to serve clients across India and beyond.",
        category: 'company'
    },
    
    // Services Overview
    {
        patterns: ['services', 'what do you offer', 'solutions offered', 'your solutions', 'what services', 'business verticals'],
        response: "SUNVEST CONSULTANCY LLP operates across three key business verticals:\n\n**1. IT Services:**\n• Product Engineering (Software Engineering, Strategy Consulting, Quality Engineering)\n• Artificial Intelligence (Generative AI, ML, Intelligent Products)\n• Data Engineering (Engineering & Architecture, Management & Governance)\n• Cloud and DevOps (Cloud Optimization, DevOps & CI/CD, Cloud Migration)\n\n**2. Solar Power Solutions:**\n• Solar Panel Installation\n• Maintenance and Repair\n• Consultation and Design\n• System Performance optimization\n\n**3. Investment & Financial Services:**\n• Mutual Funds, Bonds, Corporate FDs\n• Alternative Investment Funds, Portfolio Management\n• ULIPs, Insurance, Tax Planning\n• Real Estate/Mortgage, Estate Planning\n\nWhich area interests you most?",
        category: 'services'
    },

    // IT Services Details
    {
        patterns: ['it services', 'software development', 'product engineering', 'artificial intelligence', 'ai', 'machine learning', 'data engineering', 'cloud', 'devops'],
        response: "Our IT Services division provides comprehensive technology solutions:\n\n**Product Engineering:**\n• Software Engineering & Development\n• Strategy Consulting\n• Quality Engineering\n\n**Artificial Intelligence:**\n• Generative AI solutions\n• Machine Learning models\n• Intelligent Products\n\n**Data Engineering:**\n• Data Architecture & Engineering\n• Data Management & Governance\n\n**Cloud and DevOps:**\n• Cloud Optimization\n• DevOps & CI/CD\n• Cloud Migration services\n\nWe leverage domain knowledge and enterprise solutions to redefine business possibilities.",
        category: 'services'
    },
    {
        patterns: ['software engineering', 'custom software', 'web development', 'mobile development'],
        response: "Our Software Engineering services include:\n\n• Custom web and mobile applications\n• Enterprise resource planning (ERP) systems\n• API development and integration\n• Legacy system modernization\n• Full-stack development using modern technologies\n\nWe use cutting-edge technologies like React, Node.js, Python, AWS, and more to build robust, scalable solutions.",
        category: 'services'
    },

    // Solar Power Solutions Details
    {
        patterns: ['solar', 'solar power', 'solar energy', 'solar installation', 'renewable energy', 'solar panels', 'solar plant'],
        response: "Our Solar Power Solutions offer:\n\n**Mission:** Transform energy harnessing as a catalyst for sustainable solutions\n**Vision:** Exceed expectations, reduce carbon footprints, promote a cleaner future\n\n**Services:**\n• Solar Panel Installation (expert design & precision)\n• Maintenance and Repair (peak performance)\n• Consultation and Design (optimal energy output)\n• System Performance (guaranteed quality)\n• Customer Growth (scalable solutions)\n• Financial Returns (cost-effective installations)\n\nWe focus on lowering energy expenses and minimizing carbon footprints.",
        category: 'services'
    },
    {
        patterns: ['solar installation', 'solar panels installation', 'solar setup'],
        response: "Our Solar Panel Installation service includes:\n\n• Site assessment and energy analysis\n• Custom system design and engineering\n• Professional installation by technicians\n• System testing and commissioning\n• Grid connection and performance verification\n\nWe handle everything from initial assessment to final system commissioning for both domestic and commercial projects.",
        category: 'services'
    },

    // Investment & Financial Services Details
    {
        patterns: ['investment', 'financial services', 'financial planning', 'investment advisory', 'portfolio management', 'wealth management', 'mutual funds'],
        response: "Our Investment & Financial Services philosophy: 'We envision. We strategize. We support.'\n\n**Complete Financial Solutions:**\n• Mutual Funds (equity, debt, hybrid)\n• Bonds & Corporate FDs\n• Alternative Investment Funds\n• Portfolio Management Service\n• Market Linked Debentures\n• ULIPs & Insurance\n• Tax Planning\n• Real Estate/Mortgage\n• Estate Planning\n\nWe believe financial freedom is achievable with the right plan and vision. We're your 'One Stop for multiple financial products & services.'",
        category: 'services'
    },
    {
        patterns: ['mutual funds', 'equity funds', 'debt funds', 'sip'],
        response: "Our Mutual Fund services include:\n\n**Fund Categories:**\n• Equity Funds (Large Cap, Mid Cap, Small Cap, Multi Cap)\n• Debt Funds (Liquid, Short/Medium/Long Term)\n• Hybrid Funds (Conservative, Balanced, Aggressive)\n• ELSS Funds (Tax saving with 3-year lock-in)\n• Index Funds (Low cost, market returns)\n• International Funds (Global diversification)\n\n**Investment Options:**\n• SIP (Systematic Investment Plan)\n• Lump sum investments\n• Goal-based planning\n• Regular portfolio review and rebalancing",
        category: 'services'
    },
    {
        patterns: ['insurance', 'life insurance', 'health insurance', 'ulips'],
        response: "Our Insurance solutions provide comprehensive protection:\n\n• Life Insurance (term, whole life, endowment)\n• Health Insurance (individual, family, critical illness)\n• ULIPs (Unit Linked Insurance Plans combining investment + insurance)\n• General Insurance (motor, home, travel)\n• Group Insurance for businesses\n\nWe help you choose the right insurance products for complete financial protection.",
        category: 'services'
    },

    // Pricing
    {
        patterns: ['pricing', 'cost', 'how much', 'quote', 'estimate', 'rates', 'packages', 'plans'],
        response: "Our pricing is customized based on specific requirements and scope:\n\n• **IT Services:** Varies by project complexity and technology requirements\n• **Solar Power:** Depends on system size, location, and installation type\n• **Financial Services:** Transparent fee structures based on services and portfolio size\n\nFor detailed quotes, please contact us at info@sunvests.com or +91 94120 79608. We provide comprehensive assessments and transparent pricing.",
        category: 'pricing'
    },

    // Support & Technical
    {
        patterns: ['support', 'help', 'technical issue', 'problem', 'error', 'not working', 'broken', 'assistance'],
        response: "I'm here to help! For technical support or detailed assistance:\n\n• **Email:** info@sunvests.com\n• **Phone:** +91 94120 79608\n• **Contact Form:** Available on our website\n\nPlease describe your specific issue, and our dedicated support team will assist you promptly. We provide ongoing support for all our IT, Solar, and Financial services.",
        category: 'support'
    },

    // Mission & Vision
    {
        patterns: ['mission', 'vision', 'values', 'philosophy', 'goals'],
        response: "**SUNVEST CONSULTANCY LLP Philosophy:**\n\n**Company Vision:** Excellence. Innovation. Growth.\n\n**Our Approach:** We envision. We strategize. We support.\n\n**Core Values:**\n• Excellence in Service: Superior quality solutions exceeding client expectations\n• Sustainable Innovation: Eco-friendly technologies for a better tomorrow\n• Integrity & Trust: Transparent business practices and ethical conduct\n\nWe're committed to delivering innovative solutions across IT, renewable energy, and financial sectors, contributing to India's technological and economic advancement.",
        category: 'company'
    },
    
    // Default Fallback
    {
        patterns: ['default_fallback_trigger'],
        response: "I'm not quite sure how to answer that. I can help with questions about:\n\n• **IT Services** (Software Engineering, AI/ML, Data Engineering, Cloud & DevOps)\n• **Solar Power Solutions** (Installation, Maintenance, Consultation)\n• **Investment & Financial Services** (Mutual Funds, Insurance, Tax Planning)\n• **Company Information** (Contact details, leadership, locations)\n\nPlease try rephrasing your question, or contact us directly at info@sunvests.com for personalized assistance.",
        category: 'general'
    }
];

// Basic matching function (can be improved with more sophisticated NLP later)
export const findBestMatch = (userInput: string): ChatbotRule => {
    const normalizedInput = userInput.toLowerCase().trim();

    if (!normalizedInput) {
        return chatbotRules.find(rule => rule.category === 'greeting') || chatbotRules[0]; // Default to a greeting if empty
    }

    let bestMatch: ChatbotRule | null = null;
    let highestScore = 0;

    for (const rule of chatbotRules) {
        if (rule.patterns.includes('default_fallback_trigger')) continue; // Skip default rule in this loop

        for (const pattern of rule.patterns) {
            const patternWords = pattern.toLowerCase().split(' ');
            let currentScore = 0;
            let wordsMatched = 0;

            // Check for full phrase match first (higher score)
            if (normalizedInput.includes(pattern.toLowerCase())) {
                currentScore += patternWords.length * 2; // Higher weight for full phrase
                wordsMatched = patternWords.length;
            } else {
                // Check for individual keyword matches
                for (const word of patternWords) {
                    if (normalizedInput.includes(word)) {
                        currentScore++;
                        wordsMatched++;
                    }
                }
            }
            
            // Prioritize matches with more words from the pattern
            if (wordsMatched > 0) {
                // Add a bonus if all words in a multi-word pattern are found, even if not contiguous
                if (patternWords.length > 1 && wordsMatched === patternWords.length && !normalizedInput.includes(pattern.toLowerCase())) {
                    currentScore += patternWords.length; 
                }
            }

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestMatch = rule;
            }
        }
    }

    if (bestMatch && highestScore > 0) {
        return bestMatch;
    }

    // Return the designated fallback rule if no suitable match is found
    return chatbotRules.find(rule => rule.patterns.includes('default_fallback_trigger')) || chatbotRules[chatbotRules.length - 1]; // Failsafe
};
