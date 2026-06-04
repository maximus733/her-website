document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. SYSTEM INITIALIZATION GREETING PROMPT
    // ==========================================================================
    setTimeout(() => {
        alert("WELCOME BACK ✨\n\nYou are about to decrypt the private database for the most favorite person in the entire universe. Click OK to proceed.");
        console.log("Database decrypted successfully. Welcome, beautiful! 💖");
    }, 500);

    // ==========================================================================
    // 2. DYNAMIC TAB TITLE TRACKING MONITOR
    // ==========================================================================
    let originalTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back soon! 🥺💖";
    });
    window.addEventListener("focus", () => {
        document.title = originalTitle;
    });

    // ==========================================================================
    // 3. SCROLL-REVEAL INTERSECTION OBSERVER INTERFACE
    // ==========================================================================
    const animatedCards = document.querySelectorAll(".animate-card");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.05
    };

    const cardRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("pop-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedCards.forEach(card => {
        cardRevealObserver.observe(card);
    });

    // ==========================================================================
    // 4. FLOATING CURSOR TRAIL ENGINE (SINGLE CLICKS)
    // ==========================================================================
    document.addEventListener("mousemove", (e) => {
        const heart = document.createElement("span");
        heart.className = "cursor-heart";
        heart.innerHTML = Math.random() < 0.5 ? "💖" : "💙";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        
        const size = Math.random() * 12 + 8;
        heart.style.fontSize = size + "px";
        
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 1000);
    });

    // ==========================================================================
    // 5. DOUBLE-CLICK BACKGROUND CANVAS EXPLOSION ENGINE
    // ==========================================================================
    document.addEventListener("dblclick", (e) => {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement("span");
            heart.className = "cursor-heart";
            heart.innerHTML = Math.random() < 0.5 ? "🌸" : "✨";
            heart.style.left = e.clientX + "px";
            heart.style.top = e.clientY + "px";
            
            heart.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
            heart.style.transition = "all 1s ease-out";
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.opacity = "0";
                heart.style.top = (e.clientY + 50) + "px";
            }, 10);
            
            setTimeout(() => { heart.remove(); }, 1000);
        }
    });

    // ==========================================================================
    // 6. AMBIENT AUTOMATED BACKGROUND GALAXY SPARKLE MATRIX
    // ==========================================================================
    function createBackgroundSparkle() {
        const sparkle = document.createElement("span");
        sparkle.className = "bg-sparkle";
        sparkle.innerHTML = Math.random() < 0.5 ? "✨" : "🌸";
        
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = window.innerHeight + window.scrollY + "px";
        
        const size = Math.random() * 10 + 8;
        sparkle.style.fontSize = size + "px";
        sparkle.style.animationDuration = (Math.random() * 3 + 3) + "s";
        
        document.body.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, 6000);
    }
    setInterval(createBackgroundSparkle, 800);
});

// ==========================================================================
// 7. BACKGROUND AUDIO CONTROLLER TOGGLE LOGIC
// ==========================================================================
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const controller = document.querySelector(".music-controller");
    const text = document.getElementById("musicText");
    const icon = document.getElementById("musicIcon");

    if (music.paused) {
        music.play().catch(error => console.log("Playback blocked:", error));
        text.textContent = "Pause Music";
        icon.innerHTML = "✨";
        controller.classList.add("music-playing");
        controller.style.borderColor = "#ff79c6"; // Turns glowing pink when playing
        controller.style.color = "#8be9fd";       // Font switches to electric cyan
    } else {
        music.pause();
        text.textContent = "Play Music";
        icon.innerHTML = "🎵";
        controller.classList.remove("music-playing");
        controller.style.borderColor = "rgba(139, 233, 253, 0.3)";
        controller.style.color = "#ff79c6";
    }
}
