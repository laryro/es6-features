/*
  diferença entre let, const e var
  e hoisting
*/
var nomeDaFuncao, nomeImutavel;
// var nome = "Laryssa";
// nome = "Fulano"
// let nome2 = "Laryssa"
// nome2 = "Aline"
// const nomeImutavel = "Diego";
// // nomeImutavel = "nao vai"

// function name() {
//   var nomeDaFuncao = "ola";
//   console.log(nomeDaFuncao);
// }

// name();

// console.log(nome);

// console.log(nomeDaFuncao);

function scopetestold() {
  var x = 10;
  {
  var x = 100;
  }
  {
  var x = "This is a string even!";
  }
  return x;
 }
 console.log(scopetestold());

 function scopetest(){
  let x = 10;
  {
  let x = 100;
}
{
  let x = "This is a string even!";
  console.log(x)
  }
  return x;
 }

 console.log(scopetest());