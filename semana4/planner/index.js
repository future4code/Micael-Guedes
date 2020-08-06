function addTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    let valorInputTarefa = inputTarefa.value
    let valorDiasSemana = document.getElementById("dias-semana").value
    let diaEscolhido

    if (valorInputTarefa === ""){
        alert("Você esqueceu de digitar a tarefa!")
    }
    switch (valorDiasSemana) {
        case "domingo":
            diaEscolhido = document.getElementById("domingo")
            diaEscolhido.innerHTML += `<p class="tarefa" onclick="riscarTarefa()">${valorInputTarefa}</p>`
            break
        case "segunda":
            diaEscolhido = document.getElementById("segunda")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
        case "terca":
            diaEscolhido = document.getElementById("terca")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
        case "quarta":
            diaEscolhido = document.getElementById("quarta")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
        case "quinta":
            diaEscolhido = document.getElementById("quinta")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
        case "sexta":
            diaEscolhido = document.getElementById("sexta")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
        case "sabado":
            diaEscolhido = document.getElementById("sabado")
            diaEscolhido.innerHTML += `<p class="tarefa">${valorInputTarefa}</p>`
            break
    }

    inputTarefa.value = ""
}

// // desafio
// function riscarTarefa(){
//     document.getElementsByClassName('tarefa').style.backgroundColor = "red"
    
// }

