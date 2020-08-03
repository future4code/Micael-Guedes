// **Exercícios de interpretação de código**

// EXERCÍCIO 1

// Leia o código abaixo:


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))


// a. O que vai ser impresso no console?
// RESPOSTA 10, e 50

// b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// RESPOSTA Apareceria nada pois a função foi apenas declarada mas não foi chamada. 



// EXERCÍCIO 2

// Leia o código abaixo:


// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)


// a. Explicite quais são as saídas impressas no console
// RESPOSTA Seria impresso apenas os dois primeiros elementos do array. 

// b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console?
// RESPOSTA Seria impresso "Amanda", "Caio" pois eles seriam respectivamente índices 0 e 1.



// EXERCÍCIO 3

// O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela!


//     const metodo = (array) => {
//         let arrayFinal = [];

//         for (let x of array) {
//                 if (x % 2 === 0) {
//                 arrayFinal.push(x * x)
//                 }
//         }

//           return arrayFinal;
// }


//RESPOSTA Este código recebe um array processa este procurando por números pares apenas e insere os números pares encontrados em um nome array, cada número par encontrado é elevado ao quadrado. E retorna o array final. 




// EXERCICIO 4

// Escreva as funções explicadas abaixo:

//a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você: 

// function miniBiografia () {
//     console.log("Eu sou Micael, tenho 32 anos, moro em Salt Lake City e sou um Web Developer.")    
// }

// miniBiografia()



// b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

// RESPOSTA COM PROMPT

// function infoUsuario (nome, idade, cidade, estudante) {
//      nome = prompt("Qual seu nome?")
//      idade = Number(prompt("Qual sua idade?"))
//      cidade =  prompt("Qual o nome da cidade onde mora?")
//      estudante = prompt('Você é estudante? Digite "S" para Sim e "N" para não.').toUpperCase()

//     if (estudante === "S") {
//         profissãoEstudante = "estudante"
//     } else {
//         profissãoEstudante = "não estudante"
//     }
    
//     frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${profissãoEstudante}.`    
//     return resultado = frase
    
// }

// infoUsuario()
// console.log(resultado)



//EXERCICIO 5

// Escreva as funções explicadas abaixo:

// a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function somaNumeros (numero1, numero2) {
//     soma = numero1 + numero2
//     return soma
// }

// somaNumeros(5,2)
// console.log(soma)

// b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function comparacaoNumeros (numero1, numero2) {
//     if (numero1 > numero2) {
//         comparar = "O primeiro número é maior que o segundo número"
//     } else if (numero1 === numero2) {
//         comparar = "O primeiro número é igual ao segundo número"
//     } else {
//         comparar = "O primeiro número é menor que segundo número"
//     }
    
//     return comparar
// }

// comparacaoNumeros(2,2)
// console.log(comparar)


// c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso)

// function imprimeDezVezes(string) {
//     for (i=0; i < 10; i++) {
//         console.log(i, string)
// }
// }
// let mensagem = "de novo"

// imprimeDezVezes(mensagem)



//EXERCICIO 6 

// Para os itens a seguir, considere o seguinte array para os seus testes:


//  const arrayA = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

// function quantidadeElementos (array) {
//         console.log(array.length)
// }

// quantidadeElementos(arrayA)

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numeroPar(number) {
//     if (number%2 === 0) {
//         return true
//     } else if (number%2 === 1) {
//         return false
//     }
// }

// let inputUsuário = prompt("Digite um número")
// let resultadoSeNumeroPar = numeroPar(inputUsuário)
 
// console.log(`O número ${inputUsuário} é Par? Resposta: ${resultadoSeNumeroPar}`)


// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

    const arrayB = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let arrayFinal = [];

    function metodoPar(array) {
        

        for (let x of array) {
                if (x % 2 === 0) {
                arrayFinal.push(x)
                }
        }

          return arrayFinal;
}
metodoPar(arrayB)
console.log(arrayFinal)

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par


function numeroPar(array) {
    if (array[i]%2 === 0) {
        return true
    } else if (array[i]%2 === 1) {
        return false
    }
}


 











// ========================== FIM EXERCICIO ==========================









