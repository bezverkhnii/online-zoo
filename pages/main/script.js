const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

/*popup*/
/*content*/

const cardContent = document.createElement('div');

/*btns*/
const cardBtnsArray = document.querySelectorAll(".card-button");
cardBtnsArray.forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelector('.popup').style.display = 'flex';
  });
  document.querySelector('.close').addEventListener('click',function(){
    document.querySelector(".popup").style.display = "none";
  document.querySelector('.popup').addEventListener('click',function(){
    document.querySelector('.popup').style.display = "none";
  })
  });
  cardContent.innerHTML = `<p class="popup-card-content">The best online zoo I’ve met. My son delighted very much ljves
  to
  watch
  gouillas. Online zoo is one jf the ways to instill a love for animals.The best
  online
  zoo
  I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
  the
  ways
  to instill a love for animals.
  The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
  Online
  zoo
  is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
  son
  delighted very much ljves to watch gouillas. Online zoo is one jf the ways to
  instill a
  love
  for animals.</p>`
  const popupContent = document.querySelector('.popup-content');
  popupContent.appendChild(cardContent)
  console.log(popupContent)
})



