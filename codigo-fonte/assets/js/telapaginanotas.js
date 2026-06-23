
const hora = new Date ();

const horario = hora.getHours ()

const nome = JSON.parse(localStorage.getItem('usuario'));

const mensageminicial = document.getElementById ('mensagem');

const compri = document.getElementById ('comprimento');





const btnsair = document.querySelector ('button#sair');

if ( horario >= 0 && horario < 6) {

    compri.innerHTML = `Boa madrugada, ${nome.nome}.`
} else if (horario >= 6 && horario < 12) {

    compri.innerHTML = `Bom dia, ${nome.nome}.`
} else if (horario >= 12 && horario < 18 ) {

    compri.innerHTML = `Boa tarde, ${nome.nome}.`
} else {
 compri.innerHTML = `Boa noite, ${nome.nome}.`
}


const titulo = document.querySelector('input#titulodanota');
const conteudo = document.querySelector ('textarea#conteudodanota');
const btnsalvar = document.querySelector ('button#salvarnota');
const btnfecharPop =  document.querySelector ('button#btnfecharPop');
const btnfecharVazio = document.querySelector ('button#btnfecharVazio');
 

btnfecharPop.addEventListener ('click', fecharPop);

btnfecharVazio.addEventListener ('click', fecharPopVazio);



function mostrarPop(mensagem) {


    document.getElementById('msgpaginasalva').textContent = mensagem;
    popup.classList.add('ativo');

    
}


function fecharPop () {

    popup.classList.remove('ativo'); 
    window.location.href = 'home.html'

}


function mostrarPopVazio(mensagemVazio) {

    document.getElementById('vazio').textContent = mensagemVazio;

    popupvazio.classList.add ('ativo');

}

function fecharPopVazio () {

    popupvazio.classList.remove ('ativo');

}





btnsalvar.addEventListener ('click' , salvandonota);

 

function salvandonota() {

 if (titulo.value.trim() === '' || conteudo.value.trim() === '') {

    mostrarPopVazio ('Não é possível salvar uma página sem título e/ou conteúdo!');
        return;
    }

    const nota = {

        titulo: titulo.value,
        conteudo: conteudo.value,
        data: hora.toLocaleDateString ('pt-BR'),
        hora: hora.getHours(),
        minuto: hora.getMinutes ()
    }
//vamos trazer o usuario logado novamente


    const chaveNotas = `notas_${nome.nome}`

//Vamos pegar as notas desse usuário



    let notas = JSON.parse (localStorage.getItem(chaveNotas)) || [];

    //coloca a nota dentro desse array

    notas.push(nota);

     localStorage.setItem(chaveNotas,JSON.stringify(notas));

    mostrarPop ('Sua nova página foi salva com sucesso!');



console.log (notas);
console.log (chaveNotas);




};


const botaovoltar = document.querySelector('button#botaovoltar')


botaovoltar.addEventListener ('click', voltar) 

function voltar(){

    window.location.href = '../home.html';
}

    
btnsair.addEventListener ('click' , sairdaconta);

function sairdaconta () {

    window.location.href = '../telaboasvindas.html'; 

}




