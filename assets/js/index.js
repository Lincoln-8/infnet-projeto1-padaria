const cardProduto = document.querySelectorAll(".card-produto-conteudo");
const buttonMenos = document.querySelectorAll(".button-menos");
const buttonMais = document.querySelectorAll(".button-mais");
const valorProduto = document.querySelectorAll(".valor-produto");
const valorTotalProduto = document.querySelectorAll(".valor-total-produto");

buttonMenos.forEach((valor, i) => {
  buttonMenos[i].addEventListener("click", () => {
    const valorPP = parseFloat(valorProduto[i].innerHTML); // valor do produto parseado
    const valorTP = parseFloat(valorTotalProduto[i].innerHTML); // valor total do produto parseado

    if (valorTP > 0) {
      valorTotalProduto[i].innerHTML = valorTP - valorPP;
    }
  });
});

buttonMais.forEach((valor, i) => {
  buttonMais[i].addEventListener("click", () => {
    const valorPP = parseFloat(valorProduto[i].innerHTML); // valor do produto parseado
    const valorTP = parseFloat(valorTotalProduto[i].innerHTML); // valor total do produto parseado
    //let valorTotal = (valorTP + valorPP).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    //valorTotal = valorTotal.trim();

    valorTotalProduto[i].innerHTML = valorPP + valorTP;
  });
});
