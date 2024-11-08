const cardsContainer = document.querySelector('.cards-container');
const cardWidth = document.querySelector('.card').offsetWidth + 20;

function slideCards() {
  cardsContainer.style.transition = 'transform 5s ease-in-out';
  cardsContainer.style.transform = `translateX(-${cardWidth}px)`;
}

function handleLoop() {
  const firstCard = cardsContainer.querySelector('.card');
  cardsContainer.appendChild(firstCard);
  cardsContainer.style.transition = 'none';
  cardsContainer.style.transform = 'translateX(0)';
  setTimeout(slideCards, 50);
}

slideCards();
cardsContainer.addEventListener('transitionend', handleLoop);

setInterval(slideCards, 7000);