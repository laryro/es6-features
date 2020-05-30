
function nomeDaFuncao (parametro) {
  console.log(parametro)
}
nomeDaFuncao('alo')

var funcaoCurta = (nome) => {
  console.log(nome);
}
funcaoCurta("Aline")

var funcaoCurta2 = (nome) => console.log(nome);
funcaoCurta2('alo');

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

var impares = numeros.filter(
  function (numeroAtual) {
      return numeroAtual % 2 > 0;
  }
);

impares = numeros.filter((numeroAtual) => {
  return numeroAtual % 2 > 0;
})

impares = numeros.filter((numeroAtual) => numeroAtual % 2 > 0);
