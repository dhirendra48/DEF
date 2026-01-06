/* Main JavaScript Functionality */

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    htmlElement.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Mobile Navigation Toggle
function initMobileNav() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', primaryNav.classList.contains('active'));
        });
        
        // Close menu when a link is clicked
        const navLinks = primaryNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function activateLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', activateLink);
    activateLink();
}

// Scroll to Top Button
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe project cards, blog cards, workshop cards
    document.querySelectorAll('.project-card, .blog-card, .workshop-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Typing Effect for Hero Text
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const phrases = [
        'Physics | Meteorology Student | Researcher',
        'Biophysics Enthusiast',
        'Materials Science Explorer',
        'Computational Physics Practitioner',
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
                return;
            }
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 2000);
                return;
            }
        }
        
        setTimeout(type, 50);
    }
    
    type();
}

// Enhanced Profile Image Hover Effect
function initProfileImageEffect() {
    const profileImage = document.querySelector('.profile-image');
    
    if (profileImage) {
        // Add entrance animation
        setTimeout(() => {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'translateY(0) scale(1)';
        }, 500);
    }
}

// Create particle effects around profile image
function createProfileParticles() {
    // Simplified - removed particle creation
}

// Add particle animation to stylesheet
function addProfileParticleAnimation() {
    // Simplified - removed particle animations
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initMobileNav();
    initSmoothScroll();
    updateActiveNavLink();
    initScrollTop();
    initIntersectionObserver();
    initTypingEffect();
    initProfileImageEffect();
    addProfileParticleAnimation();
    createProfileParticles();
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Scroll to top on Home key
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Toggle theme on Ctrl/Cmd + Shift + L
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        document.getElementById('theme-toggle')?.click();
    }
});

// Accessibility: Announce navigation changes
function announceNavChange(sectionName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = `Navigated to ${sectionName} section`;
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
}
