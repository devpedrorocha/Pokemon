// variaveis globais

let moveSelecionado = '';
let moveset = [];
let divGolpes = document.querySelector('#listMoves')
const movesDisponiveis = ['Water Pulse', 'Avalanche', 'Dragon Pulse', 'Ice Beam', 'Blizzard'];


// componentes
const btnAdd = document.querySelector('.add')
const select = document.querySelector("#seletor")


// add eventos
btnAdd.addEventListener("click", adicionaGolpe)


// métodos

function goToBulbapedia() {
    open("https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)")
}

function carregaGolpes() {
    let html = ""
    movesDisponiveis.forEach((move) => {
        html += `<option value='${move}'>${move}</option>`
    })
    select.innerHTML = html
}

function adicionaGolpe() {

    moveSelecionado = select.value

    if (moveset.length === 4) return alert('Só é possível atribuir 4 golpes.')
    if (moveset.includes(moveSelecionado)) return alert('Não é possível repetir o mesmo golpe.');

    document.querySelector('#noMoveset').style.display = 'none'
    let li = document.createElement('li')
    li.id = moveSelecionado
    li.innerHTML = `${moveSelecionado} <button class="deleteBtn" id = "delete${moveSelecionado}">Deletar</button>`

    document.getElementById("listMoves").appendChild(li)
    moveset.push(`${moveSelecionado}`)

    document.getElementById(`delete${moveSelecionado}`).addEventListener("click", deletaGolpe)

}

function deletaGolpe(event) {
    moveset = moveset.filter((elemento) => {
        return elemento !== event.target.parentNode.id
    })
    event.target.parentNode.remove()
    if (moveset.length === 0) {
        document.querySelector("#noMoveset").style.display = 'block'
    }
}

carregaGolpes()