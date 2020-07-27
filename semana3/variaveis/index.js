  
// ================================================================================
/* 
== EXERCICIO INTERPRETACAO DE CODIGO ==
1. 
    10
    10, 5
*/

/*
2. 
    10, 20, 10  
*/

// ================================================================================

// 1.a
let nome;

// 1.b
let idade;

// 1.c
console.log(typeof(nome));
console.log(typeof(idade));

// 1.d
/* Foi impresso UNDEFINED para as variáveis nome e idade 
pois elas as declararei mas não atribui valores à elas.
*/

// 1.e 
nome = prompt('qual o seu nome?');
idade = prompt('qual a sua idade?');

// 1.f  
console.log(typeof(nome));
console.log(typeof(idade));
// Notei que o tipo das varíaveis foram de tipo UNDEFINED para tipo STRINGS.

console.log("Olá " + nome + ", você tem " + idade + " anos.");


// ================================================================================

//2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). 
// Imprima-as com as respostas no console da seguinte forma:
 
//    Pergunta 1 
estado = prompt('qual o Estado do país você nasceu?');
console.log("1. Qual o Estado do país você nasceu?");
console.log("Resposta: " + estado);


//    Pergunta 2 
saborSorvete = prompt('Qual é o seu preferido sabor de sorvete?');
console.log("2. Qual é o seu preferido sabor de sorvete?");
console.log("Resposta: " + saborSorvete);

//    Pergunta 3
filmeFavorito = prompt('Qual é o seu filme favorito?');
console.log("3. Qual é o seu filme favorito?");
console.log("Resposta: " + filmeFavorito);

//    Pergunta 4
computadorFavorito = prompt('Você prefere usar computadores PC ou Mac?');
console.log("4. Você prefere usar computadores PC ou Mac?");
console.log("Resposta: " + computadorFavorito);

//    Pergunta 5
labenuOpiniao = prompt('Você está gostando do curso da Labenu?');
console.log("5. Você está gostando do curso da Labenu?");
console.log("Resposta: " + labenuOpiniao);

// ================================================================================    

//3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

let comidasPreferidas =["sorvete", "pizza", "strogonoff", "lazanha", "salada"];

//    a) Imprima na tela o array completo

console.log(comidasPreferidas);


//    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
//       seguida por cada uma das comidas, **uma embaixo da outra**.

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//       Troque a segunda comida da sua lista pela inserida pelo usuário. 
//       Imprima na tela a nova lista

comidasPreferidas[1] = prompt('Qual sua comida preferida?');

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

// ================================================================================ 

//4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, 
//   armazenado em uma variável. Por exemplo: "Você está usando uma roupa 
//   azul hoje?". Depois, siga os passos:


let perguntas = ['Você está vivo(a)?','Você está feliz?','Você gosta de sorvete?'];



//    a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.
let resposta = [true,true,false];


//    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
//    "Você está usando uma roupa azul hoje?" true

//    Pergunta 1 
console.log(perguntas[0]);
console.log(resposta[0]);

//    Pergunta 2 
console.log(perguntas[1]);
console.log(resposta[1]);

//    Pergunta 3 
console.log(perguntas[2]);
console.log(resposta[2]);
  


// \o/ EEEEEHHHH





