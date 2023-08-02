function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/Menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/Fechar.png";
  }
}

// fazer botao afundar e voltar,  e mudar de cor
function pressButton() {
  var button = document.querySelector(".botao__projeto");
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 300);
}

// EFEITO SANFONA - SERVIÇOS

function toggleCard() {
  var card = document.getElementById("myCard");
  card.classList.toggle("expand");
}

function toggleCard2() {
  var card2 = document.getElementById("myCard2");
  card2.classList.toggle("expand");
}
