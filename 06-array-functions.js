const frutas = [
  "banana",
  "maça",
  "uva"
];

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

let impares = [];
for (var i = 0; i < numeros.length; i++) {
        console.log('ue')
    if (i % 2 > 0) {
        impares.push(i);
    }
}
let impares2 = [];
impares2 = numeros.filter(
  function (numeroAtual) {
      return numeroAtual % 2 > 0;
  })

  let numeroPorExtenso = [];
for (var i = 0; i < numeros.length; i++) {
    numeroPorExtenso.push("Numero " + numeros[i]);
}
let numeroPorExtenso2 = [];
numeroPorExtenso2 = numeros.map(function(numeroAtual) {
  return "Numero " + numeroAtual;
})

let soma = 0;
for (var i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}

let somaNova = 0;
numeros.reduce(function(somaNova, numeroAtual) {
  return somaNova + numeroAtual;
})