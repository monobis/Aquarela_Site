function mostrarResultado() {
  const selecionados = document.querySelectorAll("input[type=checkbox]:checked");
  const resultado = document.getElementById("resultado");
  const resposta = document.getElementById("resposta");

  if (selecionados.length === 0) {
    resposta.innerText = "Você não selecionou nenhuma opção!";
  } else {
    let escolhas = [];
    selecionados.forEach(el => escolhas.push(el.parentElement.innerText.trim()));
    resposta.innerText = "Você gosta de: " + escolhas.join(", ") + ".";
  }

  resultado.style.display = "block";
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  mostrarResultado();
});
