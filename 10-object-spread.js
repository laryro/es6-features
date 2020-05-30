const carrinho = {
  produto: "produto",
  sku: 879789789,
  valor: 15.50,
  quantidade: 100,
  marca: "Bombril"
};

let objetoNovo = {
  ...carrinho,
  quantidade: 200,
}

let objetoNovo = {
  ...carrinho,
  categoria: 'Limpeza',
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let novosNumeros = [
  ...numeros, 11, 12, 13
]