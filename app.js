// Percentage counter animation - now more realistic
function animateCounter() {
    const percentageElement = document.getElementById('percentage');
    let current = 0;
    const target = 73; // Fixed at 73% to show realistic development progress
    const increment = 0.5;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
            // Add small random variations
            setTimeout(() => {
                addProgressVariation();
            }, 3000);
        }
        percentageElement.textContent = Math.floor(current);
    }, 50);
}

// Add small realistic progress variations
function addProgressVariation() {
    const percentageElement = document.getElementById('percentage');
    const progressFill = document.querySelector('.progress-fill');
    
    // Small increments (73% -> 74% -> 75% etc over time)
    const currentProgress = parseInt(percentageElement.textContent);
    const maxProgress = Math.min(85, currentProgress + Math.floor(Math.random() * 3) + 1);
    
    let current = currentProgress;
    const increment = 0.2;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= maxProgress) {
            current = maxProgress;
            clearInterval(timer);
            // Schedule next small increment
            setTimeout(() => {
                addProgressVariation();
            }, Math.random() * 10000 + 15000); // 15-25 seconds
        }
        percentageElement.textContent = Math.floor(current);
        progressFill.style.width = Math.floor(current) + '%';
    }, 100);
}

// Realistic development phases
const developmentPhases = [
    { phase: "Tervezés folyamatban", progress: 73 },
    { phase: "Adatbázis tervezés", progress: 75 },
    { phase: "API fejlesztés", progress: 77 },
    { phase: "Frontend komponensek", progress: 79 },
    { phase: "Tesztelés", progress: 82 },
    { phase: "Finomhangolás", progress: 85 }
];

let currentPhaseIndex = 0;

function updateDevelopmentPhase() {
    const loadingText = document.querySelector('.loading-text');
    const phase = developmentPhases[currentPhaseIndex];
    
    loadingText.style.opacity = '0';
    
    setTimeout(() => {
        loadingText.textContent = phase.phase;
        loadingText.style.opacity = '1';
        
        // Update progress to match phase
        updateProgressToValue(phase.progress);
        
        currentPhaseIndex = (currentPhaseIndex + 1) % developmentPhases.length;
    }, 500);
}

function updateProgressToValue(targetValue) {
    const percentageElement = document.getElementById('percentage');
    const progressFill = document.querySelector('.progress-fill');
    const currentValue = parseInt(percentageElement.textContent);
    
    if (currentValue < targetValue) {
        let current = currentValue;
        const increment = 0.3;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
            }
            percentageElement.textContent = Math.floor(current);
            progressFill.style.width = Math.floor(current) + '%';
        }, 80);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateCounter();
    createFloatingCode();
    
    // Update development phase every 8 seconds
    setInterval(updateDevelopmentPhase, 8000);
    
    // Add some interactivity to the logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.textShadow = '0 0 40px rgba(29, 205, 159, 0.8)';
    });
    
    logo.addEventListener('mouseleave', () => {
        logo.style.textShadow = '0 0 20px rgba(29, 205, 159, 0.3)';
    });
});

// Add smooth scrolling effect for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';
    
    if (hour < 6) greeting = '🌙';
    else if (hour < 12) greeting = '🌅';
    else if (hour < 18) greeting = '☀️';
    else greeting = '🌆';
    
    // Could be used to add dynamic content based on time
    console.log(`Welcome to CodeLingo! ${greeting}`);
}

updateGreeting();
