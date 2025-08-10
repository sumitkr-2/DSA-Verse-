// DSA Visualizer Application JavaScript with Robot Introduction

class DSAVisualizer {
    constructor() {
        this.algorithms = {
            "sorting": [
                {"name": "Bubble Sort", "description": "Simple comparison-based sorting algorithm", "complexity": "O(n²)"},
                {"name": "Quick Sort", "description": "Divide-and-conquer sorting algorithm", "complexity": "O(n log n)"},
                {"name": "Merge Sort", "description": "Stable divide-and-conquer sorting", "complexity": "O(n log n)"},
                {"name": "Heap Sort", "description": "Comparison-based sorting using binary heap", "complexity": "O(n log n)"}
            ],
            "searching": [
                {"name": "Linear Search", "description": "Sequential search through elements", "complexity": "O(n)"},
                {"name": "Binary Search", "description": "Divide-and-conquer search in sorted array", "complexity": "O(log n)"},
                {"name": "Hash Table", "description": "Key-value pair data structure", "complexity": "O(1) average"}
            ],
            "trees": [
                {"name": "Binary Tree", "description": "Hierarchical data structure", "complexity": "O(log n)"},
                {"name": "BST", "description": "Binary Search Tree with ordering property", "complexity": "O(log n)"},
                {"name": "AVL Tree", "description": "Self-balancing binary search tree", "complexity": "O(log n)"}
            ],
            "graphs": [
                {"name": "DFS", "description": "Depth-First Search traversal", "complexity": "O(V + E)"},
                {"name": "BFS", "description": "Breadth-First Search traversal", "complexity": "O(V + E)"},
                {"name": "Dijkstra", "description": "Shortest path algorithm", "complexity": "O(V log V + E)"}
            ]
        };

        this.robotResponses = {
            "greeting": "Hi there! I'm DSA Bot, your friendly coding assistant! 🤖 I'm here to help you master Data Structures and Algorithms. What would you like to learn today?",
            "whatIsDsa": "DSA stands for Data Structures and Algorithms! Data structures are ways to organize and store data (like arrays, trees, graphs), while algorithms are step-by-step procedures to solve problems. Together, they're the foundation of efficient programming!",
            "helpChoose": "Great question! It depends on what you want to learn:\n\n🔸 New to DSA? Start with Arrays and Sorting\n🔸 Want to understand hierarchies? Try Trees\n🔸 Love problem-solving? Explore Graph algorithms\n🔸 Need speed? Learn about Hash Tables\n\nWhat interests you most?",
            "sortingExplain": "Sorting algorithms arrange elements in order! Here are the main types:\n\n🔸 **Bubble Sort**: Simple but slow - good for learning\n🔸 **Quick Sort**: Fast and popular - great for interviews\n🔸 **Merge Sort**: Stable and reliable - perfect for large data\n\nWant to visualize any of these?",
            "complexity": "Time complexity tells us how algorithm performance scales with input size:\n\n🔸 **O(1)**: Constant - always same time\n🔸 **O(log n)**: Logarithmic - very efficient\n🔸 **O(n)**: Linear - proportional to input\n🔸 **O(n²)**: Quadratic - can be slow for large inputs\n\nWant to see examples?",
            "studyTips": "Here are my top study tips for mastering DSA:\n\n📚 **Start with basics**: Arrays, strings, and loops\n🔍 **Practice daily**: Even 30 minutes helps!\n📝 **Code by hand**: Builds muscle memory\n🎯 **Focus on patterns**: Many problems use similar approaches\n💡 **Understand, don't memorize**: Know the 'why' behind algorithms\n\nWant specific resources?",
            "interview": "Interview preparation tips:\n\n🎯 **Master the fundamentals**: Arrays, strings, hash maps\n⏰ **Practice time management**: Use a timer\n🗣️ **Think out loud**: Explain your approach\n🐛 **Test your code**: Walk through examples\n📊 **Know complexities**: Time and space analysis\n\nWant to practice with specific topics?",
            "algorithmsChoice": "Excellent choice! Let's dive into algorithms and learn step-by-step problem solving!",
            "dataStructureChoice": "Great decision! Data structures are the building blocks of efficient programming!",
            "goodbye": "Taking you there now... Happy learning! 🚀",
            "default": "That's a great question! I can help you with:\n\n✨ Algorithm explanations\n🎯 Complexity analysis\n🚀 Learning roadmaps\n💡 Interview tips\n\nTry asking me about specific algorithms or concepts!"
        };

        this.quickReplies = [
            "What is DSA?",
            "Help me choose an algorithm",
            "Explain sorting algorithms",
            "Show complexity analysis",
            "Give me study tips",
            "Interview preparation"
        ];

        this.introMessages = [
            "🤖 Initializing DSA Bot...",
            "🔧 Loading algorithm database...",
            "⚡ Calibrating neural networks...",
            "🚀 Welcome to DSA Visualizer!",
            "✨ Ready to make learning fun!"
        ];

        this.currentCategory = 'all';
        this.chatMessages = [];
        this.isChatOpen = false;
        this.introCompleted = false;
        this.redirecting = false;

        this.init();
    }

