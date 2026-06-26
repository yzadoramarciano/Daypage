

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

    window.location.href = 'novapagina.html'; 

}





const chaveNotas = `notas_${nome.nome}`;

const notas = JSON.parse(localStorage.getItem (chaveNotas)) || [];

console.log (notas);


const container = document.getElementById ('containerNotas');




notas.slice().sort((a,b) => b.ultimaEdicao - a.ultimaEdicao).forEach (nota => {

    const card = document.createElement ('div')

    nota.card  = card



    card.innerHTML = `<h4> ${nota.titulo} </h4> <p class="dados">${nota.data} ${nota.hora}:${nota.minuto}</p> <p class="conteudo">${nota.conteudo}</p>`


    container.appendChild (card)

    card.addEventListener('click', () => abrirnotasel(nota));


})



    const notaAbertaTi = document.getElementById ('titulonota');
    const notaAbertaCont = document.getElementById ('conteudonota');
    const notaAberta =  document.getElementById ('notaAberta');
    const overlay = document.getElementById ('overlay');



    overlay.addEventListener ('click', () =>{

         overlay.classList.remove('ativo');
        notaAberta.classList.remove('ativo');
    })
    let notaSelecionada; 



    function abrirnotasel (nota) {


        overlay.classList.add ('ativo');
        notaSelecionada = nota;

        notaAbertaTi.value = nota.titulo;
        notaAbertaCont.value = nota.conteudo;

        notaAbertaTi.readOnly = true;
        notaAbertaCont.readOnly = true;

        notaAberta.classList.add ('ativo');

    }

    const btncancela = document.getElementById ('btncancelar')

    btncancela.addEventListener('click' , cancelaredicao)

    function cancelaredicao () {

    notaAberta.classList.remove ('ativo');
    overlay.classList.remove ('ativo');

    }

    //Criação de uma variavel para auxiliar na mudança de papel do botão editar

    let editando = false

    const btnEditar = document.getElementById ('btnEditar')
    const btndeletar = document.getElementById ('btnDeletar')

    btndeletar.addEventListener ('click' , deletarNota);


    function deletarNota () {

        const indicenota = notas.indexOf(notaSelecionada);

        notas.splice (indicenota, 1);


    localStorage.setItem(
        chaveNotas,
        JSON.stringify(notas)

    );

        window.location.reload();
        overlay.classList.remove ('ativo');



    }


         function salvarNota () {

            const agora = new Date ();

        notaSelecionada.titulo = notaAbertaTi.value;
        notaSelecionada.conteudo = notaAbertaCont.value;
        notaSelecionada.data = hora.toLocaleDateString ('pt-BR');
        notaSelecionada.hora = hora.getHours();
        notaSelecionada.minuto = hora.getMinutes ();
        notaSelecionada.ultimaEdicao = Date.now();


        localStorage.setItem(
        chaveNotas,
        JSON.stringify(notas)
            );
                notaSelecionada.card.innerHTML = `<h4> ${notaSelecionada.titulo} </h4> <p class="dados">${notaSelecionada.data} ${notaSelecionada.hora}:${notaSelecionada.minuto}</p> <p class="conteudo">${notaSelecionada.conteudo}</p>`


            window.location.reload();

        }

    btnEditar.addEventListener ('click', () => {

        //Se esse botão está falso, quer dizer que ainda não foi clicado. Então se ele não foi clicado anteriormente, ou seja ainda está para editar, e foi clicado agora, os campos vão ser abertos para escrever e agora o usuário vai ter a opção de salvar, o botão vira salvar, e o editando se torna true. Agora se usuário clica de novo no botão que está verdadeiro, vai chamar a função salvar nota, os campos são fechados para escrever, e o botão vira falso de novo, voltando a ser editar. 

        
        if (!editando) {

        notaAbertaTi.readOnly = false;
        notaAbertaCont.readOnly = false;

        btnEditar.innerHTML = `Salvar`;

        editando = true;

    } else {

        salvarNota();


        notaAberta.classList.remove ('ativo');
        overlay.classList.remove ('ativo');
        btnEditar.innerHTML = `Editar`;
        editando = false;



    }


    }); 













btnsair.addEventListener ('click' , sairdaconta);

function sairdaconta () {

    window.location.href = 'index.html'; 

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
