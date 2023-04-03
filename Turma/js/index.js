'use strict'

//import { alunos } from "../js/alunos.js"
import { getFitragemCurso } from "../js/main.js"
import { getFitragemStatus } from "../js/main.js";

const alunos = await getFitragemCurso()

const criarTitulo = (aluno) => {
    const pai = document.getElementById('titulo')

    const nomeTitulo = document.createElement('h2')
    nomeTitulo.classList.add()
    nomeTitulo.textContent = aluno.NomeCurso.toUpperCase()

    pai.append(nomeTitulo)
}

const criarCard = (aluno) => {
    const card = document.createElement('a')
    card.classList.add('card');
    card.href = "../../Aluno/html/index.html"

    if (aluno.status == 'Cursando') {
        card.classList.add('card-cursando')
    } else {
        card.classList.add('card-finalizado')
    }

    const foto = document.createElement('img')
    foto.classList.add('img-card')
    foto.src = `${aluno.foto}`

    const nome = document.createElement('h2')
    nome.classList.add('nomeCurso')
    nome.textContent = aluno.nome

    const matricula = document.createElement('span')
    matricula.textContent = aluno.matricula

    card.append(foto, nome)

    card.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)
    })

    return card
}

const CursandoEFinalizado =  () => {

    // const status = document.getElementById('status')
    // status.addEventListener('click', () =>{
    //     criarCard()
    // })

    const buttons = document.querySelectorAll('.card-');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
                      
            const idClicado = button.id;
            //const retorna = await getFitragemStatus(idClicado)
            //console.log(`teste: ${idClicado}`);
            // localStorage.setItem('idClicado', idClicado)
            //const clique = await getFitragemStatus(idClicado);
            //criarCardFC(idClicado);
            //console.log(x.target.id);
            if(button.id == "status"){
               carregarCard()

            }else{
                const retorna = await getFitragemStatus(idClicado)
                const cardJSON = retorna.aluno.map(criarCard);
                const card = document.getElementById('cardsJSON')
                card.replaceChildren(...cardJSON)
            }
           
        });

    });

}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.aluno.map(criarCard)

    card.replaceChildren(...cardsJSON)
}
CursandoEFinalizado()
criarTitulo(alunos)
carregarCard()