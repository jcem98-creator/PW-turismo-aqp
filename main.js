// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-menu');

if (mobileBtn) {
    mobileBtn.onclick = () => {
        navLinks.classList.toggle('active');
    };
}

// Modal Toggle
const modal = document.getElementById('passport-modal');
const openPassportBtn = document.getElementById('open-passport');
const closeBtn = document.querySelector('.close-modal');

if (openPassportBtn) {
    openPassportBtn.onclick = () => {
        modal.style.display = 'flex';
    };
}

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
}

window.onclick = (e) => {
    if (modal && e.target == modal) {
        modal.style.display = 'none';
    }
};

// Weather Simulation
const temp = document.getElementById('temp');
if (temp) {
    setInterval(() => {
        const currentTemp = parseInt(temp.innerText);
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        temp.innerText = (currentTemp + change).toString().replace('.', ',') + '°';
    }, 10000);
}

// Nano Banana Style: Scroll-Driven Video
const video = document.getElementById('scroll-video');
const hero = document.getElementById('hero-trigger');

function updateVideoFrame() {
    if (!video || !hero) return;
    const scrollPos = window.scrollY;
    const scrollHeight = hero.offsetHeight;
    const progress = Math.min(scrollPos / scrollHeight, 1);
    
    if (video.duration) {
        video.currentTime = progress * video.duration;
    }
}

// Scroll Effect (Header + Video)
window.onscroll = () => {
    const navBar = document.querySelector('.main-nav');
    if (navBar) {
        if (window.scrollY > 50) {
            navBar.style.height = '60px'; // Shorter on mobile/scrolled
        } else {
            navBar.style.height = '90px';
        }
    }
    
    if (video) requestAnimationFrame(updateVideoFrame);
};

if (video) {
    video.addEventListener('loadedmetadata', updateVideoFrame);
}
