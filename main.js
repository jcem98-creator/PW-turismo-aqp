// Modal Toggle
const modal = document.getElementById('passport-modal');
const btn = id('open-passport');
const closeBtn = document.querySelector('.close-modal');

function id(name) { return document.getElementById(name); }

btn.onclick = () => {
    modal.style.display = 'flex';
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};

// Weather Simulation
const temp = id('temp');
setInterval(() => {
    const currentTemp = parseInt(temp.innerText);
    const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
    temp.innerText = (currentTemp + change) + '°C';
}, 10000);

// Nano Banana Style: Scroll-Driven Video
const video = document.getElementById('scroll-video');
const hero = document.getElementById('hero-trigger');

// Function to update video frame based on scroll
function updateVideoFrame() {
    const scrollPos = window.scrollY;
    const scrollHeight = hero.offsetHeight;
    const progress = Math.min(scrollPos / scrollHeight, 1);
    
    if (video.duration) {
        // Map scroll (0 to 1) to video duration
        video.currentTime = progress * video.duration;
    }
}

// Scroll Effect (Header + Video)
window.onscroll = () => {
    const navBar = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        navBar.style.height = '70px';
    } else {
        navBar.style.height = '90px';
    }
    
    // Smoothly update video
    requestAnimationFrame(updateVideoFrame);
};

// Ensure video is ready
video.addEventListener('loadedmetadata', updateVideoFrame);
