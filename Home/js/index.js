'use strict'

//import { contatos } from "../js/quantidadeDeTurmas.js";
import { getDadosCurso } from "../js/main.js"

const contatos = await getDadosCurso()

const criarCard =  (contato) => {

    const card = document.createElement('a')
    card.classList.add('card');
    card.href = '../../Turma/html/index.html'

    const imagem = document.createElement('img')
    imagem.classList.add('img-card')
    imagem.src = `${contato.icone}`

    const sigla = document.createElement('h2')
    sigla.classList.add('nomeCurso')
    sigla.textContent = contato.sigla

    card.addEventListener('click', () => {
        localStorage.setItem('curso', sigla.textContent)
    })

    card.append(imagem, sigla)

    return card
}

const imagem = document.querySelector('.sair')

imagem.addEventListener('mouseover', function(){
    imagem.classList.add('imagem-sair')
})
imagem.addEventListener('mouseout', function(){
    imagem.classList.add('sair')
    imagem.classList.remove('imagem-sair')
})
imagem.addEventListener('click', function(){
    closeWindow()
})

function closeWindow() {
    //A função closeWindow()abre uma nova página da web na mesma janela atual e, em seguida, fecha a janela atual.
    //open() = para abrir uma nova página na mesma janela 
    //close() = para fechar a janela atual. 
    //return false é usada para impedir que a página seja recarregada.
    const new_window =
        open(location, '_self');
    new_window.close();
    return false;
}


const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = contatos.cursos.map(criarCard)
    card.replaceChildren(...cardsJSON)
}

carregarCard()