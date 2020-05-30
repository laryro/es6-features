// default parameters

function semDefault(pessoas) {
  console.log(pessoas[0]); // vai estourar erro de cannot read property 0 of undefined
}

function defaultJeitoAntigo(pessoas) {
  pessoas = pessoas || [];
  console.log(pessoas[0]); // nao vai estourar erro, só vai logar "undefined"
}

function comDefault(pessoas = []) {
  console.log(pessoas[0]); // nao vai estourar erro, só vai logar "undefined"
}

ola();
