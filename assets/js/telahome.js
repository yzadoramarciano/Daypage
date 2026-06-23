

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


const botaoNovapagina = document.querySelector ('button#novapagina')

botaoNovapagina.addEventListener ('click' , abrirnota)

function abrirnota() {

    window.location.href = '../novapagina.html'; 

}



const chaveNotas = `notas_${nome.nome}`;

const notas = JSON.parse(localStorage.getItem (chaveNotas)) || [];

console.log (notas);


const container = document.getElementById ('containerNotas');

notas.slice().reverse().forEach (nota => {

    const card = document.createElement ('div')

    card.innerHTML = `<h4> ${nota.titulo} </h4> <p class="dados">${nota.data} ${nota.hora}:${nota.minuto}</p> <p class="conteudo">${nota.conteudo}</p>`


    container.appendChild (card)

})


btnsair.addEventListener ('click' , sairdaconta);

function sairdaconta () {

    window.location.href = '../index.html'; 

}


const pesquisa = document.getElementById ('campoPesquisa');

pesquisa.addEventListener ('input', () => {

    const textPesquisado = pesquisa.value.toLowerCase ();

    container.innerHTML = '';

    notas.forEach (nota => {

        if ( nota.titulo.toLowerCase().includes(textPesquisado) ||
            nota.conteudo.toLowerCase().includes(textPesquisado))
            {
                const card = document.createElement('div');

                card.innerHTML = `<h4> ${nota.titulo} </h4> <p class="dados">${nota.data} ${nota.hora}:${nota.minuto}</p> <p class="conteudo">${nota.conteudo}</p>`


                container.appendChild (card)




            }


    });
});