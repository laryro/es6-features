// template literals || string interpolation

function escrevaSaudacaoOld(nome, temperatura, cidade) {
  console.log("Olá, " + nome + ". Hoje fazem " + temperatura + "C em " + cidade);
}

escrevaSaudacaoOld("Laryssa", "18º", "São Paulo");

function escrevaSaudacao(nome, temperatura, cidade) {
  console.log(`Olá ${nome}. Hoje fazem ${temperatura}C em ${cidade}`);
}

escrevaSaudacao("Laryssa", "18º", "São Paulo");
