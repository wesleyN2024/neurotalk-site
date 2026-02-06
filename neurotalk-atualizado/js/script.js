function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");

  if (input.value.trim() === "") return;

  messages.innerHTML += `<div class="user">Você: ${input.value}</div>`;

  setTimeout(() => {
    messages.innerHTML += `<div class="bot">NeuroTalk: Ainda sou um protótipo 🤖</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 800);

  input.value = "";
}


// SWIPER
var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// CARD FLIP (não quebra o swipe)
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", e => {
    e.stopPropagation();
    card.classList.toggle("flip");
  });
});
