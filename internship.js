const crdcontain = document.querySelector('.cards-container');
const cardWidth = document.querySelector('.card').offsetWidth + 20;

function slideCards() {
  crdcontain.style.transition = 'transform 5s ease-in-out';
  crdcontain.style.transform = `translateX(-${cardWidth}px)`;
}

function handleLoop() {
  const firstCard = crdcontain.querySelector('.card');
  crdcontain.appendChild(firstCard);
  crdcontain.style.transition = 'none';
  crdcontain.style.transform = 'translateX(0)';
  setTimeout(slideCards, 50);
}

slideCards();
crdcontain.addEventListener('transitionend', handleLoop);

setInterval(slideCards, 7000);