const message = `
  <p>MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span> 　　　 
   MAAHI! you must be aware of the fact that you are the <span>most beautiful person</span> 　　　 </p>
`;

function insertMessage() {
  document.querySelectorAll('.text').forEach(div => {
    div.innerHTML = message;
  });
}

function adjustContentSize() {
  const content = document.querySelector('.content');
  if (!content) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (vh / vw > 1.65) {
    content.style.width = '100%';
    content.style.height = '100%';
    content.style.transform = 'scale(1)';
  } else {
    const scale = Math.min(vw / 1000, vh / 562) * 0.96;
    content.style.transform = `scale(${scale})`;
    content.style.width = '1000px';
    content.style.height = '562px';
  }
}

function restartAnimation() {
  // Sabhi text paragraphs ko select karo
  const textElements = document.querySelectorAll('.text p');
  
  textElements.forEach(p => {
    // Animation remove karo
    p.style.animation = 'none';
    
    // Force reflow (browser ko refresh karne ke liye)
    void p.offsetWidth;
    
    // Animation wapas lagao
    const parent = p.closest('.left, .back, .right');
    if (parent.classList.contains('left')) {
      p.style.animation = 'scrollLeft 120s linear 1 forwards';
    } else if (parent.classList.contains('back')) {
      p.style.animation = 'scrollBack 125s linear 1 forwards';
    } else if (parent.classList.contains('right')) {
      p.style.animation = 'scrollRight 130s linear 1 forwards';
    }
  });
}

// Click/tap event listener
document.body.addEventListener('click', restartAnimation);
document.body.addEventListener('touchend', restartAnimation);

window.addEventListener('load', () => {
  insertMessage();
  adjustContentSize();
});

window.addEventListener('resize', adjustContentSize);