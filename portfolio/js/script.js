// ============================================================================
// Portfolio Website - Main Script
// ============================================================================

// Configuration
const CONFIG = {
    animateLibrary: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
    animationDuration: 0.6,
    staggerDelay: 0.1,
    scrollBehavior: 'smooth'
};

// State Management
const state = {
    isMenuOpen: false,
    currentSection: 'hero',
    animateLibraryLoaded: false
};

// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: 'Quantum Portal',
        description: 'Next-generation web portal featuring WebGL shader backgrounds, dynamic fluid simulation, and cybernetic user interface modules.',
        image: 'https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjAzRCUyMHJlbmRlcmluZyUyMHdpdGglMjBjeWFuJTIwaGlnaGxpZ2h0c3xlbnwwfHx8fDE3ODE5ODkwMTV8MA&ixlib=rb-4.1.0&q=85',
        bentoClass: 'card-large',
        links: [
            { text: 'Live', url: '#' },
            { text: 'Code', url: '#' }
        ]
    },
    {
        id: 2,
        title: 'Neural Dashboard',
        description: 'Interactive telemetry hub integrating real-time server statistics, custom charting libraries, and high-frequency data streams.',
        image: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjAzRCUyMHJlbmRlcmluZyUyMHdpdGglMjBjeWFuJTIwaGlnaGxpZ2h0c3xlbnwwfHx8fDE3ODE5ODkwMTV8MA&ixlib=rb-4.1.0&q=85',
        bentoClass: 'card-tall',
        links: [
            { text: 'Live', url: '#' },
            { text: 'Code', url: '#' }
        ]
    },
    {
        id: 3,
        title: 'Aether Engine',
        description: 'A physical rendering toolkit optimized for minimal bundle footprint and hardware-accelerated fluid motion.',
        image: 'https://images.unsplash.com/photo-1707730376818-a7a02fe896d5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxhYnN0cmFjdCUyMGRhcmslMjBnZW9tZXRyaWMlMjAzRCUyMHJlbmRlcmluZyUyMHdpdGglMjBjeWFuJTIwaGlnaGxpZ2h0c3xlbnwwfHx8fDE3ODE5ODkwMTV8MA&ixlib=rb-4.1.0&q=85',
        bentoClass: 'card-standard',
        links: [
            { text: 'Live', url: '#' }
        ]
    },
    {
        id: 4,
        title: 'Vortex Protocol',
        description: 'A decentralized finance routing visualizer presenting transactions as self-organizing particle nodes on a glass canvas.',
        image: 'https://images.unsplash.com/photo-1524169220946-12efd782aab4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMnx8YWJzdHJhY3QlMjBkYXJrJTIwZ2VvbWV0cmljJTIwM0QlMjByZW5kZXJpbmclMjB3aXRoJTIwY3lhbiUyMGhpZ2hsaWdodHN8ZW58MHx8fHwxNzgxOTg5MDE1fDA&ixlib=rb-4.1.0&q=85',
        bentoClass: 'card-wide',
        links: [
            { text: 'Live', url: '#' },
            { text: 'Code', url: '#' }
        ]
    }
];

// Services Data
const servicesData = [
    {
        id: 1,
        icon: '🎨',
        title: 'Web Design',
        description: 'Beautiful and responsive web designs that engage users and convert visitors.',
        cta: 'Get Started'
    },
    {
        id: 2,
        icon: '⚙️',
        title: 'Web Development',
        description: 'High-performance web applications with modern technologies and best practices.',
        cta: 'Get Started'
    },
    {
        id: 3,
        icon: '✨',
        title: 'UI/UX Optimization',
        description: 'Enhance user experience with modern animations and intuitive interfaces.',
        cta: 'Get Started'
    }
];

// ============================================================================
// DOM Element References
// ============================================================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const portfolioGrid = document.getElementById('portfolioGrid');
const servicesGrid = document.getElementById('servicesGrid');
const navbar = document.getElementById('navbar');

// ============================================================================
// Initialization
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMenuHandlers();
    initializeNavigation();
    populatePortfolio();
    populateServices();
    initializeContactForm();
    initializeScrollAnimations();
    initializeHeroAnimations();
    checkAnimateLibraryAvailability();
});

// ============================================================================
// Menu Handlers
// ============================================================================

function initializeMenuHandlers() {
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            closeMenu();
        }
    });
}

function toggleMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    hamburger.classList.toggle('active', state.isMenuOpen);
    navMenu.classList.toggle('active', state.isMenuOpen);
}

function closeMenu() {
    state.isMenuOpen = false;
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// ============================================================================
// Navigation & Scroll Behavior
// ============================================================================

function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            const targetId = link.getAttribute('href');
            
            smoothScrollToSection(targetId);
            updateActiveLink(targetSection);
            state.currentSection = targetSection;
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        updateActiveLinkOnScroll();
    });
}

function smoothScrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: CONFIG.scrollBehavior
        });
    }
}

function updateActiveLink(section) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === section) {
            link.classList.add('active');
        }
    });
}

function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = 'hero';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    updateActiveLink(currentSection);
    state.currentSection = currentSection;
}

// ============================================================================
// Portfolio Population
// ============================================================================

function populatePortfolio() {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = portfolioData.map((project, index) => `
        <div class="portfolio-card ${project.bentoClass || ''} animate-slide-up" style="animation-delay: ${index * CONFIG.staggerDelay}s;">
            <img src="${project.image}" alt="${project.title}" class="portfolio-image" loading="lazy">
            <div class="portfolio-info">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="portfolio-link">${link.text}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================================
// Services Population
// ============================================================================

function populateServices() {
    if (!servicesGrid) return;

    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card animate-slide-up" style="animation-delay: ${index * CONFIG.staggerDelay}s;">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <a href="#contact" class="service-cta" onclick="smoothScrollToSection('#contact'); return false;">
                ${service.cta}
            </a>
        </div>
    `).join('');
}

// ============================================================================
// Contact Form Handling
// ============================================================================

function initializeContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmission);
}

function handleFormSubmission(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Validate form
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormMessage('Please fill out all fields', 'error');
        return;
    }

    // Validate email
    if (!isValidEmail(data.email)) {
        showFormMessage('Please enter a valid email', 'error');
        return;
    }

    // Save to localStorage (for demo purposes)
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    submissions.push({
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show success message
    showFormMessage('Message sent successfully! Thank you for reaching out.', 'success');
    contactForm.reset();
}

function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = contactForm.parentElement.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create and add new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        font-weight: 500;
        animation: slideDown 0.3s ease-out;
        ${type === 'success' 
            ? 'background: #d1fae5; color: #065f46;' 
            : 'background: #fee2e2; color: #991b1b;'
        }
    `;

    contactForm.parentElement.insertBefore(messageDiv, contactForm);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================================================
// Scroll Animations
// ============================================================================

function initializeScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('.animate-slide-up').forEach(el => {
            el.classList.add('animate-fade-in');
        });
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.animate-slide-up, .portfolio-card, .service-card').forEach(el => {
        observer.observe(el);
    });
}

// ============================================================================
// Hero Section Animations
// ============================================================================

function initializeHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');

    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            applyAnimateEffect(heroTitle, 'fadeInDown', 0.8);
        }, 100);
    }

    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            applyAnimateEffect(heroSubtitle, 'fadeInUp', 0.8);
        }, 300);
    }

    if (ctaButton) {
        ctaButton.style.opacity = '0';
        ctaButton.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            applyAnimateEffect(ctaButton, 'zoomIn', 0.8);
        }, 500);
    }

    // CTA button interaction
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const targetLink = ctaButton.getAttribute('data-link');
            if (targetLink) {
                smoothScrollToSection(targetLink);
            }
        });
    }
}

// ============================================================================
// Animate.js Integration
// ============================================================================

function checkAnimateLibraryAvailability() {
    if (typeof anime !== 'undefined') {
        state.animateLibraryLoaded = true;
        console.log('Anime.js library loaded successfully');
    } else {
        console.warn('Anime.js library not available, using CSS animations as fallback');
    }
}

function applyAnimateEffect(element, effect, duration = 0.6) {
    if (state.animateLibraryLoaded && typeof anime !== 'undefined') {
        // Use Anime.js if available
        anime({
            targets: element,
            duration: duration * 1000,
            easing: 'easeOutQuad',
            opacity: [0, 1],
            translateY: [effect.includes('Down') ? -30 : 30, 0]
        });
    } else {
        // Fallback to CSS animations
        element.style.animation = `slideUp ${duration}s ease-out forwards`;
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }
}

// ============================================================================
// Utility Functions
// ============================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check for reduced motion preference
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ============================================================================
// Performance Optimization
// ============================================================================

// Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Request animation frame for smooth animations
function animateFrame(callback) {
    if ('requestAnimationFrame' in window) {
        window.requestAnimationFrame(callback);
    } else {
        setTimeout(callback, 1000 / 60);
    }
}

// ============================================================================
// Scroll event optimization with debounce
// ============================================================================

const debouncedScroll = debounce(updateActiveLinkOnScroll, 100);
window.addEventListener('scroll', debouncedScroll, { passive: true });

// ============================================================================
// Error Handling
// ============================================================================

window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

// ============================================================================
// Service Worker Registration (Optional)
// ============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be registered here for PWA functionality
    });
}

// Export functions for testing if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        smoothScrollToSection,
        handleFormSubmission,
        isValidEmail,
        debounce,
        prefersReducedMotion
    };
}
