// // EXERCICIO 1
// //O que o código abaixo está fazendo? Qual o resultado impresso no console?


// // let valor = 0
// // for (let i = 0; i < 5; i++) {
// //   valor += i
// // }
// // console.log(valor)


// //RESPOSTA:
// // ESTE PROGRAMA DECLARA UMA VARIÁVEL DE NOME "VALOR" E A INICIALIZA COM VALOR DE 0. 
// // É CRIADO UM LOOP TIPO FOR COMEÇANDO COM VALOR DO INDICE DE 0, COM A CONDIÇÃO DE 
// //CONTINUAÇÃO DO LOOP  ATÉ QUE O VALOR DO ÍNDICE ALCANCE <5, E POSSUI INCREMENT DE 1
// //A CADA LOOP.
// //O PROGRAMA IMPRIMIR NO CONSOLE O RESULTADO DA VARIÁVEL VALOR.


// //EXERCICIO 2

// //Leia o código abaixo:


// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// //   if (numero > 18) {
// // 		console.log(numero)
// // 	}
// // }

// // //a. O que vai ser impresso no console?
// // //RESPOSTA:
// // // Serão impressos na tela os números 19, 21, 23, 25, 27, e 30. 

// // //b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // //RESPOSTA: 
// // // o for of não performa esta ação de acessar o índice de cada elemento. 


// //DESAFIO 1

// //Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? 


// // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // let quantidadeAtual = 0
// // while(quantidadeAtual < quantidadeTotal){
// //   let linha = ""
// //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
// //     linha += "0"
// //   }
// //   console.log(linha)
// //   quantidadeAtual++
// // }

// // fiz na mente e não visualizei então fiz no console pra poder ver resultado =) 
// // aparece 4 linhas a primeira começando com 0, a segunda com 2, assim successivamente até chegar na quara linha.


// //EXERCICIO 3

// // Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// // a. Escreva um programa que:

// // - **Imprima** cada um dos valores do array original.

let arrayOriginal0 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
console.log(arrayOriginal0)

// // b. Escreva um programa que:

// //- **Imprima** cada um dos valores do array original divididos por 10
let arrayOriginal1 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i <arrayOriginal1.length;  i++) {
    const elemento = arrayOriginal1[i]
    console.log(elemento / 10)
}

// // c. Escreva um programa que:

// // - **Crie** um novo array contendo, somente, os números pares do array original.
// // - **Imprima** esse novo array

let arrayOriginal2 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]    
const novoArray = []

for (let i = 0; i < arrayOriginal2.length; ++i) { 
    if ((arrayOriginal2[i] % 2) === 0) {
        novoArray.push(arrayOriginal2[i]);
    }
}

console.log(novoArray)
    

// d. Escreva um programa que:

// - **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
// - **Imprima** este novo array
let arrayOriginal3 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for(let i = 0; i <arrayOriginal3.length; i++){
    console.log(`O elemento do index ${i} é ${arrayOriginal3[i]}`)
}

// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal4 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let numMax = 0
let numMin = 1000

for (let i of arrayOriginal4) {
    if (i > numMax) {
        numMax = i
    } else if (i < numMin ) {
        numMin = i
    }
}

console.log(`O maior número é ${numMax} e o menor númeero é ${numMin}`)

