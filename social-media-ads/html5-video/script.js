// Canvas setup
const canvas = document.getElementById('videoCanvas');
const ctx = canvas.getContext('2d');

// Animation state
let animationId = null;
let startTime = null;
let isPaused = false;
let pauseTime = 0;

// Load product image
const productImage = new Image();
productImage.src = 'assets/product-image.svg';

// Animation duration in milliseconds
const DURATION = 15000; // 15 seconds
const FPS = 60;

// Color palette
const colors = {
    green: '#90C850',
    darkGreen: '#70A830',
    black: '#1a1a1a',
    white: '#ffffff',
    gray: '#2d2d2d'
};

// Animation timeline based on requirements:
// 0-2s: Fade in produktbild med zoom-in effekt
// 2-5s: Text "SWEDEN PROTEIN CANDY" slide in från toppen
// 5-8s: Highlight "34g PROTEIN" med puls-effekt
// 8-11s: Visa övriga fördelar med stagger animation
// 11-13s: Text "Godis utan dåligt samvete! 💪"
// 13-15s: Call-to-action "Köp Nu" med produktbild zoom out

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutBounce(t) {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
        return n1 * t * t;
    } else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
}

function drawBackground(time) {
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, colors.black);
    gradient.addColorStop(1, colors.gray);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Animated particles in background
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const x = (canvas.width / particleCount) * i + Math.sin(time / 1000 + i) * 50;
        const y = (time / 50 + i * 100) % canvas.height;
        const size = 5 + Math.sin(time / 500 + i) * 3;
        
        ctx.fillStyle = colors.green + '40'; // with transparency
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawProductImage(time, scale, opacity) {
    if (!productImage.complete) return;
    
    ctx.save();
    ctx.globalAlpha = opacity;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const imgWidth = 400 * scale;
    const imgHeight = 500 * scale;
    
    ctx.translate(centerX, centerY);
    ctx.drawImage(
        productImage,
        -imgWidth / 2,
        -imgHeight / 2,
        imgWidth,
        imgHeight
    );
    
    ctx.restore();
}

function drawText(text, x, y, fontSize, opacity = 1, color = colors.white) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Text shadow for better visibility
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    
    ctx.fillText(text, x, y);
    ctx.restore();
}

function drawTextWithStroke(text, x, y, fontSize, opacity = 1, fillColor = colors.white, strokeColor = colors.black) {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Stroke
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 8;
    ctx.strokeText(text, x, y);
    
    // Fill
    ctx.fillStyle = fillColor;
    ctx.fillText(text, x, y);
    ctx.restore();
}

function drawPulsingText(text, x, y, fontSize, time, pulseSpeed = 1) {
    const scale = 1 + Math.sin(time * pulseSpeed) * 0.1;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    drawTextWithStroke(text, 0, 0, fontSize, 1, colors.green, colors.black);
    ctx.restore();
}

function drawButton(text, x, y, width, height, opacity = 1) {
    ctx.save();
    ctx.globalAlpha = opacity;
    
    // Button background
    const gradient = ctx.createLinearGradient(x - width/2, y - height/2, x - width/2, y + height/2);
    gradient.addColorStop(0, colors.green);
    gradient.addColorStop(1, colors.darkGreen);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(x - width/2, y - height/2, width, height, 30);
    ctx.fill();
    
    // Button text
    ctx.fillStyle = colors.black;
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    
    ctx.restore();
}

