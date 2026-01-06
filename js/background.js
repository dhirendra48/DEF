/* Background Animation and Effects */

// Create animated background particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    // Create particle elements
    const particleCount = window.innerWidth > 768 ? 30 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(29, 78, 216, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation to stylesheet
function addParticleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize background when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addParticleAnimation();
    createParticles();
    
    // Recreate particles on resize
    window.addEventListener('resize', () => {
        createParticles();
    });
});

// Parallax effect for hero background
document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.background-3d');
    if (background) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        background.style.backgroundPosition = `${x * 100}px ${y * 100}px`;
    }
});
