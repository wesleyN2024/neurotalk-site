const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});

const elementosReveal = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

elementosReveal.forEach((elemento) => {
  observador.observe(elemento);
});