
// **Montando o jogo 🎰** 

// Essa etapa do projeto consiste em criar um programa que:

// 1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!".

console.log("Bem vindo ao jogo de Blackjack!")

// 2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".

let carta1Usuario  
let carta2Usuario  
let carta1Computador 
let carta2Computdor 

if(confirm("Quer iniciar uma nova rodada?")) {
   carta1Usuario = comprarCarta(); 
   carta2Usuario = comprarCarta(); 
   carta1Computador = comprarCarta(); 
   carta2Computdor = comprarCarta(); 
} else {
   console.log("O jogo acabou!")
    
}

// variaveis contendo respectivamente a soma de pontos do usuário e do computador 
let somaPtsUsuario = carta1Usuario.valor + carta2Usuario.valor
let somaPtsComputador = carta1Computador.valor + carta2Computdor.valor

// Impressão da soma de pontos do usuário e do computador 
console.log(`"Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.valor}  - pontuação ${somaPtsUsuario}`) 
console.log(`"Computador - cartas: ${carta1Computador.texto} ${carta2Computdor.valor}  - pontuação ${somaPtsComputador}`) 

// Um bloco condicional com impressões do resultado do jogo
if (somaPtsUsuario > somaPtsComputador) {
   console.log("O usuário ganhou!")
} else if (somaPtsUsuario < somaPtsComputador){
   console.log("O computador ganhou!")
} else {
   console.log("Empate!")
}
   




    
