const retorno = {
  produto: "produto",
  sku: 879789789,
  valor: 15.50,
  quantidade: 100,
  marca: "Bombril"
};

const produto = retorno.produto;

const { sku, valor, quantidade } = retorno;

let texto = () => {
  return `Você está compando ${quantidade} unidades do produto ${produto} por ${valor}, saindo no total=${valor * quantidade}`;
};

texto();