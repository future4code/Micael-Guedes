
const arrayPosts = []

function armazenaDados() {
    //captura DOM
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")
    

    //cria objeto
    const post = {

    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value
}

    //adiciona no array
    arrayPosts.push(post)

    //imprime no console
    console.log(post)
    console.log(arrayPosts)

    //limpa os campos
    tituloPost.value = ''
    autorPost.value = ''
    conteudoPost.value = ''

    
}

const containerPosts = document.getElementById("container-de-posts")

containerPosts.innerHTML += `
<div class="postagem">
    <h1>${arrayPosts}</h1>
    <h3>${post.autor}</h3>
    <p>${post.conteudo}</p>
</div>`













// // captura dos valores dos campos do HTML

// const tituloPost = document.getElementById("titulo-post")
// const autorPost = document.getElementById("autor-post")
// const conteudoPost = document.getElementById("conteudo-post")
// const containerPost = document.getElementById("container-de-posts")


// // objeto 

// const post = {

//     titulo: tituloPost.value,
//     autor: autorPost.value,
//     conteudo: conteudoPost.value,
//     container: containerPost.value,

// }

// //exemplo console.log acessando uma propriedade do objeto
// console.log(post.titulo)
