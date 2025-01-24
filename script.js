let currentIndex = 0;
const itemsToShow = 4;
const cardsPerShift = 4;

const slider = document.querySelector(".slider");
const totalCards = document.querySelectorAll(".card").length;

function moveSlide(step) {
  const isSmallScreen = window.innerWidth <= 768;
  const shiftAmount = isSmallScreen ? 1 : cardsPerShift;
  currentIndex += step * shiftAmount;
  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  } else if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  const cardWidth = slider.firstElementChild.offsetWidth;
  const offset = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
}
