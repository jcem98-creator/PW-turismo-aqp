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

// Scroll Effect
window.onscroll = () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
