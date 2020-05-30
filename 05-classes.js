// js classes

class Pessoa {
  constructor(nome, data) {
    this.nome = nome;
    this.data = data;
  }

  getIdade() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.data.getFullYear();
  }

  getNome() {
    return this.nome;
  }
}

class Estudante extends Pessoa {
  constructor(nome, data, escola) {
    super(nome, data);
    this.escola = escola;
  }

  getEscola() {
    return this.escola;
  }
}

let pessoinha = new Pessoa("Laryssa", new Date('1994-09-26'));

let estudante = new Estudante("Aline", new Date(), "FATEC");

console.log(pessoinha.getIdade());