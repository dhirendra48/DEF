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
    const navOverlay = document.querySelector('.nav-overlay');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open', primaryNav.classList.contains('active'));
            mobileNavToggle.setAttribute('aria-expanded', primaryNav.classList.contains('active'));
        });
        
        // Close menu with X button
        if (navCloseBtn) {
            navCloseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                primaryNav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            });
        }
        
        // Close menu when a link is clicked
        const navLinks = primaryNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                primaryNav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking on overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', function(e) {
                if (e.target === navOverlay) {
                    primaryNav.classList.remove('active');
                    navOverlay.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Select all reveal elements
    const elementsToReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-fade, .project-card, .blog-card, .workshop-card');
    
    elementsToReveal.forEach(el => {
        // checks if element already has class attached to avoid double animations if used alongside class approach
        if (el.classList.contains('project-card') || el.classList.contains('blog-card') || el.classList.contains('workshop-card')) {
             el.classList.add('reveal'); // Ensure legacy cards get the base reveal style
        }
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

    // Safety fallback: Ensure all reveal elements are visible after 3 seconds
    // This prevents content from staying hidden if JS animations fail
    setTimeout(() => {
        const hiddenElements = document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-fade:not(.active)');
        hiddenElements.forEach(el => el.classList.add('active'));
        
        const profileImage = document.querySelector('.profile-image');
        if (profileImage && getComputedStyle(profileImage).opacity === '0') {
             profileImage.style.opacity = '1';
             profileImage.style.transform = 'translateY(0) scale(1)';
        }
    }, 2000);
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
// Skills Loading Animation
function loadSkills() {
    const skillsData = [
        {
            category: 'Programming',
            skills: [
                { name: 'Python', percentage: '90%' },
                { name: 'R', percentage: '85%' },
                { name: 'C,C++', percentage: '80%' },
                { name: 'MATLAB', percentage: '85%' },
                { name: 'JavaScript', percentage: '75%' }
            ]
        },
        {
            category: 'Scientific Tools',
            skills: [
                { name: 'Origin', percentage: '88%' },
                { name: 'GIS Tools', percentage: '80%' },
                { name: 'LaTeX', percentage: '90%' },
                { name: 'Quantum Expresso', percentage: '85%' },
                { name: 'VESTA, XCrySDen', percentage: '82%' }
            ]
        },
        {
            category: 'Soft Skills',
            skills: [
                { name: 'Leadership', percentage: '88%' },
                { name: 'Event Management', percentage: '90%' },
                { name: 'Research', percentage: '92%' },
                { name: 'Team Collaboration', percentage: '89%' },
                { name: 'Communication', percentage: '87%' }
            ]
        }
    ];

    // Simulate loading delay (2.5 seconds)
    setTimeout(() => {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = '';

        const delays = ['', 'delay-200', 'delay-400'];

        skillsData.forEach((skillGroup, index) => {
            const skillCategory = document.createElement('div');
            skillCategory.className = `skill-category reveal-fade ${delays[index]}`;

            const title = document.createElement('h3');
            title.textContent = skillGroup.category;

            const list = document.createElement('ul');
            skillGroup.skills.forEach(skill => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${skill.name} <span class="skill-percentage">${skill.percentage}</span>`;
                list.appendChild(listItem);
            });

            skillCategory.appendChild(title);
            skillCategory.appendChild(list);
            skillsGrid.appendChild(skillCategory);
        });
    }, 2500);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    loadSkills();
});