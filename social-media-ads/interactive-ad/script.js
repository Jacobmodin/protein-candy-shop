// ===================================
// Particle Animation System
// ===================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5; // 5-15px
        const startX = Math.random() * 100; // 0-100%
        const duration = Math.random() * 10 + 15; // 15-25s
        const delay = Math.random() * 5; // 0-5s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${startX}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// ===================================
// Benefit Cards Click-to-Reveal
// ===================================

function initBenefitCards() {
    const cards = document.querySelectorAll('.benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle active state
            const wasActive = card.classList.contains('active');
            
            // Remove active from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active to clicked card if it wasn't active
            if (!wasActive) {
                card.classList.add('active');
                
                // Add bounce animation
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = '';
                }, 10);
            }
        });
        
        // Hover sound effect (visual feedback)
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('active')) {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('active')) {
                card.style.transform = '';
            }
        });
    });
}

// ===================================
// Product Image Interaction
// ===================================

function initProductImage() {
    const productImage = document.getElementById('productImage');
    let rotation = 0;
    
    productImage.addEventListener('click', () => {
        rotation += 360;
        productImage.style.transition = 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
        productImage.style.transform = `scale(1.2) rotate(${rotation}deg)`;
        
        setTimeout(() => {
            productImage.style.transform = '';
        }, 1000);
    });
    
    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const rect = productImage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 50;
        const deltaY = (e.clientY - centerY) / 50;
        
        if (!productImage.style.transform.includes('scale')) {
            productImage.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
    });
}

// ===================================
// CTA Buttons
// ===================================

function initCTAButtons() {
    const buyButton = document.getElementById('ctaBuy');
    const learnButton = document.getElementById('ctaLearn');
    
    buyButton.addEventListener('click', () => {
        // Ripple effect
        createRipple(buyButton);
        
        // In a real scenario, this would redirect to shop
        setTimeout(() => {
            alert('🎉 Produkten skulle nu läggas till i varukorgen!\n\nI en live-version skulle detta öppna e-handelssidan.');
        }, 300);
    });
    
    learnButton.addEventListener('click', () => {
        createRipple(learnButton);
        
        // Smooth scroll to benefits
        document.querySelector('.benefits-container').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    });
}

function createRipple(button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple-effect 0.6s ease-out';
    
    button.style.position = 'relative';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-effect {
        to {
            transform: translate(-50%, -50%) scale(15);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Scroll Reveal Animations
// ===================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ===================================
// Protein Badge Animation
// ===================================

function animateProteinBadge() {
    const badge = document.querySelector('.protein-badge');
    
    setInterval(() => {
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 2s ease-in-out';
        }, 10);
    }, 5000);
}

// ===================================
// Floating Animation for Cards
// ===================================

function initFloatingCards() {
    const cards = document.querySelectorAll('.benefit-card');
    
    cards.forEach((card, index) => {
        const delay = index * 0.5;
        const duration = 3 + Math.random() * 2;
        
        card.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    });
}

// Add floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ===================================
// Swedish Flag Animation
// ===================================

function initFlagAnimation() {
    const flag = document.querySelector('.sweden-flag');
    
    flag.addEventListener('mouseenter', () => {
        flag.style.transform = 'scale(1.1) rotate(5deg)';
        flag.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
    
    flag.addEventListener('mouseleave', () => {
        flag.style.transform = '';
    });
}

// ===================================
// Keyboard Accessibility
// ===================================

function initKeyboardNav() {
    const cards = document.querySelectorAll('.benefit-card');
    
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Benefit: ${card.querySelector('.benefit-title').textContent}`);
        
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // CTA buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.setAttribute('tabindex', '0');
    });
}

// ===================================
// Performance: Lazy Loading Images
// ===================================

function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Easter Egg: Konami Code
// ===================================

function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Rainbow mode!
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 5000);
    
    alert('🌈 Rainbow mode aktiverat! 🌈');
}

// ===================================
// Mobile Touch Optimizations
// ===================================

function initTouchOptimizations() {
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('.cta-button, .benefit-card');
    
    buttons.forEach(button => {
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            button.click();
        });
    });
}

// ===================================
// Initialize All Features
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🍬 Sweden Protein Candy - Interactive Ad Loading...');
    
    // Initialize all features
    createParticles();
    initBenefitCards();
    initProductImage();
    initCTAButtons();
    initScrollReveal();
    animateProteinBadge();
    initFloatingCards();
    initFlagAnimation();
    initKeyboardNav();
    initLazyLoad();
    initKonamiCode();
    
    // Mobile-specific
    if ('ontouchstart' in window) {
        initTouchOptimizations();
    }
    
    console.log('✅ Interactive Ad Ready!');
    
    // Performance monitoring
    if (window.performance) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page load time: ${pageLoadTime}ms`);
        });
    }
});

// ===================================
// Window Resize Handler
// ===================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized, re-initializing responsive features');
        // Re-initialize features that depend on window size
    }, 250);
});

// ===================================
// Visibility API - Pause animations when tab not visible
// ===================================

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab hidden, pausing animations');
        document.body.style.animationPlayState = 'paused';
    } else {
        console.log('Tab visible, resuming animations');
        document.body.style.animationPlayState = 'running';
    }
});