    init() {
        // Hide robot FAB initially
        const robotFab = document.querySelector('.robot-fab');
        if (robotFab) {
            robotFab.style.display = 'none';
        }
        
        this.startRobotIntroduction();
        this.renderAlgorithms();
        this.setupEventListeners();
        this.setupQuickReplies();
    }

    // Robot Introduction System
    startRobotIntroduction() {
        // Ensure intro overlay is visible
        const overlay = document.getElementById('robotIntroOverlay');
        if (overlay) {
            overlay.style.display = 'flex';
        }
        
        // Start particle system and intro sequence
        setTimeout(() => {
            this.createParticleSystem();
        }, 500);
        
        this.runIntroSequence();
        this.setupIntroEventListeners();
    }

    createParticleSystem() {
        const particleSystem = document.getElementById('particleSystem');
        if (!particleSystem) return;
        
        // Clear existing particles
        particleSystem.innerHTML = '';
        
        // Create particles
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                if (this.introCompleted || this.redirecting) return;
                
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = (2 + Math.random() * 3) + 's';
                particleSystem.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 50);
            }, i * 10);
        }
    }

    runIntroSequence() {
        const loadingText = document.getElementById('loadingText');
        const robotCharacter = document.getElementById('robotCharacter');
        const speechBubble = document.getElementById('speechBubble');
        
        if (!loadingText || !robotCharacter || !speechBubble) return;
        
        // Ensure elements start in correct state
        robotCharacter.style.opacity = '0';
        speechBubble.classList.add('hidden');
        loadingText.style.opacity = '1';
        
        let messageIndex = 0;
        
        // Cycle through loading messages
        const messageInterval = setInterval(() => {
            if (this.introCompleted || this.redirecting) {
                clearInterval(messageInterval);
                return;
            }
            
            if (messageIndex < this.introMessages.length) {
                loadingText.textContent = this.introMessages[messageIndex];
                messageIndex++;
            } else {
                clearInterval(messageInterval);
                this.showRobotAndSpeech();
            }
        }, 6);
        
        // Screen shake effect when robot materializes
        setTimeout(() => {
            if (this.introCompleted || this.redirecting) return;
            
            document.body.classList.add('screen-shake');
            setTimeout(() => {
                document.body.classList.remove('screen-shake');
            }, 1000);
        }, 20);
    }

    showRobotAndSpeech() {
        if (this.introCompleted || this.redirecting) return;
        
        const loadingText = document.getElementById('loadingText');
        const speechBubble = document.getElementById('speechBubble');
        const robotCharacter = document.getElementById('robotCharacter');
        
        // Hide loading text
        if (loadingText) {
            loadingText.style.opacity = '0';
        }
        
        // Show robot
        if (robotCharacter) {
            robotCharacter.style.opacity = '1';
        }
        
        // Show speech bubble after robot materializes
        setTimeout(() => {
            if (this.introCompleted || this.redirecting) return;
            
            if (speechBubble) {
                speechBubble.classList.remove('hidden');
                this.setupChoiceButtons();
            }
        }, 100);
    }

    setupIntroEventListeners() {
        const skipBtn = document.getElementById('skipBtn');
        
        // Skip intro functionality
        if (skipBtn) {
            skipBtn.addEventListener('click', () => this.skipIntro());
        }
        
        // ESC key to skip
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.introCompleted && !this.redirecting) {
                this.skipIntro();
            }
        });
    }

    setupChoiceButtons() {
        const algorithmsBtn = document.getElementById('algorithmsBtn');
        const dataStructuresBtn = document.getElementById('dataStructuresBtn');
        
        if (algorithmsBtn) {
            // Clear any existing listeners
            algorithmsBtn.onclick = null;
            algorithmsBtn.replaceWith(algorithmsBtn.cloneNode(true));
            
            // Get fresh reference and add listener
            const newAlgorithmsBtn = document.getElementById('algorithmsBtn');
            if (newAlgorithmsBtn) {
                newAlgorithmsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleIntroChoice('algorithms');
                });
            }
        }
        
        if (dataStructuresBtn) {
            // Clear any existing listeners  
            dataStructuresBtn.onclick = null;
            dataStructuresBtn.replaceWith(dataStructuresBtn.cloneNode(true));
            
            // Get fresh reference and add listener
            const newDataStructuresBtn = document.getElementById('dataStructuresBtn');
            if (newDataStructuresBtn) {
                newDataStructuresBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleIntroChoice('datastructures');
                });
            }
        }
    }

    handleIntroChoice(choice) {
        if (this.redirecting || this.introCompleted) return;
        
        this.redirecting = true;
        console.log('Handling choice:', choice);
        
        const speechBubble = document.getElementById('speechBubble');
        const speechTitle = document.getElementById('speechTitle');
        const speechText = document.getElementById('speechText');
        const introButtons = document.querySelector('.intro-buttons');
        
        // Disable buttons immediately to prevent double clicks
        const algorithmsBtn = document.getElementById('algorithmsBtn');
        const dataStructuresBtn = document.getElementById('dataStructuresBtn');
        if (algorithmsBtn) algorithmsBtn.disabled = true;
        if (dataStructuresBtn) dataStructuresBtn.disabled = true;
        
        // Add goodbye animation class to buttons
        if (introButtons) {
            const buttons = introButtons.querySelectorAll('.intro-btn');
            buttons.forEach(btn => btn.classList.add('goodbye'));
        }
        
        if (choice === 'algorithms') {
            if (speechTitle) speechTitle.textContent = "Excellent Choice! 🔄";
            if (speechText) speechText.textContent = this.robotResponses.algorithmsChoice + " " + this.robotResponses.goodbye;
            
            // Hide buttons with animation
            if (introButtons) {
                setTimeout(() => {
                    introButtons.style.opacity = '0';
                    introButtons.style.transform = 'translateY(20px)';
                }, 500);
            }
            
            // Play robot farewell animation and redirect
            setTimeout(() => {
                this.playGoodbyeAnimation();
                setTimeout(() => {
                    console.log('Redirecting to algorithms.html');
                    window.location.href = 'algorithms.html';
                }, 1000);
            }, 1000);
            
        } else if (choice === 'datastructures') {
            if (speechTitle) speechTitle.textContent = "Perfect Choice! 🏗️";
            if (speechText) speechText.textContent = this.robotResponses.dataStructureChoice + " " + this.robotResponses.goodbye;
            
            // Hide buttons with animation
            if (introButtons) {
                setTimeout(() => {
                    introButtons.style.opacity = '0';
                    introButtons.style.transform = 'translateY(20px)';
                }, 500);
            }
            
            // Play robot farewell animation and redirect
            setTimeout(() => {
                this.playGoodbyeAnimation();
                setTimeout(() => {
                    console.log('Redirecting to datastructure.html');
                    window.location.href = 'datastructures.html';
                }, 1000);
            }, 1500);
        }
    }

    playGoodbyeAnimation() {
        const robotCharacter = document.getElementById('robotCharacter');
        if (robotCharacter) {
            // Robot waves goodbye and shrinks
            robotCharacter.style.animation = 'robotGoodbye 1s ease-out forwards';
        }
        
        // Add goodbye animation styles if not already present
        if (!document.querySelector('#goodbye-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'goodbye-animation-styles';
            style.textContent = `
                @keyframes robotGoodbye {
                    0% {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.1) rotate(10deg);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(0.3) rotate(360deg);
                        opacity: 0.5;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    skipIntro() {
        if (this.introCompleted) return;
        
        this.introCompleted = true;
        const overlay = document.getElementById('robotIntroOverlay');
        const robotFab = document.querySelector('.robot-fab');
        
        if (overlay) {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.style.display = 'none';
                if (robotFab) {
                    robotFab.style.display = 'flex';
                }
            }, 1000);
        }
    }

    completeIntro() {
        if (this.introCompleted) return;
        
        this.introCompleted = true;
        const overlay = document.getElementById('robotIntroOverlay');
        const robotFab = document.querySelector('.robot-fab');
        
        // Animate robot moving to corner
        const robotCharacter = document.getElementById('robotCharacter');
        if (robotCharacter) {
            robotCharacter.style.position = 'fixed';
            robotCharacter.style.bottom = '30px';
            robotCharacter.style.right = '30px';
            robotCharacter.style.transform = 'scale(0.5)';
            robotCharacter.style.transition = 'all 1s ease-out';
            robotCharacter.style.zIndex = '10000';
        }
        
        setTimeout(() => {
            if (overlay) {
                overlay.classList.add('fade-out');
                setTimeout(() => {
                    overlay.style.display = 'none';
                    if (robotCharacter) {
                        robotCharacter.style.display = 'none';
                    }
                    if (robotFab) {
                        robotFab.style.display = 'flex';
                    }
                }, 500);
            }
        }, 1000);
    }

    // Continue with existing functionality
    setupEventListeners() {
        // Category buttons
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryChange(e.target.dataset.category);
            });
        });

        // Navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const linkText = link.textContent.trim();
                
                if (linkText === 'Practice') {
                    alert('Practice section coming soon! For now, try exploring the algorithm visualizations.');
                } else if (linkText === 'About') {
                    alert('DSA Visualizer v1.0\n\nAn interactive learning platform for Data Structures and Algorithms.\n\nBuilt with love for students and developers! 🚀');
                }
                // Home link doesn't need action as we're already on home page
            });
        });

        // Robot chat functionality
        const robotButton = document.getElementById('robotButton');
        const closeChatBtn = document.getElementById('closeChatBtn');
        const sendBtn = document.getElementById('sendBtn');
        const messageInput = document.getElementById('messageInput');

        if (robotButton) {
            robotButton.addEventListener('click', () => this.toggleChat());
        }
        if (closeChatBtn) {
            closeChatBtn.addEventListener('click', () => this.closeChat());
        }
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }
        
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const sidebar = document.querySelector('.sidebar');

        if (mobileMenuToggle && sidebarOverlay && sidebar) {
            mobileMenuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                sidebarOverlay.classList.toggle('active');
            });

            sidebarOverlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            });
        }

        // Quick reply buttons (will be set up after rendering)
        this.setupQuickReplyListeners();
    }

    handleCategoryChange(category) {
        this.currentCategory = category;
        
        // Update active button
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === category) {
                btn.classList.add('active');
            }
        });

        this.renderAlgorithms();
    }

    renderAlgorithms() {
        const algorithmsGrid = document.getElementById('algorithmsGrid');
        if (algorithmsGrid) {
            algorithmsGrid.innerHTML = '';

            let algorithmsToShow = [];

            if (this.currentCategory === 'all') {
                // Show all algorithms
                Object.values(this.algorithms).forEach(categoryAlgorithms => {
                    algorithmsToShow = [...algorithmsToShow, ...categoryAlgorithms];
                });
            } else {
                // Show algorithms from specific category
                algorithmsToShow = this.algorithms[this.currentCategory] || [];
            }

            algorithmsToShow.forEach(algorithm => {
                const algorithmCard = this.createAlgorithmCard(algorithm);
                algorithmsGrid.appendChild(algorithmCard);
            });
        }
    }

    createAlgorithmCard(algorithm) {
        const card = document.createElement('div');
        card.className = 'algorithm-card';
        
        card.innerHTML = `
            <div class="algorithm-header">
                <div>
                    <h3 class="algorithm-title">${algorithm.name}</h3>
                </div>
                <span class="algorithm-complexity">${algorithm.complexity}</span>
            </div>
            <p class="algorithm-description">${algorithm.description}</p>
            <div class="algorithm-actions">
                <button class="visualize-btn" onclick="dsaApp.visualizeAlgorithm('${algorithm.name}')">
                    Visualize Algorithm
                </button>
            </div>
        `;

        return card;
    }

    visualizeAlgorithm(algorithmName) {
        // Simulate algorithm visualization
        alert(`Launching ${algorithmName} visualization...`);
        
        // Add a bot message about the algorithm
        const message = `Great choice! ${algorithmName} is an excellent algorithm to learn. The visualization will help you understand how it works step by step. Would you like me to explain any concepts while you explore?`;
        this.addBotMessage(message);
        
        if (!this.isChatOpen) {
            this.toggleChat();
        }
    }

    // Chat functionality
    toggleChat() {
        const chatPopup = document.getElementById('chatPopup');
        
        if (this.isChatOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const chatPopup = document.getElementById('chatPopup');
        if (chatPopup) {
            chatPopup.classList.remove('hidden');
            this.isChatOpen = true;
            
            // Add greeting if no messages exist
            if (this.chatMessages.length === 0) {
                this.addGreetingMessage();
            }
            
            // Focus on input
            setTimeout(() => {
                const messageInput = document.getElementById('messageInput');
                if (messageInput) {
                    messageInput.focus();
                }
            }, 300);
        }
    }

    closeChat() {
        const chatPopup = document.getElementById('chatPopup');
        if (chatPopup) {
            chatPopup.classList.add('hidden');
            this.isChatOpen = false;
        }
    }

    addGreetingMessage() {
        this.addBotMessage(this.robotResponses.greeting);
    }

    setupQuickReplies() {
        const quickRepliesContainer = document.getElementById('quickReplies');
        
        if (quickRepliesContainer) {
            this.quickReplies.forEach(reply => {
                const button = document.createElement('button');
                button.className = 'quick-reply-btn';
                button.textContent = reply;
                button.addEventListener('click', () => {
                    this.handleQuickReply(reply);
                });
                quickRepliesContainer.appendChild(button);
            });
        }
    }

    setupQuickReplyListeners() {
        // This method is called after quick replies are rendered
        const quickReplyButtons = document.querySelectorAll('.quick-reply-btn');
        quickReplyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleQuickReply(e.target.textContent);
            });
        });
    }

    handleQuickReply(reply) {
        this.addUserMessage(reply);
        this.processUserMessage(reply);
    }

    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            const message = messageInput.value.trim();
            
            if (message) {
                this.addUserMessage(message);
                messageInput.value = '';
                this.processUserMessage(message);
            }
        }
    }

    processUserMessage(message) {
        this.showTypingIndicator();
        
        // Simulate thinking delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addBotMessage(response);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Map questions to responses
        if (lowerMessage.includes('what is dsa') || lowerMessage.includes('what\'s dsa')) {
            return this.robotResponses.whatIsDsa;
        } else if (lowerMessage.includes('help me choose') || lowerMessage.includes('which algorithm')) {
            return this.robotResponses.helpChoose;
        } else if (lowerMessage.includes('sorting') || lowerMessage.includes('explain sorting')) {
            return this.robotResponses.sortingExplain;
        } else if (lowerMessage.includes('complexity') || lowerMessage.includes('big o')) {
            return this.robotResponses.complexity;
        } else if (lowerMessage.includes('study tips') || lowerMessage.includes('how to study')) {
            return this.robotResponses.studyTips;
        } else if (lowerMessage.includes('interview') || lowerMessage.includes('preparation')) {
            return this.robotResponses.interview;
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! 👋 I'm excited to help you with your DSA journey. What would you like to explore today?";
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            return "You're very welcome! 😊 I'm always here to help you master algorithms and data structures. Keep coding!";
        } else if (lowerMessage.includes('tree') || lowerMessage.includes('binary tree')) {
            return "Trees are fascinating data structures! 🌳 They're hierarchical structures perfect for organizing data. Binary trees, BSTs, and AVL trees each have unique properties. Want to explore any specific tree algorithm?";
        } else if (lowerMessage.includes('graph') || lowerMessage.includes('dfs') || lowerMessage.includes('bfs')) {
            return "Graphs are powerful for modeling relationships! 🕸️ DFS explores deep paths first, while BFS explores level by level. Both are essential for traversal and pathfinding. Which one interests you more?";
        } else if (lowerMessage.includes('array') || lowerMessage.includes('linear search')) {
            return "Arrays are the foundation of programming! 📊 Linear search is simple but can be slow. For sorted arrays, binary search is much faster at O(log n). Want to see how they compare?";
        } else {
            return this.robotResponses.default;
        }
    }

    addUserMessage(message) {
        this.chatMessages.push({ type: 'user', content: message });
        this.renderMessage('user', message, '👤');
    }

    addBotMessage(message) {
        this.chatMessages.push({ type: 'bot', content: message });
        this.renderMessage('bot', message, '🤖');
    }

    renderMessage(type, content, avatar) {
        const messagesContainer = document.getElementById('chatMessages');
        
        if (messagesContainer) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${type}`;
            
            messageDiv.innerHTML = `
                <div class="message-avatar">${avatar}</div>
                <div class="message-content">${content}</div>
            `;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    showTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.classList.remove('hidden');
            
            const messagesContainer = document.getElementById('chatMessages');
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.classList.add('hidden');
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dsaApp = new DSAVisualizer();
});

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape key to close chat or skip intro
        if (e.key === 'Escape') {
            if (window.dsaApp) {
                if (!window.dsaApp.introCompleted && !window.dsaApp.redirecting) {
                    window.dsaApp.skipIntro();
                } else if (window.dsaApp.isChatOpen) {
                    window.dsaApp.closeChat();
                }
            }
        }
        
        // Ctrl/Cmd + K to open chat (only after intro)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (window.dsaApp && window.dsaApp.introCompleted) {
                window.dsaApp.toggleChat();
            }
        }
    });

    // Add visual feedback for interactions
    document.addEventListener('click', (e) => {
        // Add ripple effect to buttons
        if (e.target.classList.contains('btn') || 
            e.target.classList.contains('visualize-btn') ||
            e.target.classList.contains('send-btn') ||
            e.target.classList.contains('intro-btn')) {
            
            const button = e.target;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });

    // Add continuous particle generation during intro
    const particleInterval = setInterval(() => {
        if (window.dsaApp && !window.dsaApp.introCompleted && !window.dsaApp.redirecting) {
            window.dsaApp.createParticleSystem();
        } else {
            clearInterval(particleInterval);
        }
    }, 3000);
});

// Add CSS for ripple effect and disabled button states
const style = document.createElement('style');
style.textContent = `
    .btn, .visualize-btn, .send-btn, .intro-btn {
        position: relative;
        overflow: hidden;
    }
    
    .btn:disabled, .intro-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .intro-buttons {
        transition: all 0.5s ease-out;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);