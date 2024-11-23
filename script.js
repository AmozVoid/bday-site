// Space Background Animation
const body = document.body;
const numStars = 100; // Number of stars

// Create stars dynamically
for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random speed
    star.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    body.appendChild(star);
}
