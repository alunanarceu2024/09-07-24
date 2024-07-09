// Tipos de variaveis:
const variavel1 // Variavel constante
let variavel2 // Variavel mutavel
var variavel3 // Variavel global obs: pouco utilizada

// Conceito de local e Global

const nome0 = 'João' // Variavel Contante não permite trocar valor 
let nome1 = 'batista' //Vaiavel mutavel permite trocar valor
var nome2 = 'Silva' // Variavel global permite trocar valor
nome0 = 'Pedro'
nome1 = 'João'

var teste1 = 'teste1' // Variavel global local

function funcao0 () {
  const teste0 = 'teste' // Variavel constante local.
  var tesst1 = 'teste' // Variavel global local.
  return {teste0,teste1}
} 

function funcao1 () {
  const teste0 = 'teste' // Variavel constante local
  return {teste0,teste1}
} 

// Condicionais

if (0<2){
  console.log('0 é menor que 2')
}

if(0 < -2){
  console.log('0 é menor que 2')
} else {
  console.log('0 não é menor que 2')
}
if(0 < -2){
  console.log('false')
} else if(0 < 2){
  console.log('verdadeiro')
} else {
  console.log('Else verdadeiro')
}