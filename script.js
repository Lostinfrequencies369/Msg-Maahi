// MAAHI message - repeated 20 times for seamless loop
const maahiMessage = `<p>MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     </p>`;

// Insert message into text divs
function insertPoemIntoDivs() {
  const textDivs = document.querySelectorAll(".text");
  textDivs.forEach((div) => {
    div.innerHTML = maahiMessage;
  });
}

// Responsive sizing - NO transform scale (prevents blur)
function adjustContentSize() {
  const contentDiv = document.querySelector(".content");
  const viewportWidth = window.innerWidth;
  
  // Only apply scaling on desktop if needed
  if (viewportWidth > 1100 && viewportWidth < 1280) {
    const scaleFactor = viewportWidth / 1280;
    contentDiv.style.transform = `scale(${scaleFactor})`;
  } else if (viewportWidth >= 1280) {
    contentDiv.style.transform = 'scale(1)';
  }
  // Mobile/tablet handled by CSS media queries
}

// Restart all animations on click/tap
function restartAllAnimations(e) {
  // Prevent multiple rapid triggers
  if (restartAllAnimations.isRestarting) return;
  restartAllAnimations.isRestarting = true;
  
  // Text animations
  const textElements = document.querySelectorAll('.text p');
  textElements.forEach(p => {
    const parent = p.closest('.left, .back, .right');
    p.style.animation = 'none';
    void p.offsetWidth;
    
    if (parent && parent.classList.contains('left')) {
      p.style.animation = '200s linear infinite left';
    } else if (parent && parent.classList.contains('back')) {
      p.style.animation = '200s linear infinite back';
    } else if (parent && parent.classList.contains('right')) {
      p.style.animation = '200s linear infinite right';
    }
  });
  
  // Container-full zoom
  const containerFull = document.querySelector('.container-full');
  if (containerFull) {
    containerFull.style.animation = 'none';
    void containerFull.offsetWidth;
    containerFull.style.animation = '200s linear infinite zoom-in';
  }
  
  // Boy image blur
  const boyImage = document.querySelector('.boyImage');
  if (boyImage) {
    boyImage.style.animation = 'none';
    void boyImage.offsetWidth;
    boyImage.style.animation = '200s linear infinite blur';
  }
  
  // Content brightness
  const content = document.querySelector('.content');
  if (content) {
    content.style.animation = 'none';
    void content.offsetWidth;
    content.style.animation = '200s linear infinite brightness';
  }
  
  // Hue filter
  const hue = document.querySelector('.hue.animated');
  if (hue) {
    hue.style.animation = 'none';
    void hue.offsetWidth;
    hue.style.animation = '8s infinite filter-animation';
  }
  
  // Reset flag after 100ms
  setTimeout(() => {
    restartAllAnimations.isRestarting = false;
  }, 100);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  insertPoemIntoDivs();
  adjustContentSize();
});

document.body.addEventListener('click', restartAllAnimations);
document.body.addEventListener('touchend', restartAllAnimations);

window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);