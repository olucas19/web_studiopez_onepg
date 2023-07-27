// fazer o MENU aparecer e ao clicar em Fechar ele desaparecer

document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu");
  const fecharMenuButton = document.querySelector(
    ".cabecalho__menu-hamburguer"
  );
  const listaMenu = document.querySelector(".lista-menu");

  fecharMenuButton.addEventListener("click", function () {
    menuCheckbox.checked = true;
    listaMenu.style.display = "block";
  });
});

// fazer botao afundar e voltar,  e mudar de cor

document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu");
  const fecharMenuButton = document.querySelector(".fechar-menu");
  const listaMenu = document.querySelector(".lista-menu");

  fecharMenuButton.addEventListener("click", function () {
    menuCheckbox.checked = false;
    listaMenu.style.display = "none";
  });
});

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
