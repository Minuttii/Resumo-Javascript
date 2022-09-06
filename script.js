//
//
//
// client (html | css | javascript)
// server (node.js | javascript)
// 
// 
// 
// Variáveis sabem o próprio tipo
let nome = 'minutti' //String (texto)
let idade = 18 //int (inteiro)
let altura = 1.75 //float (número com vírgula)
let minuttiBebe = true //boolean (true|false)
let dinheiro //undefined

//Criar uma array (lista)

let listaDeChamada = [
    'Jorge',
    'João',
    'Godói',
] //Lista de string

//Objeto 
let pessoa = {
    nome: 'João',
    altura: 1.75,
    casado: true,
    idade: 18,
    ra: 0 
}

//Condição
if(pessoa.altura > 1.60) {
    console.log("Você não é mediano")
} else if(pessoa.altura > 1.90) {
    console.log(`Você é alto`);
} else {
    console.log("Você é baixo")
}

// O for é para repetir coisas
// i é uma variavel com valor inicial de zero
// depois verifica-se o valor dele (se i é menor do que o valor na direita, no caso 10)
// Depois, a condição dentro das chaves {} é executada
// E depois, soma-se 1 na variável i (i++)
for(i = 0; i < 10; i++) {
    console.log(`Sou o ${i}° aluno`)
}

console.log(`Welcome ${pessoa.nome}!`);

function maiorDeIdade(idade) { 
  if(idade >= 18) {
    return true
  }
  
  return false
}

console.log(maiorDeIdade(pessoa.idade))
