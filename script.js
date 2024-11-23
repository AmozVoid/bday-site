// script.js

const background = document.querySelector('.background');

// Generate stars
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Randomize size and position for depth effect
  const size = Math.random() * 4 + 1; // Stars range from 1px to 5px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;

  // Adjust animation duration based on size (larger stars move faster)
  const duration = Math.random() * 3 + 2; // 2s to 5s duration
  star.style.animationDuration = `${duration}s`;

  background.appendChild(star);

  // Remove star after animation ends to free memory
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// Continuously generate stars
setInterval(createStar, 100); // Create a new star every 100ms
