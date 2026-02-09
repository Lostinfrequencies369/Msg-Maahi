// MAAHI message - only 5 copies
const maahiMessage = `<p>MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     
MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span>     </p>`;

// Function to insert message into divs
function insertPoemIntoDivs() {
  const textDivs = document.querySelectorAll(".text");
  textDivs.forEach((div) => {
    div.innerHTML = maahiMessage;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");

function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}

// Restart all animations on click/tap
function restartAllAnimations() {
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
  
  setTimeout(() => {
    restartAllAnimations.isRestarting = false;
  }, 100);
}

document.body.addEventListener('click', restartAllAnimations);
document.body.addEventListener('touchend', restartAllAnimations);

window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);