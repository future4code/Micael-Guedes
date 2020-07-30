// ============================= EXERCÍCIO 1 =============================

//Leia o código abaixo:


const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"?

// RESPOSTA: 
// O código testa se números inseriados pelo usuário no prompt é impar ou par. 
// "Passou no teste" é imprimido quando usuário insere número par.
// "Não passou no teste" é imprimido quando usuário insere número ímpar.


// ============================= EXERCÍCIO 2 =============================

//EXERCÍCIO 2

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


//a. Para que serve o código acima?
// RESPOSTA: O código acima serve para o usuário saber o preço de uma fruta.  


//b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// RESPOSTA  2.25

//c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// RESPOSTA TANTO 5.5 QUANTO 5 



// ============================= EXERCÍCIO 3 =============================

//Leia o código abaixo:


const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


//a. O que a primeira linha está fazendo?
// RESPOSTA Está criando um prompt na tela do usário. Este prompt pede para o usuário digitar o primeiro número. Logo após o usuário digitar um número o "Number" vai transformar a string do prompt em número, e então, amazenará o número na constante "numero."

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// RESPOSTA Se o usuário digitasse o número 10 a mensagem "Esse número passou no teste" apareceria. E se o usuário digitasse o número -10 nenhuma mensagem apareceria pois nao temos else if.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo
// RESPOSTA Sim haverá erro no console pois o programa pede para que a variável "mensagem" seja impressa porém esta variável tem escopo local. 


// ======================= ESCRITA DE CÓDIGO =======================

// EXERCÍCIO 4

// Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idade = prompt("Qual a sua idade?")

if (Number(idade >= 18)) {
  console.log("Você pode dirigir.")
} else {
  console.log("Você não pode dirigir.")
}

// EXERCÍCIO 5

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

// - Exemplo
//     Se o usuário digitar "V", a saída deve ser:
//     "Boa Tarde!"

let turno = prompt('Em qual turno do dia você estuda? Para Matutino digite a letra "M", para Vespertino digite a letra "V", e para Noturno digite a letra "N"').toUpperCase()

if (turno === "M") {
     console.log("Boa dia!")
} else if (turno === "V") {
      console.log("Boa Tarde!")
} else if (turno === "N") {
  console.log("Boa Noite!")
} else {
  console.log("Este turno não existe. Por favor, responda à pergunta novamente.")
}

// EXERCÍCIO 6
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt('Em qual turno do dia você estuda? Para Matutino digite a letra "M", para Vespertino digite a letra "V", e para Noturno digite a letra "N"').toUpperCase()

switch(turno) {
  case "M":
    console.log("Boa dia!")
    break;
  case "V":
    console.log("Boa Tarde!")
    break;
  case "N":
    console.log("Boa Noite!")
    break;
  default:
    console.log("Este turno não existe. Por favor, responda à pergunta novamente.")
}

// EXERCÍCIO 7

// Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("x  

let generoFilme = prompt("Qual dos dois gêneros de filme você gostaria de assistir? Ação ou Fantasia?")

generoFilme = generoFilme.toUpperCase()

const precoFilme = prompt("Quanto você está disposto a gastar no filme? Escolha valores entre R$ 1 e R$ 30")

if (generoFilme === "FANTASIA" && precoFilme < 15) {
  console.log("Bom Filme!")
} else {
  console.log("Escolha outro Filme! :(")
} 









