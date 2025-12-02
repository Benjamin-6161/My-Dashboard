export function createStars(count = 150) {
  const sky = document.querySelector('.sky');
  
  //Remove old stars if regenerating
  sky.querySelectorAll('.star').forEach(star => star.remove());

  const pageWidth = document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size = Math.random() * 2 + 1;

    const x = Math.random() * pageWidth;
    const y = Math.random() * pageHeight;

    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.animationDuration = duration + 's';
    star.style.animationDelay = delay + 's';

    sky.appendChild(star);
  }
}
export function createShootingStar() {
  const sky = document.querySelector('.sky');
  const star = document.createElement('div');

  star.classList.add('shooting-star');

  const startX = Math.random() * 40; // 
  const startY = Math.random() * 30; // 
  
  star.style.left = startX + 'vw';
  star.style.top = startY + 'vh';
  
  sky.appendChild(star);
 
  setTimeout(() => {
    star.remove();
  }, 1300); 

  // Schedule the next shooting star
  const nextDelay = (Math.random() * 15 + 5) * 1000;
  setTimeout(createShootingStar, nextDelay);
}
