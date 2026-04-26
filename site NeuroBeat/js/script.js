// Busca o botão do menu mobile no HTML
const menuMobile = document.getElementById("menuMobile");

// Busca o menu principal no HTML
const menu = document.getElementById("menu");

// Verifica se o botão mobile e o menu realmente existem antes de usar
if (menuMobile && menu) {
  // Adiciona o evento de clique no botão do menu mobile
  menuMobile.addEventListener("click", () => {
    // Alterna a classe "ativo" para mostrar ou esconder o menu
    menu.classList.toggle("ativo");
  });
}

// Seleciona todos os links dentro do menu
document.querySelectorAll(".menu a").forEach((link) => {
  // Para cada link do menu, adiciona um evento de clique
  link.addEventListener("click", () => {
    // Se o menu existir, remove a classe "ativo"
    // Isso faz o menu mobile fechar ao clicar em uma opção
    if (menu) {
      menu.classList.remove("ativo");
    }
  });
});

// Seleciona todos os elementos que devem aparecer com animação ao rolar a página
const elementosRevelar = document.querySelectorAll(".revelar");

// Verifica se o navegador suporta IntersectionObserver
if ("IntersectionObserver" in window) {
  // Cria um observador para detectar quando os elementos entram na tela
  const observer = new IntersectionObserver((entradas) => {
    // Percorre cada entrada observada
    entradas.forEach((entrada) => {
      // Se o elemento estiver visível na área da tela
      if (entrada.isIntersecting) {
        // Adiciona a classe "ativo" para disparar a animação no CSS
        entrada.target.classList.add("ativo");
      }
    });
  }, {
    // Define o percentual mínimo do elemento visível
    // antes de ativar a animação
    threshold: 0.15
  });

  // Faz o observer observar cada elemento com a classe "revelar"
  elementosRevelar.forEach((elemento) => {
    observer.observe(elemento);
  });

} else {
  // Caso o navegador não suporte IntersectionObserver,
  // deixa todos os elementos visíveis normalmente
  elementosRevelar.forEach((elemento) => {
    elemento.classList.add("ativo");
  });
}