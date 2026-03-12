/* ===========================
   Corelon Systems — Chatbot Widget
   =========================== */

(function() {
    'use strict';

    // Chatbot Configuration
    const config = {
        botName: 'Corelon Assistant',
        welcomeMessage: 'Hello! 👋 How can we help you today?',
        placeholderText: 'Type your message...',
        primaryColor: '#2563eb',
        position: 'bottom-right', // bottom-right or bottom-left
        autoOpen: false,
        autoOpenDelay: 5000, // 5 seconds
        offlineMessage: 'We\'re currently offline. Leave us a message and we\'ll get back to you soon!',
        businessHours: {
            enabled: true,
            timezone: 'Africa/Kampala', // EAT
            schedule: {
                monday: { start: '09:00', end: '18:00' },
                tuesday: { start: '09:00', end: '18:00' },
                wednesday: { start: '09:00', end: '18:00' },
                thursday: { start: '09:00', end: '18:00' },
                friday: { start: '09:00', end: '18:00' },
                saturday: { start: '10:00', end: '14:00' },
                sunday: null // Closed
            }
        }
    };

    // Quick replies for common questions
    const quickReplies = [
        { text: '💼 Our Services', value: 'services' },
        { text: '💰 Get a Quote', value: 'quote' },
        { text: '📞 Contact Info', value: 'contact' },
        { text: '🕐 Business Hours', value: 'hours' }
    ];

    // Automated responses
    const autoResponses = {
        services: {
            message: 'We offer 9 specialized services:\n\n• IT Infrastructure\n• Systems Development\n• Mobile App Development\n• Web Development\n• Networking\n• Digital Research\n• Data Analysis & Statistics\n• Graphic Design\n• Digital Branding\n\nWhich service interests you?',
            link: { text: 'View All Services', url: 'services.html' }
        },
        quote: {
            message: 'Great! We\'d love to discuss your project. Please share:\n\n1. What service do you need?\n2. Project timeline\n3. Your budget range\n\nOr fill out our contact form for a detailed quote.',
            link: { text: 'Contact Form', url: 'contact.html' }
        },
        contact: {
            message: '📧 Email: hello@corelon.systems\n📱 Phone: +256 700 535 379\n🏢 Headquarters: Nakiwogo, Entebbe, Uganda\n🇬🇧 Coordination: England, UK\n\n⏰ Mon-Fri: 09:00-18:00 EAT\n⏰ Sat: 10:00-14:00 EAT',
            link: { text: 'Contact Page', url: 'contact.html' }
        },
        hours: {
            message: '⏰ Business Hours (EAT):\n\nMonday - Friday: 09:00 - 18:00\nSaturday: 10:00 - 14:00\nSunday: Closed\n\nWe respond to messages within 2 hours during business hours.',
            link: null
        }
    };

    // Create chatbot HTML
    function createChatbot() {
        const chatbotHTML = `
            <div id="corelon-chatbot" class="chatbot-widget">
                <div class="chatbot-button" id="chatbot-toggle">
                    <svg class="chatbot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="chatbot-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span class="chatbot-notification" id="chatbot-notification">1</span>
                </div>
                
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">
                                <img src="log.png" alt="Corelon Systems">
                            </div>
                            <div>
                                <div class="chatbot-title">${config.botName}</div>
                                <div class="chatbot-status" id="chatbot-status">
                                    <span class="status-dot"></span>
                                    <span class="status-text">Online</span>
                                </div>
                            </div>
                        </div>
                        <button class="chatbot-minimize" id="chatbot-minimize">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbot-messages">
                        <div class="chatbot-message bot-message">
                            <div class="message-content">${config.welcomeMessage}</div>
                            <div class="message-time">${getCurrentTime()}</div>
                        </div>
                        <div class="quick-replies" id="quick-replies">
                            ${quickReplies.map(reply => `
                                <button class="quick-reply-btn" data-value="${reply.value}">${reply.text}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="chatbot-input-area">
                        <input 
                            type="text" 
                            class="chatbot-input" 
                            id="chatbot-input" 
                            placeholder="${config.placeholderText}"
                            autocomplete="off"
                        >
                        <button class="chatbot-send-btn" id="chatbot-send">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    // Get current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    // Check if currently in business hours
    function isBusinessHours() {
        if (!config.businessHours.enabled) return true;

        const now = new Date();
        const day = now.toLocaleDateString('en-US', { weekday: 'lowercase' });
        const schedule = config.businessHours.schedule[day];

        if (!schedule) return false;

        const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
        return currentTime >= schedule.start && currentTime <= schedule.end;
    }

    // Update online status
    function updateStatus() {
        const statusDot = document.querySelector('.status-dot');
        const statusText = document.querySelector('.status-text');
        
        if (isBusinessHours()) {
            statusDot.classList.add('online');
            statusText.textContent = 'Online';
        } else {
            statusDot.classList.remove('online');
            statusText.textContent = 'Offline';
        }
    }

    // Add message to chat
    function addMessage(text, isBot = false, link = null) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageHTML = `
            <div class="chatbot-message ${isBot ? 'bot-message' : 'user-message'}">
                <div class="message-content">${text}</div>
                ${link ? `<a href="${link.url}" class="message-link">${link.text} →</a>` : ''}
                <div class="message-time">${getCurrentTime()}</div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Handle user message
    function handleUserMessage(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, false);

        // Clear input
        document.getElementById('chatbot-input').value = '';

        // Simulate typing delay
        setTimeout(() => {
            // Check for automated responses
            const lowerMessage = message.toLowerCase();
            let responded = false;

            // Check quick reply values
            for (const [key, response] of Object.entries(autoResponses)) {
                if (lowerMessage.includes(key) || lowerMessage.includes(response.message.toLowerCase().substring(0, 20))) {
                    addMessage(response.message, true, response.link);
                    responded = true;
                    break;
                }
            }

            // Default response
            if (!responded) {
                if (isBusinessHours()) {
                    addMessage('Thank you for your message! A team member will respond shortly. In the meantime, you can explore our services or contact us directly.', true, { text: 'View Services', url: 'services.html' });
                } else {
                    addMessage(config.offlineMessage, true, { text: 'Contact Form', url: 'contact.html' });
                }
            }
        }, 1000);
    }

    // Initialize chatbot
    function initChatbot() {
        createChatbot();

        const toggleBtn = document.getElementById('chatbot-toggle');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const chatWindow = document.getElementById('chatbot-window');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const notification = document.getElementById('chatbot-notification');

        // Toggle chat window
        toggleBtn.addEventListener('click', () => {
            const isOpen = chatWindow.classList.contains('open');
            if (isOpen) {
                chatWindow.classList.remove('open');
                toggleBtn.classList.remove('open');
            } else {
                chatWindow.classList.add('open');
                toggleBtn.classList.add('open');
                notification.style.display = 'none';
                input.focus();
            }
        });

        // Minimize button
        minimizeBtn.addEventListener('click', () => {
            chatWindow.classList.remove('open');
            toggleBtn.classList.remove('open');
        });

        // Send message
        sendBtn.addEventListener('click', () => {
            handleUserMessage(input.value);
        });

        // Enter key to send
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserMessage(input.value);
            }
        });

        // Quick replies
        document.querySelectorAll('.quick-reply-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.getAttribute('data-value');
                const response = autoResponses[value];
                
                addMessage(btn.textContent, false);
                
                setTimeout(() => {
                    addMessage(response.message, true, response.link);
                }, 800);

                // Hide quick replies after first use
                document.getElementById('quick-replies').style.display = 'none';
            });
        });

        // Update status
        updateStatus();
        setInterval(updateStatus, 60000); // Check every minute

        // Auto-open after delay
        if (config.autoOpen) {
            setTimeout(() => {
                if (!chatWindow.classList.contains('open')) {
                    notification.style.display = 'flex';
                }
            }, config.autoOpenDelay);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