function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    if (isPaused) {
        animationId = requestAnimationFrame(animate);
        return;
    }
    
    const elapsed = timestamp - startTime - pauseTime;
    const progress = Math.min(elapsed / DURATION, 1);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    drawBackground(elapsed);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Timeline animations
    
    // 0-2s: Fade in produktbild med zoom-in effekt
    if (elapsed < 2000) {
        const t = elapsed / 2000;
        const opacity = easeInOutCubic(t);
        const scale = 0.6 + easeInOutCubic(t) * 0.4; // zoom from 0.6 to 1.0
        drawProductImage(elapsed, scale, opacity);
    }
    // Product image continues to show
    else if (elapsed < 13000) {
        drawProductImage(elapsed, 1, 1);
    }
    
    // 2-5s: Text "SWEDEN PROTEIN CANDY" slide in från toppen
    if (elapsed >= 2000 && elapsed < 5000) {
        const t = (elapsed - 2000) / 3000;
        const yOffset = (1 - easeOutBounce(t)) * -200;
        const opacity = easeInOutCubic(Math.min(t * 2, 1));
        
        drawTextWithStroke('SWEDEN PROTEIN CANDY', centerX, 150 + yOffset, 64, opacity, colors.green, colors.black);
    }
    // Keep showing after animation
    else if (elapsed >= 5000 && elapsed < 11000) {
        drawTextWithStroke('SWEDEN PROTEIN CANDY', centerX, 150, 64, 1, colors.green, colors.black);
    }
    
    // 5-8s: Highlight "34g PROTEIN" med puls-effekt
    if (elapsed >= 5000 && elapsed < 8000) {
        const t = (elapsed - 5000) / 3000;
        const opacity = easeInOutCubic(Math.min(t * 2, 1));
        
        if (opacity > 0.1) {
            drawPulsingText('34g PROTEIN', centerX, centerY + 250, 72, (elapsed - 5000) / 200, 3);
        }
    }
    
    // 8-11s: Visa övriga fördelar med stagger animation
    if (elapsed >= 8000 && elapsed < 11000) {
        const benefits = [
            '+ L-Arginin',
            '+ Koenzym Q10',
            '+ Vitamin B-Komplex'
        ];
        
        benefits.forEach((benefit, index) => {
            const delay = index * 400; // stagger delay
            const benefitStart = 8000 + delay;
            
            if (elapsed >= benefitStart) {
                const t = Math.min((elapsed - benefitStart) / 800, 1);
                const opacity = easeInOutCubic(t);
                const xOffset = (1 - easeInOutCubic(t)) * 300;
                
                drawText(
                    benefit,
                    centerX + xOffset,
                    centerY - 100 + index * 60,
                    36,
                    opacity,
                    colors.green
                );
            }
        });
    }
    
    // 11-13s: Text "Godis utan dåligt samvete! 💪"
    if (elapsed >= 11000 && elapsed < 13000) {
        const t = (elapsed - 11000) / 2000;
        const opacity = easeInOutCubic(t);
        const scale = 0.5 + easeInOutCubic(t) * 0.5;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.scale(scale, scale);
        drawTextWithStroke('Godis utan dåligt samvete! 💪', 0, 0, 56, opacity, colors.white, colors.black);
        ctx.restore();
    }
    
    // 13-15s: Call-to-action "Köp Nu" med produktbild zoom out
    if (elapsed >= 13000) {
        const t = (elapsed - 13000) / 2000;
        
        // Zoom out product image
        const scale = 1 - easeInOutCubic(t) * 0.3;
        const opacity = 1 - easeInOutCubic(t) * 0.5;
        drawProductImage(elapsed, scale, opacity);
        
        // Show CTA button
        const buttonOpacity = easeInOutCubic(t);
        const buttonY = centerY + (1 - easeInOutCubic(t)) * 100;
        drawButton('KÖP NU', centerX, buttonY, 300, 80, buttonOpacity);
        
        // Company info
        if (t > 0.3) {
            const textOpacity = easeInOutCubic((t - 0.3) / 0.7);
            drawText('JA::CO AB, Göteborg', centerX, canvas.height - 60, 24, textOpacity, colors.green);
        }
    }
    
    // Loop or stop
    if (progress < 1) {
        animationId = requestAnimationFrame(animate);
    } else {
        // Animation complete - could loop or stop
        console.log('Animation complete');
    }
}

// Control buttons
document.getElementById('playBtn').addEventListener('click', () => {
    if (isPaused) {
        isPaused = false;
        pauseTime += Date.now() - pauseTime;
    } else if (!animationId) {
        startTime = null;
        pauseTime = 0;
        animationId = requestAnimationFrame(animate);
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    isPaused = true;
    pauseTime = Date.now();
});

document.getElementById('restartBtn').addEventListener('click', () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    startTime = null;
    pauseTime = 0;
    isPaused = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animationId = requestAnimationFrame(animate);
});

// Wait for image to load before starting
productImage.onload = () => {
    console.log('Product image loaded');
    // Auto-start animation
    animationId = requestAnimationFrame(animate);
};

// If image fails to load, continue anyway with text only
productImage.onerror = () => {
    console.warn('Failed to load product image, continuing with text only');
    animationId = requestAnimationFrame(animate);
};
