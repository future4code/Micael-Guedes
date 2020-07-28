// /* ======================
// INTERPRETACAO DE CODIGO
//  ========================
// */


1.
const bool1 = true 
// true

const bool2 = false
// false

const bool3 = !bool2
// true

let resultado = bool1 && bool2
console.log("a. ", resultado)
// false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// true

console.log("e. ", typeof resultado)
// boolean




// 2.

let array
console.log('a. ', array)
// undefined


array = null
console.log('b. ', array)
// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 10

let i = 0
console.log('d. ', array[i])
// 0;

array[i+1] = 19
console.log('e. ', array)
//20

const valor = array[i+6]
console.log('f. ', valor)
//26




/* ======================
ESCRITA DE CODIGO
 ========================
*/

//1.a
const idade = prompt('Qual a sua idade?')
//1.b
const idadeMelhorAmigo = prompt('Qual a idade do seu/sua melhor amig@?')
const diferencaIdade = Number(idade) > Number(idadeMelhorAmigo)
const diferencaIdadeNumber = Number(idade) - Number(idadeMelhorAmigo)
//1.c
console.log("Sua idade é maior do que a do seu melhor amigo?")
console.log(diferencaIdade)
//1.d
console.log(diferencaIdadeNumber)


//2.a 
const numeroPar = prompt('Insira um número Par')
//2.b
console.log(Number(numeroPar % 2));
//2.c Todos os restos das divisões dão 0.
//2.d Todos os restos das divisões dão 1.



//3.
const listaDeTarefas = [];
listaDeTarefas.push(prompt('Qual a primeira tarefa que você precisa realizar hoje?'))
listaDeTarefas.push(prompt('Qual a segunda tarefa que você precisa realizar hoje?'))
listaDeTarefas.push(prompt('Qual a terceira tarefa que você precisa realizar hoje?'))
console.log(listaDeTarefas)
const indiceResolvido = prompt('Qual o índice da tarefa que você já realizou? 0, 1, ou 2?')
listaDeTarefas.splice(Number(indiceResolvido), 1)
console.log(listaDeTarefas)


//4.
const nomeUsuario = prompt('Qual o seu nome?')
const emailUsuario = prompt('Qual o seu email?')
console.log('O email ' + emailUsuario + ' foi cadastrado com sucesso. Seja bem vindo(a), ' + nomeUsuario + '!')










// ========================================================================
// DESAFIOS
// // F -> KELVIN
// //(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

// //CELCIUS -> F
// //(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32


// //a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let kelvin = (77 - 32) * 5/9 + 273.15
console.log(kelvin)





