// Add event listener to the redirect button
const enterBtn = document.getElementById('enterBtn');

if (enterBtn) {
    enterBtn.addEventListener('click', function(e) {
        // Add dramatic burst effect
        createBurst(this);
        
        // Small delay for visual effect, then allow normal navigation
        e.preventDefault();
        setTimeout(function() {
            window.location.href = 'https://github.com/KAgastya01';
        }, 300);
    });
}

// Create burst effect on click
function createBurst(button) {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = 'radial-gradient(circle, #d4af9f, #8b5a2b)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.boxShadow = '0 0 15px rgba(139, 90, 43, 0.8)';
        particle.style.zIndex = '999';
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(particle);
        
        let px = x, py = y, pvx = vx, pvy = vy;
        const decay = 0.98;
        
        const animate = () => {
            px += pvx;
            py += pvy;
            pvx *= decay;
            pvy *= decay;
            pvy += 0.2; // gravity
            
            particle.style.left = px + 'px';
            particle.style.top = py + 'px';
            particle.style.opacity = Math.max(0, 1 - (Date.now() - startTime) / 600);
            
            if (Date.now() - startTime < 600) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        const startTime = Date.now();
        animate();
    }
}

// Mouse glow effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const style = document.documentElement.style;
    style.setProperty('--mouse-x', mouseX);
    style.setProperty('--mouse-y', mouseY);
});
