document.addEventListener("DOMContentLoaded", () => {
    const animatedCards = document.querySelectorAll(".animate-card");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.05 // Fires smoothly right as a tiny edge of the card glides on screen
    };

    const cardRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("pop-active");
                observer.unobserve(entry.target); // Unhooks to protect system memory
            }
        });
    }, observerOptions);

    animatedCards.forEach(card => {
        cardRevealObserver.observe(card);
    });
});
let originalTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back soon! 🥺💖";
});
window.addEventListener("focus", () => {
    document.title = originalTitle;
});
document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("span");
    heart.className = "cursor-heart";
    heart.innerHTML = Math.random() < 0.5 ? "💖" : "💙";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    
    // Randomize slight drift vectors
    const size = Math.random() * 12 + 8;
    heart.style.fontSize = size + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
document.addEventListener("dblclick", (e) => {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("span");
        heart.className = "cursor-heart";
        heart.innerHTML = Math.random() < 0.5 ? "🌸" : "✨";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        
        // Randomize direction vectors for an explosion effect
        heart.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
        heart.style.transition = "all 1s ease-out";
        
        document.body.appendChild(heart);
        
        // Force rendering and animate separation
        setTimeout(() => {
            heart.style.opacity = "0";
            heart.style.top = (e.clientY + 50) + "px";
        }, 10);
        
        setTimeout(() => { heart.remove(); }, 1000);
    }
});
function createBackgroundSparkle() {
    const sparkle = document.createElement("span");
    sparkle.className = "bg-sparkle";
    sparkle.innerHTML = Math.random() < 0.5 ? "✨" : "🌸";
    
    // Randomize position across the entire window width
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = window.innerHeight + window.scrollY + "px";
    
    // Randomize size and speed
    const size = Math.random() * 10 + 8;
    sparkle.style.fontSize = size + "px";
    sparkle.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3 to 6 seconds
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => { sparkle.remove(); }, 6000);
}
// Generate a new background sparkle every 800ms
setInterval(createBackgroundSparkle, 800);